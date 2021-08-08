import React from 'react'

export const EventComponent: React.FC = () => {
  const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    
  }
  return (
    <div>
      <h2>This is the event Componenet</h2>
      <p>see the console log for full event output</p>
      <input onChange = {onChange}></input>
    </div>
  )
}

/**
 * If not defining functions inline then you will manually need to define the input type 
 * by fisrt writing the input variable inline then hover the mouse and select the event type
 * from there
 */