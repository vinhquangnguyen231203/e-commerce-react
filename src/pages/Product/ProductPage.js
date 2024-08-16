import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import SectionCarousel from '../../components/section/section_carousel/SectionCarousel'
import './productpage.scss'
import Products from '../../components/products/Products'

export default function ProductPage() {
  return (
    <div>
      <Header/>

      <section id='product_slide'>
        
      </section>
      
      <section id='product_show'>
          <Products/>
      </section>

      <Footer/>
    </div>
  )
}
