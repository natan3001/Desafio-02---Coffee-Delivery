import { ReactNode } from 'react'

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  return <>{children}</>
}
