import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <div className='navbar-logo'>
                    WallByEleven
                </div>
                <div className='navbar-items'>
                    <div className='navbar-item'>
                        <Link to='/'>Desktop</Link>
                    </div>
                    <div className='navbar-item'>
                        <Link to='/mobile'>Mobile</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
