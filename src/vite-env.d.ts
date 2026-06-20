/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SKIP_TOKEN_GATE?: string;
  readonly VITE_VERIFY_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
