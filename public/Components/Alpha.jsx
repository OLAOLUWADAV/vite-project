import { useState } from "react"

const Alpha = () => {
    const [num, setnum] = useState(0)
    const [todo, settodo] = useState ('')

    const increase = ()=> {
        setnum (num+1)
    }

    const addTodo = ()=> {
        if(todo == '') {
            alert("I am empty ooo")
        } else {
            console.log(todo);
            settodo('')
        }
    }
  return (
    <>
        <h1>{num}</h1>
        <button onClick={increase}>increment</button>
        <input type="text" placeholder="Todo" onChange={(e)=> {settodo(e.target.value)}} value= {todo}/>
        <button onClick={addTodo}>Add</button>
    </>
  )
}
export default Alpha