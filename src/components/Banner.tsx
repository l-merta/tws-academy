import React from 'react';

import Animator from './../managers/Animator';

interface BannerProps {
  children: React.ReactNode;
  action?: React.ReactNode;
}

const Banner:React.FC<BannerProps> = (props: BannerProps) => {
  return (
    <Animator anim='slide-right'>
      <div className='banner blur-effect'>
        <p>{props.children}</p>
        {props.action}
      </div>
    </Animator>
  )
}

export default Banner
