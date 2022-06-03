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
                            <svg width="34" height="34" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 3.75h-15A2.26 2.26 0 0 0 2.25 6v10.5a2.26 2.26 0 0 0 2.25 2.25h6.75v1.5H9a.75.75 0 1 0 0 1.5h6a.75.75 0 1 0 0-1.5h-2.25v-1.5h6.75a2.26 2.26 0 0 0 2.25-2.25V6a2.26 2.26 0 0 0-2.25-2.25Zm0 13.5h-15a.75.75 0 0 1-.75-.75V15h16.5v1.5a.75.75 0 0 1-.75.75Z"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className='navbar-item'>
                        <Link to='/wall-by-eleven/mobile'>
                            <svg width="34" height="34" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5 1.5h-9a2.26 2.26 0 0 0-2.25 2.25v16.5A2.26 2.26 0 0 0 7.5 22.5h9a2.26 2.26 0 0 0 2.25-2.25V3.75A2.26 2.26 0 0 0 16.5 1.5ZM7.5 3h9a.75.75 0 0 1 .75.75v.75H6.75v-.75A.75.75 0 0 1 7.5 3Zm9 18h-9a.75.75 0 0 1-.75-.75v-.75h10.5v.75a.75.75 0 0 1-.75.75Z"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className='navbar-item'>
                        <Link to='/wall-by-eleven/user'>
                            <svg width="34" height="34" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5 13.123a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Zm-7.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm13.875-6v7.5a6.76 6.76 0 0 1-6.75 6.75h-7.5a6.76 6.76 0 0 1-6.75-6.75v-7.5a3 3 0 0 1 5.906-.75h9.188a3 3 0 0 1 5.906.75Zm-3.75 6.75a3 3 0 0 0-3-3h-7.5a3 3 0 0 0-3 3v.75a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-.75Z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
