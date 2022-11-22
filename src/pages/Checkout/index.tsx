import { useContext } from 'react'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'

import { CoffeeContext } from '../../contexts/CoffeContext'

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

const newOrderFormValidationSchema = zod.object({
  zipCode: zod.string().min(1),
  address: zod.string().min(1),
  address2: zod.string(),
  number: zod.string().min(1),
  district: zod.string().min(1),
  city: zod.string().min(1),
  state: zod.string().min(2).max(2),
  paymentMethod: zod.string(),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const { coffeeCartList } = useContext(CoffeeContext)

  const totalItemsPrice = coffeeCartList.reduce(
    (accum, coffee) => accum + coffee.price * coffee.quantity,
    0,
  )
  const deliveryFee = 8.5
  const totalOrderPrice = totalItemsPrice + deliveryFee

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      zipCode: '',
      address: '',
      address2: '',
      number: '',
      district: '',
      city: '',
      state: '',
      paymentMethod: 'Cartão de Crédito',
    },
  })

  const { handleSubmit, watch, reset, register } = newOrderForm

  function handleCreateNewOrder(data: NewOrderFormData) {
    console.log('asdasd')
    console.log(data)
  }

  return (
    <main>
      <CheckoutContainer onSubmit={handleSubmit(handleCreateNewOrder)}>
        <FormProvider {...newOrderForm}>
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
                  <InputContainer
                    type="text"
                    id="zipCode"
                    placeholder="CEP"
                    width="medium"
                    required
                    {...register('zipCode')}
                  />
                </div>
                <div>
                  <InputContainer
                    type="text"
                    id="address"
                    placeholder="Rua"
                    width="large"
                    required
                    {...register('address')}
                  />
                </div>
                <div>
                  <InputContainer
                    type="text"
                    placeholder="Número"
                    width="medium"
                    id="number"
                    required
                    {...register('number')}
                  />
                  <InputContainer
                    type="text"
                    placeholder="Complemento"
                    width="large"
                    id="address2"
                    {...register('address2')}
                  />
                </div>
                <div>
                  <InputContainer
                    type="text"
                    placeholder="Bairro"
                    width="medium"
                    id="district"
                    required
                    {...register('district')}
                  />
                  <InputContainer
                    type="text"
                    placeholder="Cidade"
                    width="large"
                    id="city"
                    required
                    {...register('city')}
                  />
                  <InputContainer
                    type="text"
                    id="state"
                    placeholder="UF"
                    width="small"
                    required
                    minLength={2}
                    maxLength={2}
                    {...register('state')}
                  />
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
                    value="Cartão de Crédito"
                    id="creditCardMethod1"
                    {...register('paymentMethod')}
                  />
                  <span>
                    <CreditCard size={16} /> Cartão de crédito
                  </span>
                </label>
                <label htmlFor="creditCardMethod2">
                  <input
                    type="radio"
                    value="Cartão de Débito"
                    id="creditCardMethod2"
                    {...register('paymentMethod')}
                  />
                  <span>
                    <Bank size={16} /> Cartão de débito
                  </span>
                </label>
                <label htmlFor="creditCardMethod3">
                  <input
                    type="radio"
                    value="Dinheiro"
                    id="creditCardMethod3"
                    {...register('paymentMethod')}
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
              {coffeeCartList.map((coffee) => {
                return <CoffeeCard key={coffee.id} {...coffee} />
              })}
              <CheckoutDetails>
                <div>
                  <span>Total de itens</span>
                  <span>
                    R${' '}
                    {totalItemsPrice.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>
                    R${' '}
                    {deliveryFee.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
                <div>
                  <span>Total</span>
                  <span>
                    R${' '}
                    {totalOrderPrice.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
                <button type="submit">Confirmar Pedido</button>
              </CheckoutDetails>
            </CheckoutContent>
          </div>
        </FormProvider>
      </CheckoutContainer>
    </main>
  )
}
