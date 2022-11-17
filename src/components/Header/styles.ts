import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  nav{
    display: flex;
    gap: 0.75rem;
    font-size: 1.125rem;
    justify-content: center;
    align-items: center;
  }
`

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 0;
  border-radius: 8px;
  gap: 0.25rem;
`

export const LocationButton = styled(BaseButton)`
  background-color: ${(props) => props.theme["purple-200"]};
  color: ${(props) => props.theme["purple-700"]};

  svg{
    color: ${(props) => props.theme["purple-500"]};
  }
`

export const CartButton = styled(BaseButton)`
  background-color: ${(props) => props.theme["yelllow-200"]};
  color: ${(props) => props.theme["yelllow-700"]};

  position: relative;
  cursor: pointer;
`

export const CartCountSpan = styled.span`
  position: absolute;
  top: -0.625rem;
  right: -0.625rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  font-size: 0.875rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  background-color: ${(props) => props.theme["yelllow-700"]};
` 