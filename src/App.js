import React from 'react';
import { Route, Routes } from "react-router-dom";
import './css/main.css';
import Home from "./Home";
import Projects from "./Projects";
import Gallery from "./Gallery";
import About from "./About";
import Contact from "./Contact";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/Gallery" element={<Gallery/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
    );
}

export default App;
