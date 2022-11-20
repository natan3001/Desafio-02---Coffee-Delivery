import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 5.75rem 0;
  gap: 3.5rem;
`

const SPAN_COLOR = {
  yellow: 'yelllow-500',
  'dark-yellow': 'yelllow-700',
  base: 'base-400',
  purple: 'purple-500',
} as const

interface SpanProps {
  spanColor: keyof typeof SPAN_COLOR
}

export const ContentContainer = styled.div`
  h1 {
    font-size: 3rem;
    line-height: 1.3;
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 1rem;
  }

  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-500']};
  }

  ul {
    margin-top: 4.125rem;
    list-style: none;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.25rem 2.5rem;
    color: ${(props) => props.theme['base-400']};

    li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
  }
`

export const SpanContainer = styled.span<SpanProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: ${(props) => props.theme[SPAN_COLOR[props.spanColor]]};
  color: ${(props) => props.theme['base-50']} !important;
`
