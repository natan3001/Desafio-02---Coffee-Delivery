import { Minus, Plus, Trash } from 'phosphor-react'

import { CardButtons, CardContainer, CardHeader, CardSeparator } from './styles'

import MochaccinoImage from '../../../assets/coffees/Mochaccino.png'

export function CoffeeCard() {
  return (
    <>
      <CardContainer>
        <img src={MochaccinoImage} alt="" />
        <div>
          <CardHeader>
            Expresso Tradicional
            <span>R$ 9,90</span>
          </CardHeader>
          <CardButtons>
            <span>
              <Minus size={14} />
              1
              <Plus size={14} />
            </span>
            <button>
              <Trash size={16} /> Remover
            </button>
          </CardButtons>
        </div>
      </CardContainer>
      <CardSeparator />
    </>
  )
}
