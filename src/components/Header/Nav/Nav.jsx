import React from 'react'
import PageLinks from '../../reusable/header/PageLinks'
import DropDownMenu from '../../reusable/header/DropDownMenu'
import DropDownMenuItem from '../../reusable/header/DropDownMenuItem'
function Nav() {
  return (
    <section className='nav-header-wrapper'>
      <nav className='nav-links container'>
        <PageLinks link='/' text='الصفحة الرئيسية' />
        <PageLinks link='/sfds' text='أخبار مصر' />
        <PageLinks text='أقتصاد' menu={true}>
          <DropDownMenu>
            <DropDownMenuItem text='بنوك' link='' />
            <DropDownMenuItem text='شركات وبورصه' link='' />
            <DropDownMenuItem text='استثمار عقاري' link='' />
            <DropDownMenuItem text='بترول وطاقه' link='' />
            <DropDownMenuItem text='نقل و طيران' link='' />
          </DropDownMenu>
        </PageLinks>
        <PageLinks link='/sffs' text='حوادث و قضايا' />
        <PageLinks link='/ffdsf' text='رياضة' />
        <PageLinks link='/sfsdfs' text='محافظات' />
        <PageLinks link='/sdfsdf' text='عربي ودولي' />
        <PageLinks link='/sdff' text='تقارير و تحقيقات' />
        <PageLinks text='المزيد' menu={true}>
          <DropDownMenu>
            <DropDownMenuItem text='أزهر و كنيسة' link='' />
            <DropDownMenuItem text='اتصالات و تكنولوجيا' link='' menu={true}>
              <DropDownMenu>
                <DropDownMenuItem text='موبايلات' link='' />
              </DropDownMenu>
            </DropDownMenuItem>
            <DropDownMenuItem text='تصريحات خاصه و حوارات' link='' />
            <DropDownMenuItem text='فن و ثقافة' link='' />
            <DropDownMenuItem text='صحافة المواطن' link='' />
            <DropDownMenuItem text='خدمات' link='' />
            <DropDownMenuItem text='منوعات' link='' menu={true}>
              <DropDownMenu>
                <DropDownMenuItem link='' text='مرأة' />
                <DropDownMenuItem link='' text='صحه' />
                <DropDownMenuItem link='' text='مطبخ العاصمة' />
                <DropDownMenuItem link='' text='مجتمع العاصمة' />
              </DropDownMenu>
            </DropDownMenuItem>
            <DropDownMenuItem text='السبورة التعليمية' link='' />
            <DropDownMenuItem text='شكاوي المواطنين' link='' />
          </DropDownMenu>
        </PageLinks>
      </nav>
    </section>
  )
}

export default Nav
