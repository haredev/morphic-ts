import * as t from 'io-ts'
import { DateFromISOString, createOptionFromNullable } from 'io-ts-types'
import { IOTSType, URI } from '.'
import { ModelAlgebraPrimitive1 } from '../../algebras/primitives'

export const ioTsPrimitiveInterpreter: ModelAlgebraPrimitive1<URI> = {
  date: new IOTSType(DateFromISOString),
  boolean: new IOTSType(t.boolean),
  string: new IOTSType(t.string),
  number: new IOTSType(t.number),
  stringLiteral: l => new IOTSType(t.literal(l)),
  keysOf: k => new IOTSType(t.keyof(k)),
  nullable: T => new IOTSType(createOptionFromNullable(T.type)),
  array: T => new IOTSType(t.array(T.type))
}
