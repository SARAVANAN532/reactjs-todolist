import React, { useState } from 'react'

export default function TodoInput(props) {

  const{newvalue,setnewvalue,updatee} = props


  return (
    <header>
        <input value={newvalue} onChange={(e) =>{setnewvalue(e.target.value)}} placeholder='Enter' />
        <button onClick={() => {
          updatee(newvalue)
          setnewvalue('')
        }}>Add</button>
    </header>
  )
}
