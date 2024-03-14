import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import backgroundImage from '/images/btownpaint.png'

function App() {
  

  return (
    <>
      <Header />
      <main className='container' style={{ 
    backgroundImage: `linear-gradient(rgba(128, 128, 128, 0.5), rgba(128, 128, 128, 0.5)), url(${backgroundImage})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    height: '90vh' 
}}>
<Outlet />
</main>
<Footer/></>


  )
}

export default App
