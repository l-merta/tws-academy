import React from 'react';
import { Link } from 'react-router-dom';

interface ActionProps {
  children: React.ReactNode;
  link: string;
  icon?: string;
  iconStyle?: string;
}

const Action = (props: ActionProps) => {
  const iconStyle = props.iconStyle || 'regular';

  return (
    <Link to={props.link} className='action'>
      {props.icon && <i className={'fa-' + iconStyle + ' fa-' + props.icon}></i>}
      <span className="action-text">{props.children}</span>
    </Link>
  )
}

export default Action
