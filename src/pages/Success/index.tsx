import { useContext, useEffect } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import { OrderDetails, OrderDetailsItem, SuccessContainer } from './styles'

import CoffeeDeliverySuccess from './../../assets/coffee-delivery-success.png'

export function Success() {
  const { order } = useContext(OrderContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (!order.items) {
      return navigate('/')
    }
  }, [order, navigate])

  if (!order.items) {
    return <></>
  }

  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <OrderDetails>
        <ul>
          <OrderDetailsItem color="purple">
            <span>
              <MapPin size={16} weight="fill" />
            </span>
            <div>
              <span>
                Entrega em{' '}
                <strong>
                  Rua {order.address}, {order.number}
                </strong>
              </span>
              <span>
                {order.district} - {order.city}, {order.state.toUpperCase()}
              </span>
            </div>
          </OrderDetailsItem>
          <OrderDetailsItem color="yellow">
            <span>
              <Clock size={16} weight="fill" />
            </span>
            <div>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min </strong>
              </span>
            </div>
          </OrderDetailsItem>
          <OrderDetailsItem color="yellow-dark">
            <span>
              <CurrencyDollar size={16} weight="fill" />
            </span>
            <div>
              <span>Pagamento na entrega</span>
              <span>
                <strong>{order.paymentMethod}</strong>
              </span>
            </div>
          </OrderDetailsItem>
        </ul>
        <img src={CoffeeDeliverySuccess} alt="" />
      </OrderDetails>
    </SuccessContainer>
  )
}
