interface ImportMetaEnv {
  readonly VITE_RESPONDER: string;
  readonly VITE_FORM_TEMPLATE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
