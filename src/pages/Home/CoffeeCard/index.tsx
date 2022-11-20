import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import { CoffeProps } from '../../../contexts/CoffeContext'

import {
  CardContainer,
  FooterContainer,
  FormAddCartContainer,
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
}: CoffeProps) {
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

        <FormAddCartContainer>
          <span>
            <button>
              <Minus size={16} />
            </button>
            1
            <button>
              <Plus size={16} />
            </button>
          </span>
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </FormAddCartContainer>
      </FooterContainer>
    </CardContainer>
  )
}
