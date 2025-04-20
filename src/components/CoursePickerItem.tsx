import React from 'react';
import { Link } from 'react-router-dom';

interface CoursePickerItemProps {
  children: React.ReactNode;
  header: string;
  link: string;
  className: string;
  activeClass: string;
  setActiveClass: (className: string) => void;
}

const CoursePickerItem:React.FC<CoursePickerItemProps> = (props: CoursePickerItemProps) => {
  const active = props.className == props.activeClass ? 'active' : 'inactive';
  const link = '/' + props.link;
  const iconFile = '/images/classes/icon_' + props.className + '_' + active + '.png';

  function onHover() {
    props.setActiveClass(props.className);
  }

  return (
    <Link to={link} className={'course-picker-item course-picker-item-' + active + ' course-picker-item-' + props.className} onMouseEnter={onHover}>
      <div className="icon-container">
        <img src={iconFile} alt="" />
      </div>
      <span className="course-text">
        <span className='header'>{props.header}</span>
        <p className='desc'>{props.children}</p>
      </span>
    </Link>
  )
}

export default CoursePickerItem
