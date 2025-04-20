import React from 'react'

interface ReviewProps {
  children: React.ReactNode;
  name: string;
  userPic: string;
  rating: number;
}

const Review:React.FC<ReviewProps> = (props: ReviewProps) => {
  return (
    <div className='review'>
      <div className="s1">
        <img src={"/images/reviews/" + props.userPic} alt="Hodnotící uživatel" />
        <div className="rating">
          <i className='fa-solid fa-star'></i>
          {props.rating} / 5
        </div>
      </div>
      <div className="s2">
        <div className="name">{props.name}</div>
        <div className="text">{props.children}</div>
      </div>
    </div>
  )
}

export default Review
