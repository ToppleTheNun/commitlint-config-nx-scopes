import { QualifiedRuleConfig } from "@commitlint/types/lib/rules";
import { getProjects } from "@nrwl/devkit";
import { FsTree } from "@nrwl/tao/src/shared/tree";

const isDefined = <T>(t: T | undefined): t is T => t !== undefined;

export interface GetNxProjectsParams {
  cwd?: string;
}

export type GetNxProjectsFn = (
  params: GetNxProjectsParams
) => QualifiedRuleConfig<string[]>;

export const getNxProjects: GetNxProjectsFn =
  ({ cwd = process.cwd() }) =>
  () => {
    const tree = new FsTree(cwd, true);
    const projects = Array.from(getProjects(tree).keys());
    const scopes = projects.filter(isDefined);
    return [2, "always", scopes];
  };
