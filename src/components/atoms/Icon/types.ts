export interface ParentProps {
  readonly className?: string
  readonly role?: string
  readonly isActive?: boolean
  readonly angle?: number
}

export interface Props extends ParentProps {
  readonly viewBox: string
  readonly children: React.ReactNode
}
