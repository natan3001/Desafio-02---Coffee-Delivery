import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

import 'react-toastify/dist/ReactToastify.css'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <ToastContainer />
    </LayoutContainer>
  )
}
