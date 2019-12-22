import * as React from 'react'

export interface ExternalProps {
  /**
   * Button level
   * @default 1
   */
  readonly level?: 1 | 2 | 3
  readonly disabled?: boolean
  readonly children?: React.ReactNode
  readonly onClick?: (e: React.MouseEvent) => void
}

export type Props = ExternalProps