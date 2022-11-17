import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartButton, CartCountSpan, HeaderContainer, LocationButton } from './styles'

import logoCoffeeDelivery from './../../assets/coffee-delivery-logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="home">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>
      <nav>
        <LocationButton>
          <MapPin size={22} weight="fill" /> Porto Alegre, RS
        </LocationButton>
        <NavLink to="/checkout" title="checkout">
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
            <CartCountSpan>3</CartCountSpan>
          </CartButton>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}