import React, { useState } from 'react'
import './Gigs.scss'
import GigCard from '../../components/gigCard/GigCard'
import {gigs} from '../../data'

export default function Gigs() {

  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState('sales');

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }
  
  return (
    <div className='gigs'>
      <div className="container">
        <span className='breadcrumbs'>FIVERR | GRAPHICS & DESIGN</span>
        <h1>AI Artists</h1>
        <p>Explore the boundaries of art and technology with Fiverr's AI artists</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder='min'/>
            <input type="text" placeholder='max'/>
            <button>Apply</button>
          </div>
          <div className="right">
            <span className='sortBy'>Sort by:</span>
            <div className="sortType">{sort === 'sales' ? 'Best Selling' : 'Newest'}</div>
            <img src="./img/down.png" alt="" onClick={()=>setOpen(!open)}/>
            {open && (
            <div className="rightMenu">
              {sort === 'sales' ? 
              <span onClick={()=>reSort('createAt')}>Newest</span> :
              <span onClick={()=>reSort('sales')}>Best Selling</span>}
            </div>
            )}
          </div>
        </div>
        {/* <div className="gigs">
          {gigs.map(gig => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div> */}
        {<div className='cards'>
          {gigs.map(gig=> (
          <GigCard key={gig.id} item={gig} />
          ))}
        </div>}
      </div>
    </div>
  )
}