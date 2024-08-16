
import React from 'react'
import Headers from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import SectionCarousel from '../../components/section/section_carousel/SectionCarousel'
import SectionSingup from '../../components/section/section_signup/SectionSingup'
import SectionPricing from '../../components/section/section_pricing/SectionPricing'
import SectionTrusted from '../../components/section/section_trusted/SectionTrusted'
import './homepage.scss'
import SectionCountup from '../../components/section/section_countup/SectionCountup'
import SectionCategory from '../../components/section/section_category/SectionCategory'
import SectionAdvertise from '../../components/section/section_advertise/SectionAdvertise'

export default function Home() {
  return (
    <div>
        <Headers/>  
          {/* Advertisement */}
          <section id='advertisement'>
            <SectionAdvertise/>
          </section>

          

          {/* Carousel */}
          <section id='carousel'>
              
          </section>

          {/* Category */}
          <section id='categories'>
            <SectionCategory/>
          </section>


          {/* Countup */}
          <section id='countup'>
            <SectionCountup/>
          </section>

          {/* Trusted */}
          <section id='trusted' >
            <SectionTrusted/>
          </section>



          {/* Pricing */}
          <section id='pricing'>
            <SectionPricing/>
          </section>



          {/* Sign up */}
          <section id='signup' >
              <SectionSingup/>
          </section>
        <Footer/>
    </div>
  )
}
