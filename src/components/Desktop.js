import React from 'react'

const Desktop = () => {
    return (
        <div className='desktop-container'>
            <div className='desktop'>
                <div className='pc-card-container'>
                    <div className='pc-card'>
                        <div className='image1-pc'></div>
                        <div className='text-pc'>
                            <div className='pc-title'>
                                Never Give Up
                            </div>
                            <div className='pc-options'>
                                <svg width="24" height="24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.343 7.778a4.5 4.5 0 0 1 7.339-1.46L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.501 4.501 0 0 1-.975-4.904Z"></path>
                                </svg>
                                <svg width="24" height="24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1"></path>
                                    <path d="m16 12-4 4-4-4"></path>
                                    <path d="M12 16V4"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    {/* <div className='pc-card'>
                        <div className='image1-pc'></div>
                        <div className='text-pc'>
                            <div className='pc-title'>
                                Never Give Up
                            </div>
                            <div className='pc-options'>
                                <svg width="24" height="24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.343 7.778a4.5 4.5 0 0 1 7.339-1.46L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.501 4.501 0 0 1-.975-4.904Z"></path>
                                </svg>
                                <svg width="24" height="24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1"></path>
                                    <path d="m16 12-4 4-4-4"></path>
                                    <path d="M12 16V4"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='pc-card'>
                        <div className='image1-pc'></div>
                        <div className='text-pc'>
                            <div className='pc-title'>
                                Never Give Up
                            </div>
                            <div className='pc-options'>
                                <svg width="24" height="24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.343 7.778a4.5 4.5 0 0 1 7.339-1.46L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.501 4.501 0 0 1-.975-4.904Z"></path>
                                </svg>
                                <svg width="24" height="24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1"></path>
                                    <path d="m16 12-4 4-4-4"></path>
                                    <path d="M12 16V4"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='pc-card'>
                        <div className='image1-pc'></div>
                        <div className='text-pc'>
                            <div className='pc-title'>
                                Never Give Up
                            </div>
                            <div className='pc-options'>
                                <svg width="24" height="24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.343 7.778a4.5 4.5 0 0 1 7.339-1.46L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.501 4.501 0 0 1-.975-4.904Z"></path>
                                </svg>
                                <svg width="24" height="24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1"></path>
                                    <path d="m16 12-4 4-4-4"></path>
                                    <path d="M12 16V4"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='pc-card'>
                        <div className='image1-pc'></div>
                        <div className='text-pc'>
                            <div className='pc-title'>
                                Never Give Up
                            </div>
                            <div className='pc-options'>
                                <svg width="24" height="24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.343 7.778a4.5 4.5 0 0 1 7.339-1.46L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.501 4.501 0 0 1-.975-4.904Z"></path>
                                </svg>
                                <svg width="24" height="24" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1"></path>
                                    <path d="m16 12-4 4-4-4"></path>
                                    <path d="M12 16V4"></path>
                                </svg>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Desktop
