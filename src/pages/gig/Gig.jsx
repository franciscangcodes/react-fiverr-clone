import React from 'react'
import './Gig.scss'
import { Slider } from 'infinite-react-carousel/lib'

export default function Gig() {
  return (
    <div className='gig'>
      <div className="container">
        <div className="left">
          <div className="breadCrumbs">FIVERR | GRAPHICS & DESIGN</div>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img className='pp' src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/23905bcdab16b427c8612965f318b4e0-1660400198734/8275baf4-be7e-4120-8a7a-ddf0fde94600.png" alt="" />
            <span>John Doe</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slideToShow={1} arrowScroll={1} className='slider'>
            <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/270408589/original/ada03fe47176c7222c59b3cbc8373827fdf714b0/create-ai-generated-art-for-you.png" alt="" />
            <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/270408589/original/77dd7ed69903d5f9308d66b10d18ad73bee45a6b/create-ai-generated-art-for-you.png" alt="" />
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/270408589/original/0ca5963fc2c1a70f98feac6d59d7f90f5f938071/create-ai-generated-art-for-you.png" alt="" />
            <img src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/9f905942f2a3ec6ea5fa09fc4ac619c8-1676840364/Nexus_raccoon_with_red_eyes_looking_over_its_shoulder_and_big_b_81273344-ae0c-4a6f-a586-cc15e543e011/create-ai-generated-art-for-you.png" alt="" />
            <img src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/8e9e3f25d74b18e77e198a50b9f9ae8f-1676328572/Nexus_a_group_of_computer_programmers_meditating_in_the_lotus_p_0f2da782-9b62-4111-bdc2-07f07d8e5fbd/create-ai-generated-art-for-you.png" alt="" />
          </Slider>
          <h2>About this gig</h2>
          <p>
            I use an AI program called MidJourney to create images based on text prompts. This means I can help you to create a vision you have through a textual description of your scene without requiring any reference images. <br /><br />
            Some things I've found it often excels at are:
            <ul>
              <li><span>Character portraits</span> (E.g. a picture to go with your DnD character)</li>
              <li><span>Landscapes</span> (E.g. wallpapers, illustrations to compliment a story)</li>
              <li><span>Logo designs & concepts</span> (E.g. Esports team, business, profile picture)</li>
            </ul>
            <br />
            You can be as vague or as descriptive as you want. Being more vague will allow the AI to be more creative which can sometimes result in some amazing images. You can also be precise if you have a clear image of what you want in mind (a certain amount of flexibility is helpful as the AI often puts its own creativity into things, which is what makes AI so amazing). 
            <br />
            <br />
            <strong>All of the images I create are original and will be found nowhere else.</strong>
            <br />
            <br />
            If you have any questions or you aren't sure that your idea is capable with AI you're more than welcome to send me a message.
            <br />
            <br />
            I will <strong>NOT</strong> create images that are:
            <ul>
              <li>Sexually explicit</li>
              <li>Excessively violent</li>
              <li>Politically charged</li>
              <li>Purposefully offensive or derogatory</li>
            </ul>
          </p>
          <div className="seller">
            <h2>About the seller</h2>
            <div className="user">
              <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/23905bcdab16b427c8612965f318b4e0-1660400198734/8275baf4-be7e-4120-8a7a-ddf0fde94600.png" alt="" />
              <div className="info">
                <span>John Doe</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>My name is Ciaran, I enjoy creating AI generated art in my spare time. I have a lot of experience using the AI program and that means I know what to prompt the AI with to get a great and incredibly detailed result.</p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img className='pp' src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/e5b19ffd4ebbca353ce97f0c1bba98ed-1654005202417/e4c5cb15-52ad-41fa-b0f7-e395c4d64e47.jpg" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1ea.png" alt="" />
                    <span>Ireland</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>I just want to say that art_with_ai was the first, and after this, the only artist Ill be using on Fiverr. Communication was amazing, each and every day he sent me images that I was free to request changes to. They listened, understood, and delivered above and beyond my expectations. I absolutely recommend this gig, and know already that Ill be using it again very very soon </p>
              <div className="helpful">
                <span>Helpful?</span>
                <span><img src="/img/like.png" alt="" /> Yes</span>
                <span><img src="/img/dislike.png" alt="" /> No</span>
              </div>
              <hr />
            </div>
            <div className="item">
              <div className="user">
                <img className='pp' src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/e5b19ffd4ebbca353ce97f0c1bba98ed-1654005202417/e4c5cb15-52ad-41fa-b0f7-e395c4d64e47.jpg" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1ea.png" alt="" />
                    <span>Ireland</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>I just want to say that art_with_ai was the first, and after this, the only artist Ill be using on Fiverr. Communication was amazing, each and every day he sent me images that I was free to request changes to. They listened, understood, and delivered above and beyond my expectations. I absolutely recommend this gig, and know already that Ill be using it again very very soon </p>
              <div className="helpful">
                <span>Helpful?</span>
                <span><img src="/img/like.png" alt="" /> Yes</span>
                <span><img src="/img/dislike.png" alt="" /> No</span>
              </div>
              <hr />
            </div>
            <div className="item">
              <div className="user">
                <img className='pp' src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/e5b19ffd4ebbca353ce97f0c1bba98ed-1654005202417/e4c5cb15-52ad-41fa-b0f7-e395c4d64e47.jpg" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1ea.png" alt="" />
                    <span>Ireland</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>I just want to say that art_with_ai was the first, and after this, the only artist Ill be using on Fiverr. Communication was amazing, each and every day he sent me images that I was free to request changes to. They listened, understood, and delivered above and beyond my expectations. I absolutely recommend this gig, and know already that Ill be using it again very very soon </p>
              <div className="helpful">
                <span>Helpful?</span>
                <span><img src="/img/like.png" alt="" /> Yes</span>
                <span><img src="/img/dislike.png" alt="" /> No</span>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>I will create a unique high quality AI generated image based on a description that you give me</p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 days delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Prompt Delivery</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Prompt Delivery</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Prompt Delivery</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Prompt Delivery</span>
              </div>
            </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}
