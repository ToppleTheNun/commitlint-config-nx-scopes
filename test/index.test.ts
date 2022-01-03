import { cleanup } from "@nrwl/nx-plugin/src/utils/testing-utils/utils";
import * as config from "../src";
import { isDefined, isRuleConfigTuple, promisify } from "./helpers";

beforeAll(() => {
  cleanup();
});

test("exports rules key", () => {
  expect(config).toHaveProperty("rules");
});

test("rules hold object", () => {
  expect(config).toMatchObject({
    rules: expect.any(Object),
  });
});

test("rules contain scope-enum", () => {
  expect(config).toMatchObject({
    rules: {
      "scope-enum": expect.anything(),
    },
  });
});

test("scope-enum is function", () => {
  expect(config).toMatchObject({
    rules: {
      "scope-enum": expect.any(Function),
    },
  });
});

test("scope-enum does not throw for missing context", async () => {
  const { "scope-enum": fn } = config.rules;
  if (!isDefined(fn) || isRuleConfigTuple(fn)) {
    throw new Error("fn is not defined or is a tuple");
  }
  await expect(promisify(fn)).resolves.toBeTruthy();
});

test("scope-enum has expected severity", async () => {
  const { "scope-enum": fn } = config.rules;
  if (!isDefined(fn) || isRuleConfigTuple(fn)) {
    throw new Error("fn is not defined or is a tuple");
  }
  const [severity] = await promisify(fn);
  expect(severity).toBe(2);
});

test("scope-enum has expected modifier", async () => {
  const { "scope-enum": fn } = config.rules;
  if (!isDefined(fn) || isRuleConfigTuple(fn)) {
    throw new Error("fn is not defined or is a tuple");
  }
  const [, modifier] = await promisify(fn);
  expect(modifier).toBe("always");
});
