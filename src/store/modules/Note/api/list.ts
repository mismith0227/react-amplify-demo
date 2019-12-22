import { API, graphqlOperation } from 'aws-amplify'
import { listNotes } from 'graphql/queries'

export const list = () =>
  API.graphql(
    graphqlOperation(listNotes)
  )
