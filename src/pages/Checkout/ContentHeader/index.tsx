import { ReactNode } from 'react'

import { ContentHeaderContainer, ContentIconsColors } from './styles'

interface ContentHeaderProps extends ContentIconsColors {
  title: string
  subtitle: string
  icon: ReactNode
}

export function ContentHeader({
  title,
  subtitle,
  icon,
  color,
}: ContentHeaderProps) {
  return (
    <ContentHeaderContainer color={color}>
      {icon}
      <div>
        {title}
        <span>{subtitle}</span>
      </div>
    </ContentHeaderContainer>
  )
}
