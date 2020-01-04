import { API, graphqlOperation } from 'aws-amplify'
import { updateNote } from 'graphql/mutations'
import { UpdateParams } from '../types'

export const update = (updatePost: UpdateParams) =>
  API.graphql(graphqlOperation(updateNote, updatePost))
