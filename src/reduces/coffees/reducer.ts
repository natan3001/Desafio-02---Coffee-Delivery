import produce from 'immer'
import { toast } from 'react-toastify'

import { CoffeeInCartProps, CoffeeProps } from '../../contexts/CoffeContext'
import { ActionTypes } from './actions'

interface coffeeState {
  coffeeCartList: CoffeeInCartProps[]
}

export function coffeeInCartReducer(state: coffeeState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE_IN_CART: {
      const findIfExistsInCart = state.coffeeCartList.findIndex(
        (coffee) => coffee.id === action.payload.newCoffee.id,
      )

      if (findIfExistsInCart >= 0) {
        toast.success('Item já está no carrinho! Atualizando a quantidade.', {
          position: toast.POSITION.BOTTOM_RIGHT,
        })

        return produce(state, (draft) => {
          draft.coffeeCartList[findIfExistsInCart].quantity +=
            action.payload.newCoffee.quantity
        })
      }

      toast.success('Item adicionado com sucesso ao carrinho!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      })

      return produce(state, (draft) => {
        draft.coffeeCartList.push(action.payload.newCoffee)
      })
    }
    case ActionTypes.UPDATE_QTD_ITEM_IN_CART: {
      const findCoffeeToBeUpdated = state.coffeeCartList.findIndex(
        (coffee) => coffee.id === action.payload.id,
      )

      if (findCoffeeToBeUpdated < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.coffeeCartList[findCoffeeToBeUpdated].quantity =
          action.payload.quantity
      })
    }
    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const newCoffeeCartList = state.coffeeCartList.filter(
        (coffee) => coffee.id !== action.payload.id,
      )

      toast.warning('Item removido com sucesso!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      })

      return produce(state, (draft) => {
        draft.coffeeCartList = newCoffeeCartList
      })
    }
    case ActionTypes.RESET_CART_LIST:
      return produce(state, (draft) => {
        draft.coffeeCartList = []
      })
    default:
      console.log('default')
      return state
  }
}
