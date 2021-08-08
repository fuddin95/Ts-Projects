import React from 'react'
import { Child, ChildAsFC } from './Child'

const Parent = () => {
  return (
    <>
      <Child color="blue" onClick={() => console.log('This is a function')} >
        By explicitly adding children as prop interface we can pass children
      </Child>

      //This way of definig components can receive children as props

      <ChildAsFC color="red" onClickP={() => console.log('AsFC')}>
        this is the children string
      </ChildAsFC>
    </>
  )
}

export default Parent

/**
 * so in the parent componenet the CHild component HTML attributes are the props taken in as argument in the child tsx file
 * 
 */