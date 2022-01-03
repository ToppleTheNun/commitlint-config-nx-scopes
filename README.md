# commitlint-config-nx-scopes

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> Lint your nx project commits

Shareable `commitlint` config enforcing nx package and workspace names as scopes.
Use with [@commitlint/cli] and [@commitlint/prompt-cli].

## Getting started

```shell
$ npm install --save-dev commitlint-config-nx-scopes @commitlint/cli
$ echo "module.exports = {extends: ['commitlint-config-nx-scopes']};" > commitlint.config.js
```

[@commitlint/cli]: https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/cli
[@commitlint/prompt-cli]: https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/prompt-cli
