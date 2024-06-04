import React from 'react';
import { Route, Routes } from "react-router-dom";
import './css/main.css';
import Home from "./Home";
import Projects from "./Projects";
import Project from "./Project";
import Gallery from "./Gallery";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/projects/xcraft" element={<Project project="xcraft"/>}/>
            <Route path="/projects/yme" element={<Project project="yme"/>}/>
            <Route path="/projects/gg" element={<Project project="gg"/>}/>
            <Route path="/projects/porsche" element={<Project project="porsche"/>}/>
        </Routes>
    );
}

export default App;
