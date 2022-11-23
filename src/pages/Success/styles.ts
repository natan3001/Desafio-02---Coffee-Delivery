import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 1.3;

    color: ${(props) => props.theme['yelllow-700']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-500']};
  }
`

const ICON_COLOR = {
  purple: 'purple-500',
  yellow: 'yelllow-500',
  'yellow-dark': 'yelllow-700',
} as const

interface OrderDetailsIconProps {
  color: keyof typeof ICON_COLOR
}

export const OrderDetailsItem = styled.li<OrderDetailsIconProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > span {
    min-width: 32px;
    min-height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme[ICON_COLOR[props.color]]};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    color: ${(props) => props.theme['base-400']};

    span {
      width: 100%;
    }
  }

  svg {
    color: ${(props) => props.theme['base-50']};
  }
`

export const OrderDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.375rem;

  align-items: center;

  ul {
    position: relative;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2.25rem;
    padding: 2.5rem;
    border: 1px solid transparent;
  }

  ul:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px 6px 36px;
    padding: 2px;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme['yelllow-500']},
      ${(props) => props.theme['purple-500']}
    );

    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 0;

    img {
      display: none;
    }

    ul {
      max-width: 45rem;
    }
  }

  @media (max-width: 980px) {
    ul {
      padding: 2rem;
    }
  }
`
