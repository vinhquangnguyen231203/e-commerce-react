import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Container } from 'reactstrap'
import logo from '../../assets/images/logo-no-background.png'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div>
        <Header/>
        <div className='content' style={{marginTop: '200px'}}>
            <Container className='d-flex text-center flex-column justify-content-center align-items-center'>
                <div className='box'>
                    <div className='box-image'>
                        <img alt='logo' src={logo} width={200} height={100}/>
                    </div>
                    <h1 className='mt-5'>Lỗi 404</h1>
                    <p className='my-5'>
                        Đường dẫn bạn truy cập hiện không tồn tại. <Link to='/'>Nhấn vào đây</Link> để quay về
                    </p>
                </div>
            </Container>
        </div>
        <Footer/>
    </div>
  )
}
