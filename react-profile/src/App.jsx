import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
      <Header />
      <main style = {{height: '90vh', width: '100vw', }}>
       
<Outlet />
</main>
<Footer/></>


  )
}

export default App
