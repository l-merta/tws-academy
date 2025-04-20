import React from 'react'

interface ContactInfoProps {
  children: React.ReactNode;
  icon: string;
  link?: string;
}

const ContactInfo:React.FC<ContactInfoProps> = (props: ContactInfoProps) => {
  const iconStyle = 'light';

  return (
    <a href={props.link} className='contact-info-link' target='_blank'>
      <div className="icon-container">
        <i className={'fa-' + iconStyle + ' fa-' + props.icon}></i>
      </div>
      <span className="contact-text">{props.children}</span>
    </a>
  )
}

export default ContactInfo
