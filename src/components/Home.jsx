import React from 'react'
import hero from "../assets/hero.jpg"
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <div className='section flex items-center ' id="home">
      <div>
        <div>
            <img src={hero} alt="hero-img" />
        </div>
      </div>
    </div>
  )
}

export default Home
