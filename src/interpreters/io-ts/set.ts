import { createSetFromArray } from 'io-ts-types'
import { IOTSType, URI } from '.'
import { ModelAlgebraSet1 } from '../../algebras/set'

export const ioTsSetInterpreter: ModelAlgebraSet1<URI> = {
  set: (a, ord) => new IOTSType(createSetFromArray(a.type, ord))
}
