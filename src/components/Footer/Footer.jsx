import React from 'react'
import SocialLinks from '../reusable/header/SocialLinks'
import Producer from './Producer'
import Copyright from './Copyright'
import { BsFacebook, BsYoutube, BsTwitter } from 'react-icons/bs'
function Footer() {
  return (
    <div className='footer-wrapper'>
      <footer className='container'>
        <Producer />
        <Copyright />
        <div>
          <SocialLinks
            tooltip='فيسبوك'
            link='https://www.facebook.com/alaasema.news'
            icon={<BsFacebook />}
          />
          <SocialLinks
            tooltip='تويتر'
            link='https://twitter.com/AlaasemaNews'
            icon={<BsTwitter />}
          />
          <SocialLinks
            tooltip='يوتيوب'
            link='https://www.youtube.com/channel/UCGUKJlwsWO-W-jjzEUYfZ5g'
            icon={<BsYoutube />}
          />
        </div>
      </footer>
    </div>
  )
}

export default Footer
