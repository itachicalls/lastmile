import * as THREE from 'three';

export type CoinEntity = {
  mesh: THREE.Mesh;
  z: number;
  x: number;
  collected: boolean;
};

export function createCoinLine(
  scene: THREE.Scene,
  z: number,
  count: number,
  _spread = 3
): CoinEntity[] {
  const coins: CoinEntity[] = [];
  const lanes = [-3.2, -1.6, 0, 1.6, 3.2];
  for (let i = 0; i < count; i++) {
    const x = lanes[Math.floor(Math.random() * lanes.length)];
    const geo = new THREE.CylinderGeometry(0.25, 0.25, 0.08, 16);
    const mat = new THREE.MeshLambertMaterial({
      color: '#FFD54F',
      emissive: '#FFA000',
      emissiveIntensity: 0.5,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = Math.PI / 2;
    mesh.position.set(x, 0.6, z + (i % 2) * 0.5);
    scene.add(mesh);
    coins.push({ mesh, z: z + (i % 2) * 0.5, x, collected: false });
  }
  return coins;
}

export function updateCoins(coins: CoinEntity[], dt: number): void {
  for (const c of coins) {
    if (!c.collected) {
      c.mesh.rotation.z += dt * 3;
      c.mesh.position.y = 0.6 + Math.sin(Date.now() * 0.005 + c.x) * 0.1;
    }
  }
}

export function tryCollectCoin(
  coins: CoinEntity[],
  px: number,
  pz: number,
  radius: number
): number {
  let gained = 0;
  for (const c of coins) {
    if (c.collected) continue;
    const dx = c.x - px;
    const dz = c.z - pz;
    if (dx * dx + dz * dz < radius * radius) {
      c.collected = true;
      c.mesh.visible = false;
      gained += 5;
    }
  }
  return gained;
}

export function disposeCoins(coins: CoinEntity[], scene: THREE.Scene): void {
  for (const c of coins) {
    scene.remove(c.mesh);
    c.mesh.geometry.dispose();
    (c.mesh.material as THREE.Material).dispose();
  }
}
