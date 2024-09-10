import { useState } from "react"


const TodoInput = (props) => {
  const [inputText,setInputText]=useState('')
  const handleEnterPress=(e)=>{
    if(e.keycode===13){
      props.setList(inputText)
      setInputText("")
    }
  }
  return (
    <div className="input-container">
        <input type="text" className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={e=>{
          setInputText(e.target.value)
        }} 
        onKeyDown={handleEnterPress} />
        <button className="add-btn" onClick={()=>{
          props.setList(inputText)
          setInputText("")
        }}>+</button>
        <div>{inputText}</div>
      
    </div>
  )
}

export default TodoInput
