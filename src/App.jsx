import { use, useState } from 'react'


import './App.css'

function App() {

  const [text, setText] = useState('')

  const [todos, setTodos] = useState([])

  function addTodo() {

    setTodos([...todos , text])

    setText('')

  }


  return (

    <div>

      <h1>ToDo List</h1>

      <input value={text} onChange={(e) => setText(e.target.value)} />


      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>



      <button onClick={addTodo}>Добавить</button>

    </div>

  )



}



export default App
