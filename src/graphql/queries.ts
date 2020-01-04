// tslint:disable
// this is an auto generated file. This will be overwritten

export const getNote = `query GetNote($id: ID!) {
  getNote(id: $id) {
    id
    title
    content
    owner
    updatedAt
    createdAt
  }
}
`;
export const listNotes = `query ListNotes(
  $filter: ModelNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
      owner
      updatedAt
      createdAt
    }
    nextToken
  }
}
`;
export const listNotesSortedByCreatedAt = `query ListNotesSortedByCreatedAt(
  $owner: String
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotesSortedByCreatedAt(
    owner: $owner
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      content
      owner
      updatedAt
      createdAt
    }
    nextToken
  }
}
`;
