import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1.25rem 1.25rem 1.25rem;
  border-radius: 8px 36px 8px 36px;

  background: ${(props) => props.theme['base-150']};

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }

  h3 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    line-height: 1.3;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-500']};
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;
    color: ${(props) => props.theme['base-300']};
    margin-bottom: 2rem;
  }
`

export const TagListContainer = styled.div`
  display: flex;
  gap: 4px;
  line-height: 1.3;
  font-weight: bold;
  font-size: 0.625rem;

  margin-top: 0.75rem;
  text-transform: uppercase;

  span {
    color: ${(props) => props.theme['yelllow-700']};
    background: ${(props) => props.theme['yelllow-200']};
    padding: 4px 8px;
    border-radius: 8px;
  }
`

export const FooterContainer = styled.div`
  display: flex;
  gap: 1.4rem;
`

export const PriceContainer = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-400']};

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
  }
`

export const AddCartContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  span {
    width: 4.5rem;
    padding: 0.5rem 0.5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;

    background: ${(props) => props.theme['base-200']};

    svg {
      color: ${(props) => props.theme['purple-500']};
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme['purple-700']};
      }
    }

    button {
      border: 0;
      background-color: transparent;
      height: 16px;
    }
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    width: 2.325rem;
    height: 2.325rem;
    border-radius: 8px;

    background: ${(props) => props.theme['purple-700']};
    color: ${(props) => props.theme['base-50']};
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['purple-500']};
    }
  }
`
