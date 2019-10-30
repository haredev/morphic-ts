---
title: interpreters/builder/index-ctors.ts
nav_order: 12
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [Ctors (interface)](#ctors-interface)
- [CtorsIntern (interface)](#ctorsintern-interface)
- [Ctor (type alias)](#ctor-type-alias)
- [CtorNarrowed (type alias)](#ctornarrowed-type-alias)
- [Ctors (function)](#ctors-function)

---

# Ctors (interface)

**Signature**

```ts
export interface Ctors<A, Tags extends A[Tag] & string, Tag extends keyof A & string>
  extends CtorsIntern<A, ExtractUnion<A, Tag, Tags>, Tag> {}
```

# CtorsIntern (interface)

**Signature**

```ts
export interface CtorsIntern<A, V extends A, Tag extends string> {
  of: Ctor<A, V, Tag>
  narrowed: CtorNarrowed<A, V, Tag>
}
```

# Ctor (type alias)

**Signature**

```ts
export type Ctor<S, V extends S, Tag extends string> = (x: Remove<V, Tag>) => S
```

# CtorNarrowed (type alias)

**Signature**

```ts
export type CtorNarrowed<S, V extends S, Tag extends string> = (x: Remove<V, Tag>) => V
```

# Ctors (function)

**Signature**

```ts
export const Ctors = <A, Tag extends keyof A & string>(tag: Tag) => <K extends A[Tag] & string>(
  key: K
): Ctors<A, typeof key, Tag> => ...
```
