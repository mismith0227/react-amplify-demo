import * as React from 'react'

export interface ExternalProps {
  readonly children?: React.ReactNode
  readonly onClick?: (e: React.MouseEvent) => void
}

export type Props = ExternalProps
