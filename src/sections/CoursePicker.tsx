import { useState } from 'react'

import CoursePickerItem  from './../components/CoursePickerItem';

const CoursePicker = () => {
  const [activeClass, setActiveClass] = useState('scout');

  return (
    <div className="course-container">
      <nav>
        <CoursePickerItem header='Rytíř' link='rytir' className='warrior' activeClass={activeClass} setActiveClass={setActiveClass}>Těžké brnění, silný úder a odvaha větší než pud sebezáchovy.</CoursePickerItem>
        <CoursePickerItem header='Průzkumník' link='pruzkumnik' className='scout' activeClass={activeClass} setActiveClass={setActiveClass}>Rychlý, tichý a přesný – ideální na útěk i překvapení zezadu.</CoursePickerItem>
        <CoursePickerItem header='Čaroděj' link='carodej' className='mage' activeClass={activeClass} setActiveClass={setActiveClass}>Mistr záhad a kouzel, který ovládá moc, již ostatní nechápou.</CoursePickerItem>
      </nav>
      <div className="display">
        {/* <img src="https://unsplash.it/1080/1920" alt="" /> */}
        <video autoPlay loop muted playsInline key={activeClass} className='video-bg'>
          <source src={"/images/classes/" + activeClass + "_animation_idle.webm"} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default CoursePicker
