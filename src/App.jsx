import { useState } from 'react'


import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomePage from './pages/HomePage'
import StoreContextProvider from './context/StoreContext';
import About from './pages/About';
import MenuPage from './pages/MenuPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <StoreContextProvider>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<MenuPage />} />
          </Routes>
        </StoreContextProvider>
      </BrowserRouter>


    </>
  )
}

export default App
