import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import backgroundImage from '/images/btownpaint.png'

function App() {
  

  return (
    <>
      <Header />
      <main className='container' style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
