---
title: algebras/set.ts
nav_order: 5
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [ModelAlgebraSet (interface)](#modelalgebraset-interface)
- [ModelAlgebraSet1 (interface)](#modelalgebraset1-interface)
- [ModelAlgebraSet2 (interface)](#modelalgebraset2-interface)

---

# ModelAlgebraSet (interface)

**Signature**

```ts
export interface ModelAlgebraSet {
  set: <L, A>(a: M<L, A>, ord: Ord<A>) => M<Array<L>, Set<A>>
}
```

# ModelAlgebraSet1 (interface)

**Signature**

```ts
export interface ModelAlgebraSet1<F extends URIS> {
  set: <A>(a: Kind<F, A>, ord: Ord<A>) => Kind<F, Set<A>>
}
```

# ModelAlgebraSet2 (interface)

**Signature**

```ts
export interface ModelAlgebraSet2<F extends URIS2> {
  set: <L, A>(a: Kind2<F, L, A>, ord: Ord<A>) => Kind2<F, Array<L>, Set<A>>
}
```
