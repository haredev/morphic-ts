import * as t from 'io-ts'
import { IOTSType, URI } from '.'
import { ModelAlgebraUnions1 } from '../../algebras/unions'

export const ioTsUnionInterpreter: ModelAlgebraUnions1<URI> = {
  union: <A>(items: IOTSType<A>[]) => new IOTSType(t.union(items.map(x => x.type) as any)) // TODO: fix (follow up: https://github.com/gcanti/io-ts/issues/312)
}