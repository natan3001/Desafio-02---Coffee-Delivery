import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeContext'

import { Banner } from './Banner'
import { CoffeeCard } from './CoffeeCard'

import { CoffeeListContainer, MainContainer } from './styles'

export function Home() {
  const { availableCoffeeList } = useContext(CoffeeContext)

  return (
    <>
      <Banner />
      <MainContainer>
        <h2>Nossos cafés</h2>
        <CoffeeListContainer>
          {availableCoffeeList.map((coffee) => {
            return <CoffeeCard key={coffee.id} {...coffee} />
          })}
        </CoffeeListContainer>
      </MainContainer>
    </>
  )
}
