import React from 'react'

interface ChildProps{
    color:string;
    onClick: () => void;
    //Children can be received here by passing children as a prop
    children:string
}

export const Child = ({color,onClick}:ChildProps) => {
    return (
        <div>
            Hi there!! the prop received from parent component {color}
            <button onClick = {onClick}>Click ME</button>
        </div>
    )
}

interface ChildPropAsFC{
    color: string;
    onClick: () => void;
}
//building a proper typyscirpt component
// NOTE: here the prop interface is passed in generics
//children can be accessed

export const ChildAsFC: React.FC<ChildPropAsFC> = ({color,onClick,children}) =>{
    return(
        <div>
            Proper child react functional component Color: {color}
            <button onClick={onClick}>Click ME</button>
            {children}
        </div>
    )
}