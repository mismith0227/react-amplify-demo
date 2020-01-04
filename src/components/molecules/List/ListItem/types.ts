import * as React from 'react'

export interface ExternalProps {
  readonly key: string
  readonly children?: React.ReactNode
  readonly onClick?: (e: React.MouseEvent) => void
  readonly className?: string
}

export type Props = ExternalProps
