import * as chai from 'chai'
import { some, none } from 'fp-ts/lib/Option'
import { builderInterpreter } from '../../../src/interpreters/builder/interpreters'
import { defineAsUnknown } from '../../utils/program'

describe('Builder', () => {
  it('builder', () => {
    interface Foo {
      date: Date
      a: string
    }

    const Foo = defineAsUnknown<Foo>(F =>
      F.interface({
        date: F.date,
        a: F.string
      })
    )

    const { builder } = Foo(builderInterpreter)

    const date = new Date(12345)
    chai.assert.deepStrictEqual(builder({ date, a: '' }), { date, a: '' })
  })

  it('keysOf', () => {
    const { builder } = defineAsUnknown(F => F.keysOf({ a: null, b: null }))(builderInterpreter)
    chai.assert.deepStrictEqual(builder('a'), 'a')
  })

  it('nullable', () => {
    const { builder } = defineAsUnknown(F => F.nullable(F.string))(builderInterpreter)
    chai.assert.deepStrictEqual(builder(some('a')), some('a'))
    chai.assert.deepStrictEqual(builder(none), none)
  })

  it('builder', () => {
    interface Nested {
      date: Date
    }
    const Nested = defineAsUnknown<Nested>(F =>
      F.interface({
        date: F.date
      })
    )

    interface Foo {
      dates: Nested[]
      a: string
    }

    const Foo = defineAsUnknown<Foo>(F =>
      F.interface({
        dates: F.array(Nested(F)),
        a: F.string
      })
    )

    const { builder } = Foo(builderInterpreter)

    const date = new Date(12345)
    chai.assert.deepStrictEqual(builder({ dates: [{ date }, { date }], a: '' }), {
      dates: [{ date }, { date }],
      a: ''
    })
  })

  it('taggedUnion', () => {
    interface Foo {
      type: 'foo'
      a: string
      b: number
    }
    const Foo = defineAsUnknown<Foo>(F =>
      F.interface({
        type: F.stringLiteral('foo'),
        a: F.string,
        b: F.number
      })
    )

    interface Bar {
      type: 'bar'
      c: string
      d: number
    }
    const Bar = defineAsUnknown<Bar>(F =>
      F.interface({
        type: F.stringLiteral('bar'),
        c: F.string,
        d: F.number
      })
    )

    const FooBar = defineAsUnknown(F =>
      F.taggedUnion('type', {
        foo: Foo(F),
        bar: Bar(F)
      })
    )

    const builder = FooBar(builderInterpreter).builder

    const fooA: Foo | Bar = builder({ type: 'foo', a: 'a', b: 12 })

    const barA: Foo | Bar = builder({ type: 'bar', c: 'a', d: 12 })
    const barB: Foo | Bar = builder({ type: 'bar', c: 'b', d: 12 })

    chai.assert.deepStrictEqual(builder(fooA), fooA)
    chai.assert.notDeepEqual(builder(barA), barB)
  })
})