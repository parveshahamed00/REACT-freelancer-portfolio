import React from "react"
import  ReactDOM  from "react-dom"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Portfolio from "./Portfolio"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import "./index.css"
const App=()=>(
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Portfolio></Portfolio>
        <About></About>
        <Contact></Contact>
        <Footer></Footer>
    </div>
)
ReactDOM.render(<App></App>,document.querySelector("#root"))