import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from '../components/scroll_to_top/ScrollToTop'
import ErrorPage from '../pages/404Page/ErrorPage'
import CartPage from '../pages/cartPage/CartPage'
import CheckoutPage from '../pages/checkout/CheckoutPage'
import Home from '../pages/home/HomePage'
import ProductPage from '../pages/Product/ProductPage'
import ProductDetailsPage from '../pages/product_detail/ProductDetailsPage'
import Wishlist from '../pages/wishlist/WishlistPage'
import ContactPage from '../pages/contactPage/ContactPage'


export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/san-pham' element={<ProductPage/>}/>
            <Route path='/san-pham/:name' element={<ProductDetailsPage/>}/>
            <Route path='/wish-list' element={<Wishlist/>} />
            <Route path='/thanh-toan' element={<CheckoutPage/>}/>
            <Route path='/lien-he' element={<ContactPage/>}/>
            <Route path='/gio-hang' element={<CartPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        <ScrollToTop/>
    </BrowserRouter>
  )
}
