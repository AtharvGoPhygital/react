import React from 'react'
import "./Card.css";

interface Props{}

const card = (props: Props) => {
  return (
    <div className='card'>
        <img src='./Assets/running_horse.webp' alt='Image'></img>
        <div>
            <h2>Apple</h2>
            <p>$11</p>
        </div>
        <p className="INFON">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quis?</p>
        
    </div>
  )
}

export default card