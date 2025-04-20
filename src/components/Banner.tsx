import React from 'react'

interface BannerProps {
  children: React.ReactNode;
  action?: React.ReactNode;
}

const Banner:React.FC<BannerProps> = (props: BannerProps) => {
  return (
    <div className='banner blur-effect'>
      <p>{props.children}</p>
      {props.action}
    </div>
  )
}

export default Banner
