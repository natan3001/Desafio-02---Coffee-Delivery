import { Minus, Plus, Trash } from 'phosphor-react'

import { CardButtons, CardContainer, CardHeader, CardSeparator } from './styles'

import MochaccinoImage from '../../../assets/coffees/Mochaccino.png'

interface CoffeeCardProps {
  img: string
  title: string
  price: number
  quantity: number
}

export function CoffeeCard({ img, title, price, quantity }: CoffeeCardProps) {
  return (
    <>
      <CardContainer>
        <img src={img} alt="" />
        <div>
          <CardHeader>
            {title}
            <span>
              R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </span>
          </CardHeader>
          <CardButtons>
            <span>
              <Minus size={14} />
              {quantity}
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
