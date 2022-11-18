import { ContentHeader } from "./ContentHeader";
import { MapPinLine, CurrencyDollar } from 'phosphor-react'

import { CheckoutContainer, CheckoutContent } from "./styles";

export function Checkout() {
  return (
    <main>
      <CheckoutContainer>
        <div>
          <h1>Complete seu pedido</h1>
          <CheckoutContent>
            <ContentHeader
              title='Endereço de Entrega'
              subtitle='Informe o endereço onde deseja receber seu pedido'
              icon={<MapPinLine size={22} />}
              color='yellow'
            />
          </CheckoutContent>
          <CheckoutContent>
            <ContentHeader
              title='Pagamento'
              subtitle='O pagamento é feito na entrega. Escolha a forma que deseja pagar'
              icon={<CurrencyDollar size={22} />}
              color='purple'
            />
          </CheckoutContent>
        </div>
        <div>
          <h2>Cafés Selecionados</h2>
          <CheckoutContent>

          </CheckoutContent>
        </div>
      </CheckoutContainer>
    </main>
  )
}