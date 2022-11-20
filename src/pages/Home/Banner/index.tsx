import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import CoffeDeliveryBannerImage from '../../../assets/coffee-delivery-banner.png'
import { BannerContainer, ContentContainer, SpanContainer } from './styles'

export function Banner() {
  return (
    <BannerContainer>
      <ContentContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>
        <ul>
          <li>
            <SpanContainer spanColor="dark-yellow">
              <ShoppingCart size={16} weight="fill" />
            </SpanContainer>
            Compra simples e segura
          </li>
          <li>
            <SpanContainer spanColor="base">
              <Package size={16} weight="fill" />
            </SpanContainer>
            Embalagem mantém o café intacto
          </li>
          <li>
            <SpanContainer spanColor="yellow">
              <Timer size={16} weight="fill" />
            </SpanContainer>
            Entrega rápida e rastreada
          </li>
          <li>
            <SpanContainer spanColor="purple">
              <Coffee size={16} weight="fill" />
            </SpanContainer>
            O café chega fresquinho até você
          </li>
        </ul>
      </ContentContainer>
      <img src={CoffeDeliveryBannerImage} alt="" />
    </BannerContainer>
  )
}
