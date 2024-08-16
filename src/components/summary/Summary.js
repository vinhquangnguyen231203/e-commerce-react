import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'reactstrap'
import { summarySelectors } from '../../redux/selectors/summarySelector'
import { displayPrice } from '../../utilities/ulties'


export default function Summary() {
    const total = useSelector(summarySelectors)
  return (
    <Container>
        <h1>Summary: <span>{displayPrice(total)}</span></h1> 
    </Container>
  )
}
