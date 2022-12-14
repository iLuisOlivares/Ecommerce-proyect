import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import '../styles/components/Layout.css'

export const Layout = ({children}) => {
  return (
    <div className=''>
      <div className="Main">
        <Header/>
        {children}

        <Footer/>
      </div>



    </div>
  )
}
