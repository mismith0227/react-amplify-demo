import * as React from 'react'

export interface Note {
  id: string
  title: string
  content: string
  owner: string
}

export interface ExternalProps {
  notes: readonly Note[]
  deleteNote: (id: string) => void
}

export type Props = ExternalProps
