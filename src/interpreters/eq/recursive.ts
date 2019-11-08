import { EqType, URI } from '.'
import { ModelAlgebraRecursive1 } from '../../algebras/recursive'
import { memo } from '../../utils'

export const eqRecursiveInterpreter: ModelAlgebraRecursive1<URI> = {
  recursive: a => {
    const get = memo(() => a(res))
    const res: ReturnType<typeof a> = new EqType({ equals: (a, b) => get().eq.equals(a, b) })
    return res
  }
}
