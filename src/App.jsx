import React from 'react'
import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import CartPage from './Pages/CartPage/CartPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import Footer from './Components/Footer/Footer'
import SignupPage from './Pages/LoginPage/SignupPage'

const ProductDetailsPage = lazy(() => 
     import("./Pages/ProductDetailsPage/ProductDetailsPages")
);


const App = () => {
  return (
    <> 
      <div className="app">
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/cart' element={ <CartPage/> } />
        <Route path='/login' element={ <LoginPage/>  }    />
        <Route path='/signup' element={ <SignupPage/>   }  />
        
        <Route
        path="/product/:id"
        element={
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl font-semibold">
                  Loading product...
                </p>
              </div>
            }
          >
            <ProductDetailsPage />
          </Suspense>
        }
      />

      </Routes>
       
    </div>
    <Footer/>
    
    
    </>
  )
}

export default App


