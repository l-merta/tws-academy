import React from 'react';

import Animator from '../managers/Animator';

interface ContactInfoProps {
  children: React.ReactNode;
  icon: string;
  link?: string;
}

const ContactInfo:React.FC<ContactInfoProps> = (props: ContactInfoProps) => {
  const iconStyle = 'light';

  return (
    <Animator anim='slide-right'>
      <a href={props.link} className='contact-info-link' target='_blank'>
        <div className="icon-container">
          <i className={'fa-' + iconStyle + ' fa-' + props.icon}></i>
        </div>
        <span className="contact-text">{props.children}</span>
      </a>
    </Animator>
  )
}

export default ContactInfo
