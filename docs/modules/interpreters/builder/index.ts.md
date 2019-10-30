---
title: interpreters/builder/index.ts
nav_order: 16
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [Builder (type alias)](#builder-type-alias)
- [BuilderValue (type alias)](#buildervalue-type-alias)
- [ByTag (type alias)](#bytag-type-alias)
- [URI (type alias)](#uri-type-alias)
- [BuilderType (class)](#buildertype-class)
- [URI (constant)](#uri-constant)
- [makeBuilder (function)](#makebuilder-function)
- [makeByTag (function)](#makebytag-function)

---

# Builder (type alias)

**Signature**

```ts
export type Builder<T> = (x: T) => T
```

# BuilderValue (type alias)

**Signature**

```ts
export type BuilderValue<B extends BuilderType<any>> = B extends BuilderType<infer A> ? A : never
```

# ByTag (type alias)

**Signature**

```ts
export type ByTag<A> = <Tag extends TagsOf<A> & string>(
  t: Tag
) => <Tags extends (A[Tag] & string)[]>(...tags: Tags) => ADT<A, Tag, ElemType<typeof tags>>
```

# URI (type alias)

**Signature**

```ts
export type URI = typeof URI
```

# BuilderType (class)

**Signature**

```ts
export class BuilderType<A> {
  constructor(public of: Builder<A>) { ... }
  ...
}
```

# URI (constant)

**Signature**

```ts
export const URI = ...
```

# makeBuilder (function)

**Signature**

```ts
export const makeBuilder = <A>() => ...
```

# makeByTag (function)

**Signature**

```ts
export const makeByTag = <A>(): ByTag<A> => tag => (..._keys) => ...
```
