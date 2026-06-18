import * as THREE from 'three';

export type PackagePickup = {
  mesh: THREE.Group;
  x: number;
  z: number;
  collected: boolean;
  bobPhase: number;
};

export type ThrownPackage = {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  life: number;
  damage: number;
};

export function createPackagePickups(
  scene: THREE.Scene,
  z: number,
  count: number,
  spread = 3.5
): PackagePickup[] {
  const pickups: PackagePickup[] = [];
  const lanes = [-3.2, -1.6, 0, 1.6, 3.2];
  for (let i = 0; i < count; i++) {
    const x = lanes[Math.floor(Math.random() * lanes.length)];
    const group = new THREE.Group();
    group.position.set(x, 0, z + (i % 3) * 0.6);

    const box = new THREE.Mesh(
      new THREE.BoxGeometry(0.45, 0.45, 0.45),
      new THREE.MeshStandardMaterial({
        color: '#FF9800',
        emissive: '#FF6D00',
        emissiveIntensity: 0.6,
        metalness: 0.2,
        roughness: 0.4,
      })
    );
    box.position.y = 0.8;
    box.castShadow = true;
    group.add(box);

    const ribbon = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.08, 0.08),
      new THREE.MeshStandardMaterial({ color: '#FFD54F', emissive: '#FFA000', emissiveIntensity: 0.3 })
    );
    ribbon.position.y = 1.05;
    group.add(ribbon);

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.5, 0.65, 24),
      new THREE.MeshBasicMaterial({ color: '#FFD54F', transparent: true, opacity: 0.5, side: THREE.DoubleSide })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.05;
    group.add(ring);

    scene.add(group);
    pickups.push({ mesh: group, x, z: z + (i % 3) * 0.6, collected: false, bobPhase: i * 1.2 });
  }
  return pickups;
}

export function updatePackagePickups(pickups: PackagePickup[], time: number): void {
  for (const p of pickups) {
    if (p.collected) continue;
    p.mesh.position.y = Math.sin(time * 3 + p.bobPhase) * 0.15;
    p.mesh.rotation.y = time * 1.5 + p.bobPhase;
    const ring = p.mesh.children[2] as THREE.Mesh;
    ring.scale.setScalar(1 + Math.sin(time * 4 + p.bobPhase) * 0.15);
  }
}

export function tryCollectPackages(
  pickups: PackagePickup[],
  px: number,
  pz: number,
  radius: number
): number {
  let n = 0;
  for (const p of pickups) {
    if (p.collected) continue;
    const dx = p.x - px;
    const dz = p.z - pz;
    if (dx * dx + dz * dz < radius * radius) {
      p.collected = true;
      p.mesh.visible = false;
      n++;
    }
  }
  return n;
}

export function spawnThrow(
  scene: THREE.Scene,
  fromX: number,
  fromZ: number,
  targetX: number,
  targetZ: number
): ThrownPackage {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.4, 0.4, 0.4),
    new THREE.MeshStandardMaterial({
      color: '#FF5722',
      emissive: '#FF3D00',
      emissiveIntensity: 0.8,
    })
  );
  mesh.position.set(fromX, 1.2, fromZ);
  mesh.castShadow = true;
  scene.add(mesh);

  const dir = new THREE.Vector3(targetX - fromX, 0, targetZ - fromZ).normalize();
  const velocity = new THREE.Vector3(dir.x * 22, 12, dir.z * 22);

  return { mesh, velocity, life: 1.2, damage: 8 };
}

/** Mail-gun envelope — weaker than package throw, no inventory cost */
export function spawnMailShot(
  scene: THREE.Scene,
  fromX: number,
  fromZ: number,
  targetX: number,
  targetZ: number,
  damage: number
): ThrownPackage {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.22, 0.14, 0.04),
    new THREE.MeshStandardMaterial({
      color: '#FFFDE7',
      emissive: '#FFD54F',
      emissiveIntensity: 0.45,
    })
  );
  mesh.position.set(fromX + 0.35, 1.05, fromZ + 0.2);
  scene.add(mesh);

  const dir = new THREE.Vector3(targetX - fromX, 0, targetZ - fromZ).normalize();
  const velocity = new THREE.Vector3(dir.x * 28, 2, dir.z * 28);

  return { mesh, velocity, life: 0.85, damage };
}

export function updateThrows(throws: ThrownPackage[], dt: number, scene: THREE.Scene): ThrownPackage[] {
  const alive: ThrownPackage[] = [];
  for (const t of throws) {
    t.life -= dt;
    t.velocity.y -= 28 * dt;
    t.mesh.position.addScaledVector(t.velocity, dt);
    t.mesh.rotation.x += dt * 8;
    t.mesh.rotation.z += dt * 6;
    if (t.life > 0 && t.mesh.position.y > 0.1) alive.push(t);
    else {
      scene.remove(t.mesh);
      t.mesh.geometry.dispose();
      (t.mesh.material as THREE.Material).dispose();
    }
  }
  return alive;
}

export function disposePickups(pickups: PackagePickup[], scene: THREE.Scene): void {
  for (const p of pickups) {
    scene.remove(p.mesh);
    p.mesh.traverse((c) => {
      if (c instanceof THREE.Mesh) {
        c.geometry.dispose();
        (c.material as THREE.Material).dispose();
      }
    });
  }
}
