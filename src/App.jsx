import { useState,useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  
  const [newvalue,setnewvalue] = useState ('')
const [list,setlist] = useState([])


function persistdata(newlist){
  localStorage.setItem('todos',JSON.stringify({list:newlist}))
}

function update(newinput){
const newlist = [...list,newinput]
setlist(newlist)
persistdata(newlist)
}


function deleteitem(index){
  const newlist = list.filter((todo,todoindex)=>{
    return todoindex !== index
  })
  setlist(newlist)
  persistdata(newlist)
}

function edit(index){
  const edititem = list[index]

setnewvalue(edititem)
deleteitem(index)

}

useEffect(()=>{
if (!localStorage){
  return
}

let localtodo =localStorage.getItem('todos')

if (!localtodo){
  return
}
localtodo = JSON.parse(localtodo).list
setlist(localtodo)

},[])
  return (
    <>
     
      <TodoInput newvalue = {newvalue} setnewvalue={setnewvalue} updatee = {update}/>
      <TodoList edit={edit} deleteitem = {deleteitem} usename = {list}/>
    
    </>
  )
}

export default App
