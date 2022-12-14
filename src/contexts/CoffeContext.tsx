import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  addNewCoffeeInCartAction,
  removeItemFromCartAction,
  resetCartListAction,
  updateQtdItemInCartAction,
} from '../reduces/coffees/actions'
import { coffeeInCartReducer } from '../reduces/coffees/reducer'

// Coffee
export interface CoffeeProps {
  id: string
  title: string
  description: string
  price: number
  img: string
  tagList: string[]
}

export interface CoffeeInCartProps extends CoffeeProps {
  quantity: number
}

// Context
interface CoffeContextType {
  availableCoffeeList: CoffeeProps[]
  coffeeCartList: CoffeeInCartProps[]
  totalItemsInCart: number
  resetCartList: () => void
  AddCoffeeInTheCart: (id: string, quantity: number) => void
  UpdateQtdItemInCart: (id: string, quantity: number) => void
  RemoveItemFromCart: (id: string) => void
}

interface CoffeContextProviderProps {
  children: ReactNode
}

// Create a context
export const CoffeeContext = createContext({} as CoffeContextType)

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
  const [availableCoffeeList, setAvailableCoffeeList] = useState<CoffeeProps[]>(
    [
      {
        id: '1',
        title: 'Expresso tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 8.99,
        img: './images/coffee-expresso.png',
        tagList: ['Tradicional'],
      },
      {
        id: '2',
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 8.39,
        img: './images/coffee-americano.png',
        tagList: ['Tradicional'],
      },
      {
        id: '3',
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 11.39,
        img: './images/coffee-cremoso.png',
        tagList: ['Tradicional'],
      },
      {
        id: '4',
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 11.19,
        img: './images/coffee-gelado.png',
        tagList: ['Tradicional', 'Gelado'],
      },
      {
        id: '5',
        title: 'Café com leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 13.39,
        img: './images/coffee-leite.png',
        tagList: ['Tradicional', 'Com leite'],
      },
      {
        id: '6',
        title: 'Latte',
        description:
          'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 12.59,
        img: './images/coffee-latte.png',
        tagList: ['Tradicional', 'Com leite'],
      },
      {
        id: '7',
        title: 'Capuccino',
        description:
          'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 12.59,
        img: './images/coffee-capuccino.png',
        tagList: ['Tradicional', 'Com leite'],
      },
      {
        id: '8',
        title: 'Macchiato',
        description:
          'Café expresso misturado com um pouco de leite quente e espuma',
        price: 14.09,
        img: './images/coffee-macchiato.png',
        tagList: ['Tradicional', 'Com leite'],
      },
      {
        id: '9',
        title: 'Mocaccino',
        description:
          'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 11.59,
        img: './images/coffee-mocaccino.png',
        tagList: ['Tradicional', 'Com leite'],
      },
      {
        id: '10',
        title: 'Chocolate Quente',
        description:
          'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 15.49,
        img: './images/coffee-hot-milk.png',
        tagList: ['Especial', 'Com leite'],
      },
      {
        id: '11',
        title: 'Cubano',
        description:
          'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 11.39,
        img: './images/coffee-cubano.png',
        tagList: ['Especial', 'Alcoólico', 'Gelado'],
      },
      {
        id: '12',
        title: 'Havaino',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 11.99,
        img: './images/coffee-havaino.png',
        tagList: ['Especial'],
      },
      {
        id: '13',
        title: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 12.99,
        img: './images/coffee-arabe.png',
        tagList: ['Especial'],
      },
      {
        id: '14',
        title: 'Irlandês',
        description:
          'Bebida a base de café, uísque irlandês, açúcar e Chantilly',
        price: 13.39,
        img: './images/coffee-irlandes.png',
        tagList: ['Especial', 'Alcoólico'],
      },
    ],
  )

  const [coffeeState, dispatch] = useReducer(
    coffeeInCartReducer,
    {
      coffeeCartList: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:coffe-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return {
        coffeeCartList: [],
      }
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeeState)

    localStorage.setItem('@coffee-delivery:coffe-state-1.0.0', stateJSON)
  }, [coffeeState])

  const { coffeeCartList } = coffeeState

  const totalItemsInCart = coffeeCartList.length

  function AddCoffeeInTheCart(id: string, quantity: number) {
    const findCoffeeToBeAdded = availableCoffeeList.find(
      (coffee) => coffee.id === id,
    )

    if (findCoffeeToBeAdded) {
      const coffeeToBeAdded = { ...findCoffeeToBeAdded, quantity }
      dispatch(addNewCoffeeInCartAction(coffeeToBeAdded))
    }
  }

  function UpdateQtdItemInCart(id: string, quantity: number) {
    dispatch(updateQtdItemInCartAction(id, quantity))
  }

  function RemoveItemFromCart(id: string) {
    dispatch(removeItemFromCartAction(id))
  }

  function resetCartList() {
    dispatch(resetCartListAction())
  }

  return (
    <CoffeeContext.Provider
      value={{
        availableCoffeeList,
        coffeeCartList,
        totalItemsInCart,
        AddCoffeeInTheCart,
        UpdateQtdItemInCart,
        RemoveItemFromCart,
        resetCartList,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
