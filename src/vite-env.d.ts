/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  glob: (
    glob: string,
    options?: { eager?: boolean },
  ) => Record<string, { default: string }>;
}
