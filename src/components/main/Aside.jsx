import React from 'react'
import Shortcuts from '../reusable/main/Shortcuts'
import Currency from '../reusable/main/Currency'
import Opinion from '../reusable/main/Opinion'
import MostVeiw from '../reusable/main/MostVeiw'
function Aside() {
  return (
    <aside>
      <Shortcuts header='أسعار العملات'>
        <Currency theValue={21} currency='الدولار الأمريكي' />
        <Currency theValue={19.7} currency='يورو' />
        <Currency theValue={21.39} currency='جنيه إسترليني' />
        <Currency theValue={5.16} currency='ريال سعودي' />
        <Currency theValue={5.3} currency='درهم إماراتي' />
        <Currency theValue={62.93} currency='دينار كويتي' />
      </Shortcuts>
      <Shortcuts header='مقالات الرأي'>
        <Opinion
          img={
            'https://restful.alaasema.news/authors/lWDWdf79AXojo5SzUEydHjesC9RMOAI4NGvOshXW.jpeg'
          }
          title='عن الفائدة..و ادارة الأزمة الإقتصادية .. عودة للعلم بعيدا عن التفاؤل والتشاؤم سؤال وجواب'
          say='د. مها سليمان'
        />
        <Opinion
          img={
            'https://restful.alaasema.news/authors/Acv1HVt9rdkf2twEYKQzmIwfNRXRXwykvIhwzova.jpeg'
          }
          title='إكسير الحياة'
          say={'فاطمة الزهراء عادل سعد'}
        />
        <Opinion
          img={
            'https://restful.alaasema.news/authors/FjzApY95frzHYjrMhnEtjP2deurVuQgA7ynCOWHH.jpg'
          }
          title={'كيف يمكنني اختيار شريك حياتي ؟!'}
          say={'د. لميس نايل'}
        />
        <Opinion
          img={
            'https://restful.alaasema.news/authors/aoiGEaZMZT1JE5waWjLHrrAFt1Jq9ZlYj5eAhNUQ.jpeg'
          }
          title={'جرائم سيبرانية'}
          say={'د. سالي المقدم'}
        />
        <Opinion
          img={
            'https://restful.alaasema.news/authors/PKTaAMRtCBEZGb8kVN2Fp6aIXbkmHkDTbiHo1r7c.jpg'
          }
          title={'مستقبل الريف المصرى وحياة كريمة'}
          say={'د. على اسماعيل نجيب'}
        />
      </Shortcuts>
      <Shortcuts header='الأخبار الأكثر مشاهده'>
        <MostVeiw
          link=''
          title='وزارة السياحة والآثار تتيح إمكانية شراء تذاكر زيارة 6 مواقع أثرية بمحافظة الأسكندرية إلكترونيًا| صور'
        />
        <MostVeiw
          link=''
          title='في لفتة إنسانية.. قيصر مصر يستقبل والدة عاشق الدراويش الراحل'
        />
        <MostVeiw
          link=''
          title='الإسماعيلي يكشف حقيقة وصول عروض داخلية لـ محمد الشامي'
        />
        <MostVeiw
          link=''
          title='اتحاد الأحزاب يفند مزاعم هيومان رايتس ويناقش ملفات المؤتمر الاقتصادي في اجتماع مساء اليوم| صور '
        />
        <MostVeiw
          link=''
          title='السفارة الأمريكية بالقاهرة ناعية الفنان هشام سليم: ستبقى أعماله وروحه الطيبة لتلهمنا'
        />
        <MostVeiw
          link=''
          title='مواطن يهدي المجلس الأعلى للآثار 125 قطعة أثرية'
        />
        <MostVeiw
          link=''
          title='جمارك مطار القاهرة تحبط محاولة تهريب 51 تليفون محمول'
        />
        <MostVeiw
          link=''
          title='وزير الخارجية يشارك في اجتماع وزراء خارجية مجموعة الاتصال العربية بشأن الأزمة في أوكرانيا| صور'
        />
      </Shortcuts>
    </aside>
  )
}

export default Aside
