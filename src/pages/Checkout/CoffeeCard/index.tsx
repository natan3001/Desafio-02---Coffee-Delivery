import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../../contexts/CoffeContext'

import { CardButtons, CardContainer, CardHeader, CardSeparator } from './styles'

interface CoffeeCardProps {
  id: string
  img: string
  title: string
  price: number
  quantity: number
}

export function CoffeeCard({
  id,
  img,
  title,
  price,
  quantity,
}: CoffeeCardProps) {
  const [coffeeQuantity, setCoffeeQuantity] = useState(quantity)
  const { UpdateQtdItemInCart, RemoveItemFromCart } = useContext(CoffeeContext)

  function addQuantity() {
    UpdateQtdItemInCart(id, coffeeQuantity + 1)
    setCoffeeQuantity((state) => state + 1)
  }

  function removeQuantity() {
    UpdateQtdItemInCart(id, coffeeQuantity > 1 ? coffeeQuantity - 1 : 1)
    setCoffeeQuantity((state) => (state > 1 ? state - 1 : 1))
  }

  function handleRemoveCoffeeFromTheCart() {
    RemoveItemFromCart(id)
  }

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
              <Minus size={14} onClick={removeQuantity} />
              {coffeeQuantity}
              <Plus size={14} onClick={addQuantity} />
            </span>
            <button type="button" onClick={handleRemoveCoffeeFromTheCart}>
              <Trash size={16} /> Remover
            </button>
          </CardButtons>
        </div>
      </CardContainer>
      <CardSeparator />
    </>
  )
}
