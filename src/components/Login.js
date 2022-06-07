import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login-container'>
            <div className='login'>
                <div className='login-google'>
                    <div className='login-google-logo'>
                        <svg width="27" height="27" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m22.18 10.382-.107-.45h-9.77v4.136h5.838c-.606 2.878-3.419 4.393-5.716 4.393-1.672 0-3.434-.703-4.6-1.833a6.566 6.566 0 0 1-1.96-4.636c0-1.741.783-3.484 1.922-4.63 1.14-1.146 2.86-1.787 4.57-1.787 1.96 0 3.363 1.04 3.888 1.514l2.939-2.923c-.862-.757-3.23-2.666-6.922-2.666-2.847 0-5.578 1.09-7.574 3.08C2.718 6.54 1.7 9.372 1.7 12s.965 5.32 2.874 7.294C6.613 21.399 9.5 22.5 12.475 22.5c2.706 0 5.27-1.06 7.1-2.984 1.796-1.894 2.726-4.514 2.726-7.261 0-1.156-.116-1.843-.122-1.873Z"></path>
                        </svg>
                    </div>
                    <div className='login-google-text'>Login with Google</div>
                </div>
                <div className='or-container'>
                    <div className='or'>
                        or
                    </div>
                </div>
                <div className='login-form-container'>
                    <div className='login-form'>
                        <div className='login-form-group'>
                            <input type='email' placeholder='example@gmail.com' />
                        </div>
                        <div className='login-form-group'>
                            <input type='password' placeholder='password' />
                        </div>
                        <div className='login-form-btn'>
                            <input type='submit' value='Login' />
                        </div>
                    </div>
                    <div className='login-form-register'>
                        But I don't have an account. &nbsp;
                        <Link to='/wall-by-eleven/register'>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
