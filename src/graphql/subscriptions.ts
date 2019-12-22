// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateNote = `subscription OnCreateNote($owner: String!) {
  onCreateNote(owner: $owner) {
    id
    title
    content
    owner
  }
}
`;
export const onUpdateNote = `subscription OnUpdateNote($owner: String!) {
  onUpdateNote(owner: $owner) {
    id
    title
    content
    owner
  }
}
`;
export const onDeleteNote = `subscription OnDeleteNote($owner: String!) {
  onDeleteNote(owner: $owner) {
    id
    title
    content
    owner
  }
}
`;
