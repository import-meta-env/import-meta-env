const childProcess = require("child_process");
const { expect } = require("chai");

module.exports = () => {
  // arrange
  childProcess.execSync("pnpm exec rimraf dist", {
    stdio: "inherit",
  });

  // act
  childProcess.execSync(
    "pnpm exec cross-env FOO=1 BAR=2 ./node_modules/.bin/babel src --out-dir dist",
    {
      stdio: "inherit",
    }
  );
  const output = childProcess.execSync("node dist/index.js").toString().trim();

  // assert
  expect(output).to.equal('Foo: 1\nBar: 2\nAll: {"FOO":"1","BAR":"2"}');
};
