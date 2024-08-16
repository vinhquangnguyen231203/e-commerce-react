import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './checkoutpage.scss'
import Checkouts from '../../components/checkout/Checkouts'

export default function CheckoutPage() {
  return (
    <div>
        <Header/>
            <section id='checkout'>
                <Checkouts/>
            </section>
        <Footer/>
    </div>
  )
}
