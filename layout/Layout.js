import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='prevent-select'>
     <Header/>
     {children}
     <Footer/>
    </div>
  )
}

export default Layout