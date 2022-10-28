import { foo } from "../fixture/module.js";

it("should resolve ECMAScript modules", () => {
  expect(foo).toBe("foo");
});
