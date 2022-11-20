import { Banner } from './Banner'
import { Card } from './Card'

import { CoffeeListContainer, MainContainer } from './styles'

export function Home() {
  return (
    <>
      <Banner />
      <MainContainer>
        <h2>Nossos cafés</h2>
        <CoffeeListContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CoffeeListContainer>
      </MainContainer>
    </>
  )
}
