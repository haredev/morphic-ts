---
title: interpreters/builder/index-matcher.ts
nav_order: 13
parent: Modules
---

---

<h2 class="text-delta">Table of contents</h2>

- [Matchers (interface)](#matchers-interface)
- [Matchers (function)](#matchers-function)

---

# Matchers (interface)

**Signature**

```ts
export interface Matchers<A, Tag extends keyof A & string> {
  fold: Folder<A>
  match: Matcher<A, Tag>
  matchWiden: MatcherWiden<A, Tag>
}
```

# Matchers (function)

**Signature**

```ts
export const Matchers = <A, Tag extends keyof A & string>(tag: Tag): Matchers<A, Tag> => ...
```
