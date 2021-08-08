import React from 'react';
import { useState } from 'react'

export const GuestList: React.FC = () => {
  
  const [name, setName] = useState<string>('');
  const [guests, setGuests] = useState<string[]>([])
  const onClick = () => {
    setGuests([...guests, name])
    setName('')
  }
  return (
    <div>
      <h2>This is the Guest List</h2>
      <div><ul>{guests.map((guest)=>{return<li>{guest}</li>})}</ul></div>
      
      <input value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={onClick}> Add Guest</button>
    </div>
  )
}


/**
 * A controlled input 
 * onChange Callback
 * value prop
 */