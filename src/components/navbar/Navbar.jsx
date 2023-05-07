import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const {pathname} = useLocation()
     
    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', isActive);
        return ()=> {
            window.removeEventListener('scroll', isActive);
        }
    }, []);

    const currentUser = {
        id: 1,
        username: 'JohnDoe',
        isSeller: true
    }

  return (
    <div className={active || pathname !=='/' ?"navbar active" : "navbar"}>
        <div className="container">
            <Link to='/' className='link'>
                <div className="logo">
                    <span className="text">fiverr</span>
                    <span className="dot">.</span>
                </div>
            </Link>
            {(active || pathname !=='/') && (
                <div className='searchbar'>
                <input type="text" placeholder='What service are you looking for today?'/>
                <img src="./img/search.png" alt="" />
                </div>
            )}
            <div className="links">
                <ul>
                    <li>Fiverr Business</li>
                    <li>Explore</li>
                    <li><img src="./img/language.png" alt="" /> English</li>
                    {!currentUser?.isSeller && <li>Become a seller</li>}
                    {!currentUser && <li>Sign in</li>}
                </ul>
                {!currentUser && <button>Join</button>}
                {currentUser && (
                    <div className='user' onClick={()=>setOpen(!open)}>
                        <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="" />
                        <span>{currentUser?.username}</span>
                        {open && <div className="options">
                            {currentUser?.isSeller && (
                                    <>
                                        <Link className='link' to='/mygigs'>Gigs</Link>
                                        <Link className='link' to='/add'>Add New Gig</Link>
                                    </>
                            )}
                            <Link className='link' to='/orders'>Orders</Link>
                            <Link className='link' to='/messages'>Messages</Link>
                            <Link className='link' to='/'>Logout</Link>
                        </div> 
                        }
                    </div>
                )}
        </div>
        </div>
        {(active || pathname !=='/') && (
            <>
                <hr />
                <div className="menu">
                    <Link className='link' to='/'>Graphic Design</Link>
                    <Link className='link' to='/'>Video & Animation</Link>
                    <Link className='link' to='/'>Writing and Translation</Link>
                    <Link className='link' to='/'>AI Services</Link>
                    <Link className='link' to='/'>Digital Marketing</Link>
                    <Link className='link' to='/'>Music & Media</Link>
                    <Link className='link' to='/'>Programming & Tech</Link>
                    <Link className='link' to='/'>Business</Link>
                    <Link className='link' to='/'>Lifestyle</Link>
                </div>
                <hr />
            </>
        )}
    </div>
  )
}

export default Navbar