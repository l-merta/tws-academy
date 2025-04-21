import React from 'react';

import Animator from '../managers/Animator';

interface SectionHeaderProps {
  children: React.ReactNode;
  icon?: string;
  iconStyle?: string;
}

const SectionHeader:React.FC<SectionHeaderProps> = (props: SectionHeaderProps) => {
  const iconStyle = props.iconStyle || 'light';

  return (
    <Animator anim='slide-up'>
      <h2 className='section-header'>
        <i className={'fa-' + iconStyle + ' fa-' + props.icon}></i>
        {props.children}
        {/* <i className={'fa-' + iconStyle + ' fa-' + props.icon}></i> */}
      </h2>
    </Animator>
  )
}

export default SectionHeader
