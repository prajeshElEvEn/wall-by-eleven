import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Desktop from './Desktop'
import Footer from './Footer'
import Mobile from './Mobile'
import Navbar from './Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Footer />
            <Routes>
                <Route path="/wall-by-eleven/" element={<Desktop />} />
                <Route path="/wall-by-eleven/mobile" element={<Mobile />} />
            </Routes>
        </div>
    )
}

export default Home
