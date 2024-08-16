import React from 'react'

import { Container } from 'reactstrap'
import GalaxySlider from '../../galaxyslider/GalaxySlider'

export default function SectionTrusted() {
  return (
    <Container className='bg-trusted'>
        <h3 className='text-center mb-5 '>Doanh nghiệp hợp tác và liên kết</h3>
        <GalaxySlider/>
    </Container>
  )
}
