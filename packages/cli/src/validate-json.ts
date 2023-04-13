import serialize from "serialize-javascript";

export const validateJSON = ({
  env,
}: {
  env: Record<string, string>;
}): boolean => {
  try {
    eval(`JSON.parse('${serialize(env)}')`);
    return true;
  } catch (e) {
    return false;
  }
};
