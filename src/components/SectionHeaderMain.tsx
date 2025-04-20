import React from 'react'

interface SectionHeaderMainProps {
  children: React.ReactNode;
  icon?: string;
  iconStyle?: string;
}

const SectionHeaderMain:React.FC<SectionHeaderMainProps> = (props: SectionHeaderMainProps) => {
  const iconStyle = props.iconStyle || 'light';

  return (
    <h1 className='section-header section-header-main'>
      <i className={'fa-' + iconStyle + ' fa-' + props.icon}></i>
      {props.children}
      {/* <i className={'fa-' + iconStyle + ' fa-' + props.icon}></i> */}
    </h1>
  )
}

export default SectionHeaderMain
