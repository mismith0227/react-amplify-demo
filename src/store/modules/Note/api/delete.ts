import { API, graphqlOperation } from 'aws-amplify'
import { deleteNote } from 'graphql/mutations'
import { DeleteParams } from '../types'

export const deleteNoteAPI = (params: DeleteParams) => {
  return API.graphql(graphqlOperation(deleteNote, { input: params }))
}
