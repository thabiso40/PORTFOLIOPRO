import React from 'react'
import App from '../../../App';
import'./Footer.css'
export default function Footer() {
    return (
        <div className='footer-container'>
            
            <div className='footer-parent'>
                <img 
                src={require('../../../assets/Home/shape-bg.png')} 
                 alt='no internet connection'
                />
            </div>
        </div>
    )
}
