import React, { Fragment } from 'react'
import Header from '../components/header';
import Footer from '../components/footer/footer';

function Layout( {children}) {
    return (
        <>

            <Header />


            <div className='overflow-x-hidden '>
                {children}
            </div>


            <Footer className=" " />

        </>






    )
}

export default Layout

