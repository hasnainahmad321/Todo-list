import { useState } from "react"
import "./app.css"
import TodoInput from "./component/TodoInput"
import TodoList from "./component/TodoList"
const App = () => {
  const [listTodo,setListTodo]=useState([])
  let setList=(inputText)=>{
    if(inputText!=='')
    setListTodo([...listTodo,inputText])

  }
  const deleteListItem=(key)=>{
    let newListTodo=([...listTodo])
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
        <TodoInput setList={setList}/>
        <h1 className="app-heading"></h1>
        <hr />
        {listTodo.map((listItem,i)=>{
          return (
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
      
    </div>
  )
}

export default App
