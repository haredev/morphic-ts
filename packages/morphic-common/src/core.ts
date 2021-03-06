import { Kind, URIS, URIS2, Kind2 } from './HKT'

/**
 *  @since 0.0.1
 */
export type OfType<F extends URIS, A> = Kind<F, A>

/**
 *  @since 0.0.1
 */
export type OfType2<F extends URIS2, L, A> = Kind2<F, L, A>

type Function1 = (a: any) => any

/**
 *  @since 0.0.1
 */
export type CacheType = <F extends Function1>(f: F) => F

/**
 *  @since 0.0.1
 */
export function cacheUnaryFunction<F extends Function1>(f: F) {
  type K = F extends (a: infer K) => any ? K : any
  type V = F extends (a: any) => infer V ? V : any
  const mapping = new Map<K, V>()
  const fres = (key: K): V => {
    const res = mapping.get(key)
    if (res !== undefined) {
      return res
    } else {
      const v = f(key)
      mapping.set(key, v)
      return v
    }
  }
  return fres as F
}

/**
 *  @since 0.0.1
 */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never

/**
 *  @since 0.0.1
 */
export type Compact<A> = {
  [K in keyof A]: A[K]
}

/**
 *  @since 0.0.1
 */
export type KeepNotUndefined<O> = UnionToIntersection<
  NonNullable<{ [k in keyof O]: undefined extends O[k] ? never : { [x in k]: O[k] } }[keyof O]>
>
type KeepOptionalIfUndefined<O> = UnionToIntersection<
  NonNullable<{ [k in keyof O]: undefined extends O[k] ? { [x in k]?: O[k] } : never }[keyof O]>
>

/**
 *  @since 0.0.1
 */
export type OptionalIfUndefined<T> = Compact<KeepNotUndefined<T> & KeepOptionalIfUndefined<T>>

/**
 * Expose Configuration type for (a) specific interpreter(s) types
 *  @since 0.0.1
 */
export type ByInterp<Config, Interp extends URIS | URIS2> = MaybeUndefinedIfOptional<
  OptionalIfUndefined<
    {
      [I in Interp]: I extends keyof Config ? Config[I] : undefined
    }
  >
>

/**
 *  @since 0.0.1
 */
export type MaybeUndefinedIfOptional<X> = keyof KeepNotUndefined<X> extends never ? X | undefined : X

/**
 *  @since 0.0.1
 */
export type isOptionalConfig<C, Y> = keyof KeepNotUndefined<ByInterp<C, URIS | URIS2>> extends never
  ? Y
  : 'a configuration is required'

/**
 * generates a config wrapper:
 *
 * Example:
 *
 * ```typescript
 *   const eqConfig = genConfig(EqURI)
 * ```
 *
 * Usage:
 *
 * ```typescript
 *   summonAs(F => F.unknown(eqConfig({ compare: 'default-circular' })))
 *   summonAs(F => F.unknown({...eqConfig({ compare: 'default-circular' }), ...iotsConfig(x => x)}))
 * ```
 *
 *  @since 0.0.1
 */
export const genConfig: <Uri extends URIS | URIS2>(uri: Uri) => ConfigWrapper<Uri> = uri => config =>
  ({ [uri]: config } as any)

/**
 *  @since 0.0.1
 */
export interface ConfigWrapper<Uri extends URIS | URIS2> {
  <T>(config: T extends { [k in Uri]?: infer Config } ? Config : never): T
}
