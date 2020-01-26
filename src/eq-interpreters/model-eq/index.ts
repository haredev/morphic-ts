import { merge } from '../../common/utils'

import { eqPrimitiveInterpreter } from './primitives'
import { eqIntersectionInterpreter } from './intersections'
import { eqObjectInterpreter } from './object'
import { eqTaggedUnionInterpreter } from './tagged-unions'
import { eqRecursiveInterpreter } from './recursive'
import { eqStrMapInterpreter } from './str-map'
import { eqSetInterpreter } from './set'
import { eqUnknownInterpreter } from './unknown'
import { eqNewtypeInterpreter } from './newtype'

export const allModelEq = merge(
  eqNewtypeInterpreter,
  eqUnknownInterpreter,
  eqPrimitiveInterpreter,
  eqIntersectionInterpreter,
  eqObjectInterpreter,
  eqTaggedUnionInterpreter,
  eqRecursiveInterpreter,
  eqStrMapInterpreter,
  eqSetInterpreter
)
