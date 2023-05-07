import React from 'react'
import './Explore.scss'
import { Link } from 'react-router-dom'
function Explore() {
  return (
    <div className='explore'>
        <div className="container">
            <h2>Explore the marketplace</h2>
            <div className="marketplace">
                <Link to='/' className='item'>
                    <img src="./icons/graphic.svg" alt="" />
                    <span></span>
                    <p>Graphics & Design</p>
                </Link>
                <Link to='/' className='item'>
                    <img src="./icons/marketing.svg" alt="" />
                    <span></span>
                    <p>Digital Marketing</p>
                </Link>
                <Link to='/' className='item'>
                    <img src="./icons/writing.svg" alt="" />
                    <span></span>
                    <p>Writing & Translation</p>
                </Link>
                <Link to='/' className='item'>
                    <img src="./icons/video.svg" alt="" />
                    <span></span>
                    <p>Video & Animation</p>
                </Link>
                <Link to='/' className='item'>
                    <img src="./icons/music.svg" alt="" />
                    <span></span>
                    <p>Music & Audio</p>
                </Link><Link to='/' className='item'>
                    <img src="./icons/programming.svg" alt="" />
                    <span></span>
                    <p>Programming & Tech</p>
                </Link>
                <Link to='/' className='item'>
                    <img src="./icons/business.svg" alt="" />
                    <span></span>
                    <p>Business</p>
                </Link>
                <Link to='/' className='item'>
                    <img src="./icons/lifestyle.svg" alt="" />
                    <span></span>
                    <p>Lifestyle</p>
                </Link>
                <Link to='/' className='item'>
                    <img src="./icons/data.svg" alt="" />
                    <span></span>
                    <p>Data</p>
                </Link>
                <Link to='/' className='item'>
                    <img src="./icons/photography.svg" alt="" />
                    <span></span>
                    <p>Photography</p>
                </Link>       
            </div>
        </div>
    </div>
  )
}

export default Explore