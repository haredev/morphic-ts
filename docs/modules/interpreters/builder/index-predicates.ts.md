---
title: interpreters/builder/index-predicates.ts
nav_order: 15
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [Predicates (interface)](#predicates-interface)
- [IsA (type alias)](#isa-type-alias)
- [Predicates (function)](#predicates-function)

---

# Predicates (interface)

**Signature**

```ts
export interface Predicates<A, V extends A> {
  isA: IsA<A, V>
}
```

# IsA (type alias)

**Signature**

```ts
export type IsA<A, V extends A> = (a: A) => a is V
```

# Predicates (function)

**Signature**

```ts
export const Predicates = <A = never>() => <Tag extends keyof A & string, Key extends A[Tag]>(
  tag: Tag,
  key: Key
): Predicates<A, VariantType<A, Tag, Key>> => ...
```
