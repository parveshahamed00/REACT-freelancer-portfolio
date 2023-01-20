import React from "react"
import  ReactDOM  from "react-dom"
import Navbar from "./Navbar"
import Hero from "./Hero"
import "./index.css"
const App=()=>(
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
    </div>
)
ReactDOM.render(<App></App>,document.querySelector("#root"))