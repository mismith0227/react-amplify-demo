import { createSelector } from 'reselect'
import { State } from 'types/redux'
import { Note } from './types'

export const root = (state: State) => state.note

export const entities = createSelector(root, ({ entities: notes }) => notes)

export const entitiesListAll = createSelector(
  entities,
  (notes): ReadonlyArray<Note> => Object.keys(notes).map(id => notes[id])
)

export const getById = createSelector(
  [root, (_: State, id: string | number) => id],
  ({ entities }, id): Note => entities[id]
)
