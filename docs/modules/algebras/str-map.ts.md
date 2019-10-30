---
title: algebras/str-map.ts
nav_order: 6
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [ModelAlgebraStrMap (interface)](#modelalgebrastrmap-interface)
- [ModelAlgebraStrMap1 (interface)](#modelalgebrastrmap1-interface)
- [ModelAlgebraStrMap2 (interface)](#modelalgebrastrmap2-interface)

---

# ModelAlgebraStrMap (interface)

**Signature**

```ts
export interface ModelAlgebraStrMap {
  strMap: <L, A>(codomain: M<L, A>) => M<Array<[string, L]>, Record<string, A>>
}
```

# ModelAlgebraStrMap1 (interface)

**Signature**

```ts
export interface ModelAlgebraStrMap1<F extends URIS> {
  strMap: <A>(codomain: Kind<F, A>) => Kind<F, Record<string, A>>
}
```

# ModelAlgebraStrMap2 (interface)

**Signature**

```ts
export interface ModelAlgebraStrMap2<F extends URIS2> {
  strMap: <L, A>(codomain: Kind2<F, L, A>) => Kind2<F, Record<string, L>, Record<string, A>>
}
```
