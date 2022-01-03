import {
  QualifiedRuleConfig,
  RuleConfigTuple,
} from "@commitlint/types/lib/rules";
import { cleanup } from "@nrwl/nx-plugin/src/utils/testing-utils/utils";
import { runPackageManagerInstall, tmpProjPath } from "@nrwl/nx-plugin/testing";
import { execSync } from "child_process";
import { ensureDirSync } from "fs-extra";
import { dirname } from "path";

export const isDefined = <T>(something: T | undefined): something is T =>
  something !== undefined;

export const isRuleConfigTuple = <T>(
  qualifiedRuleConfig: QualifiedRuleConfig<T>
): qualifiedRuleConfig is RuleConfigTuple<T> => {
  return Array.isArray(qualifiedRuleConfig);
};

export const promisify = async <T>(
  qualifiedRuleConfig: QualifiedRuleConfig<T>
) => {
  if (typeof qualifiedRuleConfig !== "function") {
    throw new Error("qualifiedRuleConfig is not a function");
  }
  return qualifiedRuleConfig();
};

export const runNxNewCommand = (args?: string, silent?: boolean) => {
  const localTmpDir = dirname(tmpProjPath());
  return execSync(
    `node ${require.resolve(
      "@nrwl/tao"
    )} new proj --nx-workspace-root=${localTmpDir} --no-interactive --skip-install --collection=@nrwl/workspace --npmScope=proj --preset=empty ${
      args || ""
    }`,
    {
      cwd: localTmpDir,
      ...(silent && false ? { stdio: ["ignore", "ignore", "ignore"] } : {}),
    }
  );
};

export const newNxProject = () => {
  cleanup();
  runNxNewCommand("", false);
  runPackageManagerInstall();
};

export const ensureNxProject = () => {
  ensureDirSync(tmpProjPath());
  newNxProject();
};
