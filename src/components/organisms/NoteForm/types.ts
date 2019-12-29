export interface ExternalProps {
  readonly mode: 'new' | 'edit'
  readonly defaultName?: string
  readonly defaultContent?: string
}

export type Props = ExternalProps
