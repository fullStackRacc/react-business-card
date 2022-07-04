import React from "react"
import Information from "./components/Information.js"
import About from "./components/About.js"
import Interests from "./components/Interests.js"
import Footer from "./components/Footer.js"

export default function App() {
    return (
        <main>
            <Information />
            <About />
            <Interests />
            <Footer />
        </main>
    )
}