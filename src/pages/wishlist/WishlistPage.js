import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import WishLists from '../../components/wishlists/WishLists'


export default function WishlistPage() {
  return (
    <div>
      <Header/>
      <section id='wishlist' style={{marginTop: '100px', marginBottom: '50px'}}>
        <WishLists/>
      </section>
      <Footer/>
    </div>
  )
}
