import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar'
import './stylesheet/index.css';
import './stylesheet/App.css';
import Home from './routes/Home';
import About from './routes/About'

function App() {
    const [route, setRoute] = useState('home')
    const [iTypeInit, setiTypeInit] = useState(false)

    return (
        <>
            <NavigationBar path={route} setRoute={setRoute} setiTypeInit={setiTypeInit} />
            <div className={` ${route === 'home' ? `` : `hidden`}`}>
                <Home iTypeInit={iTypeInit} setiTypeInit={setiTypeInit}
                    className='h-screen w-full' />
            </div>
            <div className={`${route === 'about' ? `` : `hidden`}`}>
                <About className='h-screen w-full' />
            </div>
        </>
    )
};

export default App
