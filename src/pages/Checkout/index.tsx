import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import { CoffeeContext } from '../../contexts/CoffeContext'
import { useContext } from 'react'

import { ContentHeader } from './ContentHeader'
import { CoffeeCard } from './CoffeeCard'

import {
  CheckoutContainer,
  CheckoutContent,
  CheckoutDetails,
  DeliveryFormContainer,
  InputContainer,
  PaymentMethodsContainer,
} from './styles'

export function Checkout() {
  const { coffeeCartList } = useContext(CoffeeContext)

  return (
    <main>
      <CheckoutContainer>
        <div>
          <h1>Complete seu pedido</h1>
          <CheckoutContent>
            <ContentHeader
              title="Endereço de Entrega"
              subtitle="Informe o endereço onde deseja receber seu pedido"
              icon={<MapPinLine size={22} />}
              color="yellow"
            />
            <DeliveryFormContainer>
              <div>
                <InputContainer type="text" placeholder="CEP" width="medium" />
              </div>
              <div>
                <InputContainer type="text" placeholder="Rua" width="large" />
              </div>
              <div>
                <InputContainer
                  type="text"
                  placeholder="Número"
                  width="medium"
                />
                <InputContainer
                  type="text"
                  placeholder="Complemento"
                  width="large"
                />
              </div>
              <div>
                <InputContainer
                  type="text"
                  placeholder="Bairro"
                  width="medium"
                />
                <InputContainer
                  type="text"
                  placeholder="Cidade"
                  width="large"
                />
                <InputContainer type="text" placeholder="UF" width="small" />
              </div>
            </DeliveryFormContainer>
          </CheckoutContent>
          <CheckoutContent>
            <ContentHeader
              title="Pagamento"
              subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
              icon={<CurrencyDollar size={22} />}
              color="purple"
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
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CheckoutDetails>
              <div>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div>
                <span>Total</span>
                <span>R$ 33,20</span>
              </div>
              <button>Confirmar Pedido</button>
            </CheckoutDetails>
          </CheckoutContent>
        </div>
      </CheckoutContainer>
    </main>
  )
}
