import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CoffeeContext, CoffeeProps } from '../../../contexts/CoffeContext'

import {
  AddCartContainer,
  CardContainer,
  FooterContainer,
  PriceContainer,
  TagListContainer,
} from './styles'

export function CoffeeCard({
  id,
  description,
  img,
  price,
  tagList,
  title,
}: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { AddCoffeeInTheCart } = useContext(CoffeeContext)

  function addQuantity() {
    setQuantity((state) => state + 1)
  }

  function removeQuantity() {
    setQuantity((state) => (state > 1 ? state - 1 : 1))
  }

  function handleAddCoffeeInTheCart() {
    AddCoffeeInTheCart(id, quantity)
    setQuantity(1)
  }

  return (
    <CardContainer>
      <img src={img} alt="" />

      <TagListContainer>
        {tagList.map((tag, index) => (
          <span key={`${id}-${index}`}>{tag}</span>
        ))}
      </TagListContainer>

      <h3>{title}</h3>
      <p>{description}</p>

      <FooterContainer>
        <PriceContainer>
          R${' '}
          <span>
            {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
        </PriceContainer>

        <AddCartContainer>
          <span>
            <button onClick={removeQuantity}>
              <Minus size={16} />
            </button>
            {quantity}
            <button onClick={addQuantity}>
              <Plus size={16} />
            </button>
          </span>
          <button
            onClick={handleAddCoffeeInTheCart}
            title="Adicionar café ao carrinho"
          >
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartContainer>
      </FooterContainer>
    </CardContainer>
  )
}
