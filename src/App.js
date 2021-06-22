import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar'
import './stylesheet/index.css';
import './stylesheet/App.css';
import Home from './routes/Home';
import About from './routes/About'

function App() {
    const [route, setRoute] = useState('home')
    const [iTypeInit, setiTypeInit] = useState(false)
    const getPath = () => {
        return route
    }
    const component = () => {
        switch (route) {
            case 'about':
                return <About />;
                break;
            case 'home':
                return <Home iTypeInit={iTypeInit} setiTypeInit={setiTypeInit} path={getPath} />;
                break;
        }
    }

    return (
        <div className='overflow-x-hidden overflow-y-hidden'>
            <NavigationBar path={route} setRoute={setRoute} setiTypeInit={setiTypeInit} />
            <div className={`transform transition relative w-max flex flex-row ${route == 'home' ? `` : `-translate-x-1/2`}`}>
                <div>
                    <Home iTypeInit={iTypeInit} setiTypeInit={setiTypeInit}
                        className={`w-screen h-screen ${route == 'home' ? `overflow-y-auto` : `overflow-y-hidden`}`} />
                </div>
                <div>
                    <About className={`w-screen h-screen ${route == 'about' ? `overflow-y-auto` : `overflow-y-hidden`}`} />
                </div>
            </div>
        </div>
    )
};

export default App
