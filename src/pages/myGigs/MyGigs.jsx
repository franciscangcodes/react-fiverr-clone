import React from 'react'
import './MyGigs.scss'
import { Link } from 'react-router-dom'

export default function MyGigs() {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to='/add'>
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/270408589/original/ada03fe47176c7222c59b3cbc8373827fdf714b0/create-ai-generated-art-for-you.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td><img className='delete' src="/img/delete.png" alt="" /></td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/270408589/original/ada03fe47176c7222c59b3cbc8373827fdf714b0/create-ai-generated-art-for-you.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td><img className='delete' src="/img/delete.png" alt="" /></td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/270408589/original/ada03fe47176c7222c59b3cbc8373827fdf714b0/create-ai-generated-art-for-you.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td><img className='delete' src="/img/delete.png" alt="" /></td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/270408589/original/ada03fe47176c7222c59b3cbc8373827fdf714b0/create-ai-generated-art-for-you.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td><img className='delete' src="/img/delete.png" alt="" /></td>
          </tr>
        </table>
      </div>
    </div>
  )
}
