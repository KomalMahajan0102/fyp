import { useState } from 'react'


import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomePage from './pages/HomePage'
import StoreContextProvider from './context/StoreContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <StoreContextProvider>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </StoreContextProvider>
      </BrowserRouter>


    </>
  )
}

export default App
