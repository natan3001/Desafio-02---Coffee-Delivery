import styled from "styled-components";

const ICON_COLOR = {
  'purple': 'purple-700',
  'yellow': 'yelllow-700'
} as const

export interface ContentIconsColors {
  color: keyof typeof ICON_COLOR
}

export const ContentHeaderContainer = styled.div<ContentIconsColors>`
  display: flex;
  gap: .5rem;

  svg{
    color: ${props => props.theme[ICON_COLOR[props.color]]};;
  }

  div{
    display: flex;
    flex-direction: column;
    color: ${props => props.theme["base-500"]};
    font-weight: 1.3;
    
    span{
      color: ${props => props.theme["base-400"]};
      font-size: 0.875rem;
      margin-top: .25rem;
    }
  }
`