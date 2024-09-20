import React from 'react';
import "./style.css"

export const Today = (props) => {
    return (
      <>
        <span className="day">{props.day}.</span>
        <span className="month">{props.month}.</span>
        <span className="year">{props.year}</span>
      </>
    ) 
  }

  export default Today