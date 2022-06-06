import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const User = () => {
    return (
        <div className='user-container'>
            <div className='user'>
                <div className='back-nav-container'>
                    <div className='back-nav'>
                        <Link to='/wall-by-eleven/'>
                            <div className='back-box'>
                                <svg width="27" height="27" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.375 5.25 8.625 12l6.75 6.75"></path>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
                <Login />
            </div>
        </div>
    )
}

export default User
