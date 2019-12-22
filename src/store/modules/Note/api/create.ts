import { API, graphqlOperation } from 'aws-amplify'
import { createNote } from 'graphql/mutations'
import { CreateParams } from '../types'

export const create = (newPost: CreateParams) =>
  API.graphql(graphqlOperation(createNote, newPost))
