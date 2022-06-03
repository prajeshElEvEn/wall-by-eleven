import React from 'react'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <div className='footer-top'>
                    <div className='footer-title'>
                        Choose your wall.
                    </div>
                    <div className='footer-search-container'>
                        <div className='footer-search'>
                            <div className='search-left'>
                                <svg width="28" height="28" fill="none" stroke="#949494" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.875 18.75a7.875 7.875 0 1 0 0-15.75 7.875 7.875 0 0 0 0 15.75Z"></path>
                                    <path d="M16.443 16.445 21 21.002"></path>
                                </svg>
                            </div>
                            <div className='search-right'>
                                <input type='text' placeholder='What do you inspire for?' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <div className='btn-github'>
                        <a href='https://github.com/prajeshElEvEn/wall-by-eleven' target='_blank' rel='noreferrer'>
                            Github
                        </a>
                        <svg width="20" height="20" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 15.75 18 5.25"></path>
                            <path d="M18 14.625V5.25H8.625"></path>
                            <path d="M3.75 20.25h16.5"></path>
                        </svg>
                    </div>
                    <div className='text-copy'>
                        &copy; {new Date().getFullYear()} ElEvEn Co. Ltd.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
