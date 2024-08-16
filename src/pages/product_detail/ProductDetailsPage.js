
import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './product_detail.scss'
import ProductDetails from '../../components/product_detail/ProductDetails'

export default function ProductDetailsPage() {
  return (
    <div>
        <Header/>
        <section id='product-detail'>
            <ProductDetails/>
        </section>
        <Footer/>
    </div>
  )
}
