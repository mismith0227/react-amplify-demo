import { API, graphqlOperation } from 'aws-amplify'
import { listNotesSortedByCreatedAt } from 'graphql/queries'

export const list = (username: string) =>
  API.graphql(graphqlOperation(listNotesSortedByCreatedAt, { owner: username }))
