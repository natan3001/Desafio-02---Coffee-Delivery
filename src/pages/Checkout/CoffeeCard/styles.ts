import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  img{
    width: 4rem;
    height: 4rem;
  }

  div{
    flex: 1;
  }
`

export const CardHeader = styled.div`
  display: flex;
  line-height: 1.3;
  justify-content: space-between;
  margin-bottom: .5rem;

  color: ${props => props.theme["base-500"]};

  span{
    font-weight: bold;

    ${props => props.theme["base-400"]}
  }
`

export const CardButtons = styled.div`
  display: flex;
  gap: .5rem;

  button{
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: 0;
    gap: 0.25rem;
    padding: .5rem;
    cursor: pointer;
    font-size: 0.75rem;
    text-transform: uppercase;
    
    color: ${props => props.theme["base-400"]};
    background: ${props => props.theme["base-200"]};

    svg{
      color: ${props => props.theme["purple-500"]};
    }
  }

  span{
    width: 4.5rem;
    padding: 0.5rem 0.5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;

    background: ${props => props.theme["base-200"]};

    svg{
      color: ${props => props.theme["purple-500"]};
      cursor: pointer;

      &:hover{
        color: ${props => props.theme["purple-700"]};
      }
    }
  }
`

export const CardSeparator = styled.hr`
  background-color: ${props => props.theme["base-250"]};
  height: 1px;
  margin: 1.5rem 0;
  border: 0;
`