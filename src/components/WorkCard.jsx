import React from 'react'
import './WorkCard.css'
import { NavLink } from 'react-router-dom'

function WorkCard({imgsrc,title,text,view,source}) {
  return (
    <div className='project-card'>
    <img src={imgsrc} alt='pro1'/>
    <h2 className='project-title'>{title}</h2>
    <div className='pro-details'>
        <p>{text}</p>
        <div className='pro-btns'>
            <NavLink to={view} className="btn">view</NavLink>
            <NavLink to={source}className="btn">Source</NavLink>
        </div>
    </div>
</div>
  )
}

export default WorkCard
