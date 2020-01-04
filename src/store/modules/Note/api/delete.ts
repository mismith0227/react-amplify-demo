import { API, graphqlOperation } from 'aws-amplify'
import { deleteNote } from 'graphql/mutations'
import { NoteId } from '../types'

export const deleteNoteAPI = (params: NoteId) => {
  return API.graphql(graphqlOperation(deleteNote, { input: params }))
}
