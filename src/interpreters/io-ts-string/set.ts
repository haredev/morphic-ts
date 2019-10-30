import { createSetFromArray } from 'io-ts-types'
import { IOTSStringType, URI } from '.'
import { ModelAlgebraSet2 } from '../../algebras/set'

export const ioTsStringSetInterpreter: ModelAlgebraSet2<URI> = {
  set: (a, ord) => new IOTSStringType(createSetFromArray(a.type, ord))
}
