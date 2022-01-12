import React from 'react'
import Header from './Header/Header.js'
import Profile  from './Profile/Profile'
import Footer from './Footer/Footer'
import './Home.css'

export default function Home() {
    return (
        <div className='home-container'>
            <Header/>
            <Profile/>
            <Footer/>
        </div>
    );
}
