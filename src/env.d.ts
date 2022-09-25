declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NEST_PORT: string;
    }
  }
}

export {};
