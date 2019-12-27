import * as React from 'react'

export interface ExternalProps {
  readonly isOpen: boolean
  readonly children?: React.ReactNode
  readonly onClick?: (e: React.MouseEvent) => void
  readonly icon?: React.ReactElement
  readonly className?: string
}

export type Props = ExternalProps
