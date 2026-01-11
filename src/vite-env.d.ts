/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
  glob<E extends Record<string, any> = Record<string, any>>(
    pattern: string,
    options?: { as?: string; eager?: boolean }
  ): Record<string, () => Promise<E>>
}
