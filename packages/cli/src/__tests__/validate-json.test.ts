import { validateJSON } from "../validate-json";

const suits = [
  {
    input: { env: { KEY: "" } },
    output: true,
  },
  {
    input: { env: { KEY: '\\"' } },
    output: true,
  },
  {
    input: { env: { KEY: '"' } },
    output: false,
  },
];

suits.forEach((suit, index) => {
  test(`suit ${index}`, () => {
    expect(validateJSON(suit.input)).toEqual(suit.output);
  });
});
