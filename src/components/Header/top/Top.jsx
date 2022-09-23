import React, { useState } from 'react'
import TodaysDate from './TodaysDate'
import SocialLinks from '../../reusable/header/SocialLinks'
import ContactLinks from '../../reusable/header/ContactLinks'
import Search from './Search'
import {
  BsFacebook,
  BsYoutube,
  BsTwitter,
  BsTelephoneFill,
} from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { HiLocationMarker } from 'react-icons/hi'
import DropDownSearch from './DropDownSearch'
function Top() {
  const [active, setActive] = useState(false)
  return (
    <section className='top-header-wrapper '>
      <div className='top-header container'>
        <figure>
          <TodaysDate />
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
        </figure>
        <figure>
          <ContactLinks
            link='mailto:alaasema.news@hotmail.com'
            icon={<MdOutlineEmail />}
            text='alaasema.news@hotmail.com'
            tooltip='راسلنا'
          />
          <ContactLinks
            tooltip='تحدث معنا'
            link='tel:+'
            icon={<BsTelephoneFill />}
            text='+'
          />
          <ContactLinks
            link=''
            icon={<HiLocationMarker />}
            text='مدينة نصر'
            tooltip='عنوانا'
          />
        </figure>
        <figure>
          <Search active={active} setActive={setActive} />
        </figure>
        <DropDownSearch active={active} />
      </div>
    </section>
  )
}

export default Top
