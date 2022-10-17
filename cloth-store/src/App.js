import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './components/layout/layout'
import {Home, About, ErrorPage, Products, SingleProduct, LoginPage, CartPage} from './pages'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>

        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>} />
        <Route path='products' element={<Products/>} />
        <Route path='product/:id' element={<SingleProduct/>} />
        <Route path='cart' element={<CartPage/>} />
       
        <Route path='*' element={<ErrorPage/>} />
        </Route>
        <Route path='login' element={<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
