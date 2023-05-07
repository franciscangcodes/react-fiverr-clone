import React from 'react'
import './Orders.scss'

export default function Orders() {


  const currentUser = {
      id: 1,
      username: 'JohnDoe',
      isSeller: true
  }


  return (
    <div className="Orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? 'Buyer' : 'Seller'}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/270408589/original/ada03fe47176c7222c59b3cbc8373827fdf714b0/create-ai-generated-art-for-you.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td><img className='delete' src="/img/message.png" alt="" /></td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/270408589/original/ada03fe47176c7222c59b3cbc8373827fdf714b0/create-ai-generated-art-for-you.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td><img className='delete' src="/img/message.png" alt="" /></td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/270408589/original/ada03fe47176c7222c59b3cbc8373827fdf714b0/create-ai-generated-art-for-you.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td><img className='delete' src="/img/message.png" alt="" /></td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/270408589/original/ada03fe47176c7222c59b3cbc8373827fdf714b0/create-ai-generated-art-for-you.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td><img className='delete' src="/img/message.png" alt="" /></td>
          </tr>
        </table>
      </div>
    </div>
  )
}
