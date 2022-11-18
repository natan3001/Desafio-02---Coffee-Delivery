import styled from "styled-components";

export const CheckoutContainer = styled.form`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 2rem;

  h1, h2{
    font-size: 1.125rem;
    font-family: 'Baloo 2', sans-serif;
  }
`

export const CheckoutContent = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;
  border-radius: 8px;

  background: ${props => props.theme["base-150"]};
`