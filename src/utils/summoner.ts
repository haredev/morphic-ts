import { Materialized } from '../../src/usage/materializer'
import { makeSummoner } from '../../src/usage/summoner'
import { cacheUnaryFunction } from '../../src/core'
import { BASTJInterpreterURI, BASTJInterpreter } from './interpreters-BAST'
import { ProgramUnionURI, ProgramUnion } from './program'

export interface M<L, A> extends Materialized<L, A, ProgramUnionURI, BASTJInterpreterURI> {}

export interface Prog<L, A> extends ProgramUnion<L, A> {}

interface Summons {
  summonAs: <L, A>(F: Prog<L, A>) => M<L, A>
  summonAsA: <A>() => <L>(F: Prog<L, A>) => M<L, A>
  summonAsL: <L>() => <A>(F: Prog<L, A>) => M<L, A>
  summon: <A>(F: Prog<unknown, A>) => M<unknown, A>
}

const { summonAs, summonAsA, summonAsL, summon } = makeSummoner(cacheUnaryFunction, BASTJInterpreter) as Summons

export { summonAs, summonAsA, summonAsL, summon }