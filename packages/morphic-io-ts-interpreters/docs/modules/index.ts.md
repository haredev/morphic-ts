---
title: index.ts
nav_order: 1
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [IoTsURI (type alias)](#iotsuri-type-alias)
- [IOTSType (class)](#iotstype-class)
- [IoTsURI (constant)](#iotsuri-constant)
- [iotsConfig (constant)](#iotsconfig-constant)

---

# IoTsURI (type alias)

**Signature**

```ts
export type IoTsURI = typeof IoTsURI
```

Added in v0.0.1

# IOTSType (class)

**Signature**

```ts
export class IOTSType<O, A> {
  constructor(public type: t.Type<A, O>) { ... }
  ...
}
```

Added in v0.0.1

# IoTsURI (constant)

**Signature**

```ts
export const IoTsURI: typeof IoTsURI = ...
```

Added in v0.0.1

# iotsConfig (constant)

**Signature**

```ts
export const iotsConfig: ConfigWrapper<typeof IoTsURI> = ...
```

Added in v0.0.1
