import { API, graphqlOperation } from 'aws-amplify'
import { getNote } from 'graphql/queries'
import { NoteId } from '../types'

export const getNoteAPI = (params: NoteId) => {
  return API.graphql(graphqlOperation(getNote, params))
}
