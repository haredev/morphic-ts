---
title: interpreters/builder/index-monocle.ts
nav_order: 14
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [MonocleFor (interface)](#monoclefor-interface)
- [MonocleFor (function)](#monoclefor-function)

---

# MonocleFor (interface)

**Signature**

```ts
export interface MonocleFor<S> {
  fromProp: LenseFromProp<S>
  fromProps: LenseFromProps<S>
  fromPath: m.LensFromPath<S>
  fromAt: IndexFromAt<S>
  fromOptionProp: LenseFromOptionProp<S>
  fromNullableProp: LenseFromNullableProp<S>
  prism: m.Prism<Option<S>, S>
  fromPredicate: PrismFromPredicate<S>
}
```

# MonocleFor (function)

**Signature**

```ts
export const MonocleFor = <A>(): MonocleFor<A> => ...
```
