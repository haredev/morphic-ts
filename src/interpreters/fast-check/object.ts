import * as fc from 'fast-check'
import { FastCheckType, URI } from '.'
import { ModelAlgebraObject1, PropsKind1 } from '../../algebras/object'
import { projectField } from '../../utils'

export const fastCheckObjectInterpreter: ModelAlgebraObject1<URI> = {
  partial: <Props>(props: PropsKind1<URI, Props>) =>
    new FastCheckType(
      fc.record<Props, fc.RecordConstraints>(projectField(props)('arb'), {
        withDeletedKeys: true
      })
    ),
  interface: <Props>(props: PropsKind1<URI, Props>) => new FastCheckType(fc.record<Props>(projectField(props)('arb')))
}