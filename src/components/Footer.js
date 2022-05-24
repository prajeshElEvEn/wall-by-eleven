import React from 'react'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <div className='btn-github'>
                    <a href='https://github.com/prajeshElEvEn/wall-by-eleven' target='_blank' rel='noreferrer'>
                        Github
                    </a>
                </div>
                <div className='text-copy'>
                    &copy; {new Date().getFullYear()} WallByEleven
                </div>
            </div>
        </div>
    )
}

export default Footer
