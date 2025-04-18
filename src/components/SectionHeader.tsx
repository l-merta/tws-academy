import React from 'react'

interface SectionHeaderProps {
  children: React.ReactNode;
  icon?: string;
  iconStyle?: string;
}

const SectionHeader:React.FC<SectionHeaderProps> = (props: SectionHeaderProps) => {
  const iconStyle = props.iconStyle || 'light';

  return (
    <h2 className='section-header'>
      <i className={'fa-' + iconStyle + ' fa-' + props.icon}></i>
      {props.children}
      {/* <i className={'fa-' + iconStyle + ' fa-' + props.icon}></i> */}
    </h2>
  )
}

export default SectionHeader
