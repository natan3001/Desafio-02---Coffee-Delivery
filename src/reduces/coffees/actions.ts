import { CoffeeInCartProps } from '../../contexts/CoffeContext'

export enum ActionTypes {
  ADD_NEW_COFFEE_IN_CART = 'ADD_NEW_COFFEE_IN_CART',
  UPDATE_QTD_ITEM_IN_CART = 'UPDATE_QTD_ITEM_IN_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  RESET_CART_LIST = 'RESET_CART_LIST',
}

export function addNewCoffeeInCartAction(newCoffee: CoffeeInCartProps) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE_IN_CART,
    payload: { newCoffee },
  }
}

export function updateQtdItemInCartAction(id: string, quantity: number) {
  return {
    type: ActionTypes.UPDATE_QTD_ITEM_IN_CART,
    payload: { id, quantity },
  }
}

export function removeItemFromCartAction(id: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: { id },
  }
}

export function resetCartListAction() {
  return {
    type: ActionTypes.RESET_CART_LIST,
  }
}
