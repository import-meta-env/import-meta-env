import { Options } from "../types";
import { resolveEnvExample } from "../../../shared/resolve-env-example";

const createDeclaration = (options: Options) => {
  const envExampleKeys = resolveEnvExample({
    envExampleFilePath: options.example,
  });
  return [
    "// Generated by '@import-meta-env/typescript'",
    "",
    "interface ImportMetaEnv {",
    ...envExampleKeys.map((key) => `  readonly ${key}: string;`),
    "}",
    "",
    "interface ImportMeta {",
    "  readonly env: ImportMetaEnv;",
    "}",
    "",
  ].join("\n");
};

export default createDeclaration;
