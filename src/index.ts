import { RulesConfig } from "@commitlint/types";
import { getNxProjects } from "./getNxProjects";

export const utils = { getNxProjects };
export const rules: Partial<RulesConfig> = {
  "scope-enum": getNxProjects({}),
};
