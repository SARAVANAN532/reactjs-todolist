import React, { Children } from 'react'

export default function TodoCard(props) {
  
  const {children,deleteitem,index,edit} = props
  return (

   

    <li className='todoItem'>
      {children}
    <div className='actionsContainer'>
      <button onClick={()=>{edit(index)}}>
    <i className="fa-solid fa-pen-to-square"></i>
    </button>
    <button onClick={()=>{deleteitem(index)}}>
    <i className="fa-solid fa-trash"></i>
    </button>
    </div>
    </li>
  )
}
