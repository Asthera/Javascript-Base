const { default: TestRunner } = require("jest-runner");
const addFive = require("./addFive");
for (var i = 100; i > 0; i--) {
  test("returns the number plus 5", () => {
    expect(addFive(i)).toBe(i + 5);
  });
}
// npm init -y                      [ only once ]
// npm install --save-dev jest      [ only once ]
// npm run test
