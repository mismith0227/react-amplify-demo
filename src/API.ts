/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateNoteInput = {
  id?: string | null,
  title: string,
  content: string,
  owner: string,
  updatedAt?: string | null,
  createdAt?: string | null,
};

export type ModelNoteConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelNoteConditionInput | null > | null,
  or?: Array< ModelNoteConditionInput | null > | null,
  not?: ModelNoteConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateNoteInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  owner?: string | null,
  updatedAt?: string | null,
  createdAt?: string | null,
};

export type DeleteNoteInput = {
  id?: string | null,
};

export type ModelNoteFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelNoteFilterInput | null > | null,
  or?: Array< ModelNoteFilterInput | null > | null,
  not?: ModelNoteFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateNoteMutationVariables = {
  input: CreateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type CreateNoteMutation = {
  createNote:  {
    __typename: "Note",
    id: string,
    title: string,
    content: string,
    owner: string,
    updatedAt: string | null,
    createdAt: string | null,
  } | null,
};

export type UpdateNoteMutationVariables = {
  input: UpdateNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type UpdateNoteMutation = {
  updateNote:  {
    __typename: "Note",
    id: string,
    title: string,
    content: string,
    owner: string,
    updatedAt: string | null,
    createdAt: string | null,
  } | null,
};

export type DeleteNoteMutationVariables = {
  input: DeleteNoteInput,
  condition?: ModelNoteConditionInput | null,
};

export type DeleteNoteMutation = {
  deleteNote:  {
    __typename: "Note",
    id: string,
    title: string,
    content: string,
    owner: string,
    updatedAt: string | null,
    createdAt: string | null,
  } | null,
};

export type GetNoteQueryVariables = {
  id: string,
};

export type GetNoteQuery = {
  getNote:  {
    __typename: "Note",
    id: string,
    title: string,
    content: string,
    owner: string,
    updatedAt: string | null,
    createdAt: string | null,
  } | null,
};

export type ListNotesQueryVariables = {
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotesQuery = {
  listNotes:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      title: string,
      content: string,
      owner: string,
      updatedAt: string | null,
      createdAt: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListNotesSortedByCreatedAtQueryVariables = {
  owner?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotesSortedByCreatedAtQuery = {
  listNotesSortedByCreatedAt:  {
    __typename: "ModelNoteConnection",
    items:  Array< {
      __typename: "Note",
      id: string,
      title: string,
      content: string,
      owner: string,
      updatedAt: string | null,
      createdAt: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateNoteSubscriptionVariables = {
  owner: string,
};

export type OnCreateNoteSubscription = {
  onCreateNote:  {
    __typename: "Note",
    id: string,
    title: string,
    content: string,
    owner: string,
    updatedAt: string | null,
    createdAt: string | null,
  } | null,
};

export type OnUpdateNoteSubscriptionVariables = {
  owner: string,
};

export type OnUpdateNoteSubscription = {
  onUpdateNote:  {
    __typename: "Note",
    id: string,
    title: string,
    content: string,
    owner: string,
    updatedAt: string | null,
    createdAt: string | null,
  } | null,
};

export type OnDeleteNoteSubscriptionVariables = {
  owner: string,
};

export type OnDeleteNoteSubscription = {
  onDeleteNote:  {
    __typename: "Note",
    id: string,
    title: string,
    content: string,
    owner: string,
    updatedAt: string | null,
    createdAt: string | null,
  } | null,
};
