# Snout Jest Configuration

[![Current version][badge-version-image]][badge-version-link]
[![Build status][badge-build-image]][badge-build-link]

[badge-build-image]: https://img.shields.io/github/actions/workflow/status/snout-router/jest-config/ci.yml?branch=main&style=for-the-badge
[badge-build-link]: https://github.com/snout-router/jest-config/actions/workflows/ci.yml
[badge-version-image]: https://img.shields.io/npm/v/@snout/jest-config?label=%40snout%2Fjest-config&logo=npm&style=for-the-badge
[badge-version-link]: https://npmjs.com/package/@snout/jest-config

## Usage

```js
// jest.config.js
export { default } from "@snout/jest-config";
```

```makefile
# Makefile
export NODE_OPTIONS := --experimental-vm-modules --redirect-warnings=artifacts/node-warnings
```
