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
                        <Link to='/wall-by-eleven/'>
                            <svg width="27" height="27" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 13h18M9.75 17 9 20l-1 1h8l-1-1-.75-3h-4.5ZM5 17h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className='navbar-item'>
                        <Link to='/wall-by-eleven/mobile'>
                            <svg width="27" height="27" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className='navbar-item'>
                        <Link to='/wall-by-eleven/user'>
                            <svg width="27" height="27" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12 10.8a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2ZM3.6 21.6a8.4 8.4 0 0 1 16.8 0H3.6Z" clip-rule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
