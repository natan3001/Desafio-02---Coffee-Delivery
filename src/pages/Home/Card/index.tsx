import { ShoppingCart, Plus, Minus } from 'phosphor-react'

import MochaccinoImage from '../../../assets/coffees/Mochaccino.png'

import { CardContainer, FooterContainer, FormAddCartContainer, PriceContainer, TagListContainer } from "./styles";

export function Card() {
  return (
    <CardContainer>
      <img src={MochaccinoImage} alt="" />
      <TagListContainer>
        <span>Tradicional</span>
      </TagListContainer>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quenete e grãos moídos</p>
      <FooterContainer>
        <PriceContainer>
          R$<span> 9,90</span>
        </PriceContainer>
        <FormAddCartContainer>
          <span>
            <Minus size={14} />
            1
            <Plus size={14} />
          </span>
          <button><ShoppingCart weight='fill' size={22} /></button>
        </FormAddCartContainer>
      </FooterContainer>
    </CardContainer>
  )
}