
import { useState } from 'react'
import React from 'react'
interface User {
  name: string;
  age: number;
}
interface Users {
  user: User[];
}

export const UserSearch: React.FC<Users> = ({ user }) => {

  const [serachWord, setSearchWord] = useState<string>("")
  const [matchedUser, setMatchedUser] = useState<{ name: string, age: number } | undefined>()
  const handleClick = () => {
    const matchedUser1 = user.find((singleUser) => {
      return singleUser.name === serachWord;
    })
    setMatchedUser(matchedUser1)
  }

  return (
    <div>
      <h1>Search User</h1>
      <input type="text" placeholder="search" value={serachWord} onChange={(e) => { setSearchWord(e.target.value) }}></input>
      <button onClick={handleClick} >Search</button>
      <div>NAME: {matchedUser && matchedUser.name}</div>
      <div>AGE: {matchedUser && matchedUser.age}</div>
    </div>
  )
}


