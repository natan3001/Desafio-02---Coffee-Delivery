import { ContentHeader } from "./ContentHeader";
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'

import { CheckoutContainer, CheckoutContent, DeliveryFormContainer, InputContainer, PaymentMethodsContainer } from "./styles";


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
            <DeliveryFormContainer>
              <div>
                <InputContainer type="text" placeholder="CEP" width='medium' />
              </div>
              <div>
                <InputContainer type="text" placeholder="Rua" width='large' />
              </div>
              <div>
                <InputContainer type="text" placeholder="Número" width='medium' />
                <InputContainer type="text" placeholder="Complemento" width='large' />
              </div>
              <div>
                <InputContainer type="text" placeholder="Bairro" width='medium' />
                <InputContainer type="text" placeholder="Cidade" width='large' />
                <InputContainer type="text" placeholder="UF" width='small' />
              </div>
            </DeliveryFormContainer>
          </CheckoutContent>
          <CheckoutContent>
            <ContentHeader
              title='Pagamento'
              subtitle='O pagamento é feito na entrega. Escolha a forma que deseja pagar'
              icon={<CurrencyDollar size={22} />}
              color='purple'
            />
            <PaymentMethodsContainer>
              <label htmlFor="creditCardMethod1">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cartão de Crédito"
                  id="creditCardMethod1"
                />
                <span>
                  <CreditCard size={16} /> Cartão de crédito
                </span>
              </label>
              <label htmlFor="creditCardMethod2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cartão de Débito"
                  id="creditCardMethod2"
                />
                <span>
                  <Bank size={16} /> Cartão de débito
                </span>
              </label>
              <label htmlFor="creditCardMethod3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Dinheiro"
                  id="creditCardMethod3"
                />
                <span>
                  <Money size={16} /> Dinheiro
                </span>
              </label>
            </PaymentMethodsContainer>
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