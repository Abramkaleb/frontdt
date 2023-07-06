import React from 'react';
import "./App.css";
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Pages/Dashboard/Dashboard.js';
import Details from './Pages/Details/Details.js';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className='main-container'>
        <BrowserRouter>
            <Sidebar>
                <Routes>
                    <Route path='/'element={<Home />} />
                    <Route path='/dashboard'element={<Dashboard />} />
                    <Route path='/details'element={<Details />} />
                    <Route path='/details'element={<About />} />
                </Routes>
                
            </Sidebar>
        </BrowserRouter>
    </div>
    );
}

export default App;