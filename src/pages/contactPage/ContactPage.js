import React from 'react'
import Headers from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Contacts from '../../components/contact/Contacts'
export default function ContactPage() {
  return (
    <div>
        <Headers/>
        <section id='contact' style={{marginTop: '100px'}}>
            <Contacts/>
        </section>
        <Footer/>
    </div>
  )
}
