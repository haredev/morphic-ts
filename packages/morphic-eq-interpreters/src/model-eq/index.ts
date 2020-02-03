import { merge } from '@sledorze/morphic-common/lib/utils'

import { eqPrimitiveInterpreter } from './primitives'
import { eqIntersectionInterpreter } from './intersections'
import { eqObjectInterpreter } from './object'
import { eqTaggedUnionInterpreter } from './tagged-unions'
import { eqRecursiveInterpreter } from './recursive'
import { eqStrMapInterpreter } from './str-map'
import { eqSetInterpreter } from './set'
import { eqUnknownInterpreter } from './unknown'
import { eqNewtypeInterpreter } from './newtype'
import { eqRefinedInterpreter } from './refined'

export const allModelEq = merge(
  eqRefinedInterpreter,
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