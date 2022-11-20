import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { OrderDetails, OrderDetailsItem, SuccessContainer } from "./styles";

import CoffeeDeliverySuccess from './../../assets/coffee-delivery-success.png'

export function Success() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </OrderDetailsItem>
          <OrderDetailsItem color="yellow">
            <span>
              <Clock size={16} weight="fill" />
            </span>
            <div>
              <span>Previsão de entrega</span>
              <span><strong>20 min - 30 min </strong></span>
            </div>
          </OrderDetailsItem>
          <OrderDetailsItem color="yellow-dark">
            <span>
              <CurrencyDollar size={16} weight="fill" />
            </span>
            <div>
              <span>Pagamento na entrega</span>
              <span><strong>Cartão de Crédito</strong></span>
            </div>
          </OrderDetailsItem>
        </ul>
        <img src={CoffeeDeliverySuccess} alt="" />
      </OrderDetails>
    </SuccessContainer>
  )
}