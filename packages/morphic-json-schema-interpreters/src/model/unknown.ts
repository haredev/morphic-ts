import { JsonSchema, JsonSchemaURI } from '..'
import { AnythingTypeCtor } from '../json-schema/json-schema-ctors'
import * as SE from 'fp-ts-contrib/lib/StateEither'
import { ModelAlgebraUnknown1 } from '@morphic-ts/model-algebras/lib/unknown'

/**
 *  @since 0.0.1
 */
export const jsonSchemaUnknownInterpreter: ModelAlgebraUnknown1<JsonSchemaURI> = {
  _F: JsonSchemaURI,
  unknown: _ => new JsonSchema(SE.stateEither.of(AnythingTypeCtor()))
}
