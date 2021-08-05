import React from 'react'
import { Child, ChildAsFC } from './Child'

const Parent = () => {
  return (
    <>
      <Child color="blue" onClick={() => console.log('This is a function')} >
        By explicitly adding children as prop interface we can pass children
      </Child>

      //This way of definig components can receive children as props

      <ChildAsFC color="red" onClick={() => console.log('AsFC')}>
        this is the children string
      </ChildAsFC>
    </>
  )
}

export default Parent
