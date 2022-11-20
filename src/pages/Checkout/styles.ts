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

export const DeliveryFormContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem 0;

  div{
    display: flex;
    gap: 0.75rem;
  }
`

export const PaymentMethodsContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 0.75rem;
  
  label{
    flex: 1;
    cursor: pointer;
  }

  span{
    border-radius: 6px;
    display: flex;
    align-items: flex-start;
    font-size: 0.75rem;
    padding: 1rem;
    text-transform: uppercase;
    line-height: 1.6;
    gap: 0.75rem;

    color: ${props => props.theme["base-300"]};
    background: ${props => props.theme["base-200"]};

    svg{
      color: ${props => props.theme["purple-500"]};
    }
  }

  input{
    visibility: hidden;
    width: 0;
    height: 0;
  }

  input:checked + span{
    box-shadow: 0 0 0 1px ${props => props.theme["purple-500"]};
  }
`

type InputSizeType = 'small' | 'medium' | 'large'

interface InputContainer {
  width: InputSizeType
}

export const InputContainer = styled.input<InputContainer>`
  font-size: 0.875rem;
  border-radius: 4px;
  padding: .75rem;
  
  border: 1px solid ${props => props.theme["base-250"]};
  background: ${props => props.theme["base-200"]};
  color: ${props => props.theme["base-400"]};

  ::placeholder{
    color: ${props => props.theme["base-300"]};
  }

  width: ${props => {
    if (props.width == 'large') return '100%'
    if (props.width == 'medium') return '12.5rem'
    if (props.width == 'small') return '3.75rem'
  }}
`