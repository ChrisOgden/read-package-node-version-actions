import * as core from '@actions/core';
import { getNodeVersion } from './getNodeVersion';
import { getPnpmVersion } from './getPnpmVersion'

async function run() {
  try {
    const path = core.getInput('path');

    core.debug(`Load package.json at ${path}`);

    const result = getNodeVersion(path);
    const pnpmResult = getPnpmVersion(path);

    core.debug(`set output: version: ${result}`);
    core.setOutput('version', result);
    core.setOutput('node', result);
    core.setOutput('pnpm', pnpmResult);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
