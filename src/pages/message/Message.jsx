import React from 'react'
import './Message.scss'
import { Link } from 'react-router-dom'


export default function Message() {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to='/messages'>MESSAGES</Link> | John Doe |
        </span>
        <div className="messages">
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/e5b19ffd4ebbca353ce97f0c1bba98ed-1654005202417/e4c5cb15-52ad-41fa-b0f7-e395c4d64e47.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis magni laudantium repellendus dolores. Consectetur ab, magni mollitia nemo dolorum consequatur, nihil laborum laudantium, cumque vel natus cupiditate nostrum. Consequuntur?</p>
          </div>
          <div className="item owner">
            <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/e5b19ffd4ebbca353ce97f0c1bba98ed-1654005202417/e4c5cb15-52ad-41fa-b0f7-e395c4d64e47.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis magni laudantium repellendus dolores. Consectetur ab, magni mollitia nemo dolorum consequatur, nihil laborum laudantium, cumque vel natus cupiditate nostrum. Consequuntur?</p>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/e5b19ffd4ebbca353ce97f0c1bba98ed-1654005202417/e4c5cb15-52ad-41fa-b0f7-e395c4d64e47.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis magni laudantium repellendus dolores. Consectetur ab, magni mollitia nemo dolorum consequatur, nihil laborum laudantium, cumque vel natus cupiditate nostrum. Consequuntur?</p>
          </div>
          <div className="item owner">
            <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/e5b19ffd4ebbca353ce97f0c1bba98ed-1654005202417/e4c5cb15-52ad-41fa-b0f7-e395c4d64e47.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis magni laudantium repellendus dolores. Consectetur ab, magni mollitia nemo dolorum consequatur, nihil laborum laudantium, cumque vel natus cupiditate nostrum. Consequuntur?</p>
          </div>
          <div className="item owner">
            <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/e5b19ffd4ebbca353ce97f0c1bba98ed-1654005202417/e4c5cb15-52ad-41fa-b0f7-e395c4d64e47.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis magni laudantium repellendus dolores. Consectetur ab, magni mollitia nemo dolorum consequatur, nihil laborum laudantium, cumque vel natus cupiditate nostrum. Consequuntur?</p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}
