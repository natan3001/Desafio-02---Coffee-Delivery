import styled from 'styled-components'

export const MainContainer = styled.main`
  margin-bottom: 10rem;

  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-500']};
    margin-bottom: 3.375rem;
  }
`

export const CoffeeListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2.5rem 2rem;

  @media (max-width: 1140px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 870px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
