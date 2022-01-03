import { runNxCommandAsync, tmpProjPath, uniq } from "@nrwl/nx-plugin/testing";
import { getNxProjects } from "../src/getNxProjects";
import { ensureNxProject, promisify } from "./helpers";

beforeEach(() => {
  ensureNxProject();
});

test("returns empty list for empty nx repo", async () => {
  const [, , value] = await promisify(getNxProjects({ cwd: tmpProjPath() }));
  expect(value).toEqual([]);
}, 500000);

test("returns non-empty list for non-empty nx repo", async () => {
  const project = uniq("commitlint-config-nx-scopes");
  await runNxCommandAsync(`generate @nrwl/workspace:lib ${project}`);
  const [, , value] = await promisify(getNxProjects({ cwd: tmpProjPath() }));
  expect(value).toEqual([project]);
}, 500000);
