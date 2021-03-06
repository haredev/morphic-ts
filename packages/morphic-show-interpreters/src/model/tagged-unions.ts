import { ModelAlgebraTaggedUnions1 } from '@morphic-ts/model-algebras/lib/tagged-unions'
import { ShowType, ShowURI } from '..'
import { mapRecord } from '@morphic-ts/common/lib/utils'

/**
 *  @since 0.0.1
 */
export const showTaggedUnionInterpreter: ModelAlgebraTaggedUnions1<ShowURI> = {
  _F: ShowURI,
  taggedUnion: (tag, types) => {
    const shows = mapRecord(types, a => a.show.show)
    return new ShowType({
      show: (a): string => (shows as any)[a[tag]](a)
    })
  }
}
