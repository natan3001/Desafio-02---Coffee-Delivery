import { createContext, ReactNode, useState } from 'react'

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
}

// Context
interface OrderContextProviderProps {
  children: ReactNode
}

interface OrderContextType {
  order: OrderProps
}

const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState({} as OrderProps)

  return (
    <OrderContext.Provider value={{ order }}>{children}</OrderContext.Provider>
  )
}
