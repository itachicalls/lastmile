/** Shared animated backdrop HTML for menu-style screens */
export function menuBackdropHtml(): string {
  return `
    <div class="animated-backdrop" aria-hidden="true">
      <div class="backdrop-sky"></div>
      <div class="backdrop-aurora"></div>
      <div class="backdrop-stars"></div>
      <div class="backdrop-shooting-stars">
        <span class="shoot-star ss-1"></span>
        <span class="shoot-star ss-2"></span>
        <span class="shoot-star ss-3"></span>
      </div>
      <div class="backdrop-city"></div>
      <div class="backdrop-road"></div>
      <div class="backdrop-glow backdrop-glow-a"></div>
      <div class="backdrop-glow backdrop-glow-b"></div>
      <div class="backdrop-glow backdrop-glow-c"></div>
      <span class="float-icon fi-1">📦</span>
      <span class="float-icon fi-2">📦</span>
      <span class="float-icon fi-3">🛸</span>
      <span class="float-icon fi-4">👽</span>
      <span class="float-icon fi-5">🪙</span>
      <span class="float-icon fi-6">⭐</span>
      <span class="float-icon fi-7">📋</span>
      <span class="float-icon fi-8">✉️</span>
    </div>`;
}
