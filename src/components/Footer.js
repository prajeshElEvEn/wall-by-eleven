import React from 'react'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer'>
                <div className='btn-github'>
                    <a href='' target='_blank'>
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
