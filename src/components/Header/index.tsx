import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeContext'

import {
  CartButton,
  CartCountSpan,
  HeaderContainer,
  LocationButton,
} from './styles'

import logoCoffeeDelivery from './../../assets/coffee-delivery-logo.svg'

export function Header() {
  const { totalItemsInCart } = useContext(CoffeeContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="home">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>
      <nav>
        <LocationButton>
          <MapPin size={22} weight="fill" /> Porto Alegre, RS
        </LocationButton>
        {totalItemsInCart > 0 ? (
          <NavLink to="/checkout" title="checkout">
            <CartButton>
              <ShoppingCart size={22} weight="fill" />
              {totalItemsInCart > 0 && (
                <CartCountSpan>{totalItemsInCart}</CartCountSpan>
              )}
            </CartButton>
          </NavLink>
        ) : (
          <CartButton disabled>
            <ShoppingCart size={22} weight="fill" />
            {totalItemsInCart > 0 && (
              <CartCountSpan>{totalItemsInCart}</CartCountSpan>
            )}
          </CartButton>
        )}
      </nav>
    </HeaderContainer>
  )
}
