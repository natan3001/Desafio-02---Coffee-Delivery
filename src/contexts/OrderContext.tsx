import { createContext, ReactNode, useState } from 'react'
import { toast } from 'react-toastify'
import { CoffeeInCartProps } from './CoffeContext'

// Order
export interface OrderProps {
  zipCode: string
  address: string
  address2: string
  number: string
  district: string
  city: string
  state: string
  paymentMethod: string

  totalOfItems: number
  deliveryFee: number
  total: number

  items: CoffeeInCartProps[]
}

// Context
interface OrderContextProviderProps {
  children: ReactNode
}

interface OrderContextType {
  order: OrderProps
  createNewOrder: (data: OrderProps) => void
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState({} as OrderProps)

  function createNewOrder(data: OrderProps) {
    setOrder(data)
    toast.success('Pedido realizado com sucesso!', {
      position: toast.POSITION.BOTTOM_RIGHT,
    })
  }

  return (
    <OrderContext.Provider value={{ order, createNewOrder }}>
      {children}
    </OrderContext.Provider>
  )
}
