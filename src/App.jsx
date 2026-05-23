import { useEffect, useState } from 'react'

import TodoItem  from './components/TodoItem'

import './App.css'

function App() {

  const [text, setText] = useState('')

  const [todos, setTodos] = useState(() => {
    
    const savedTodos = localStorage.getItem('my_todos')
    
    if (savedTodos) {
      return JSON.parse(savedTodos)
    }
      return []
    

  })

    




  useEffect(() => {

    localStorage.setItem('my_todos' , JSON.stringify(todos));
    console.log('Список задач обновился! Я сохранил его в LocalStorage')

  } , [todos])

  function addTodo() {

    if (text.trim() === '') return;

    const newTodo = {

      id: Date.now(),

      title: text.trim(),

      completed: false, 

    }

    setTodos([...todos , newTodo])

    setText('')

  }


  function toggleTodo(targetId) {
    
    const updatedTodos = todos.map(todo => {

      if (todo.id === targetId) {

        return { ...todo , completed: !todo.completed}

      }

      return todo

    })

    setTodos(updatedTodos)
  

  }


  function deleteTodo(id) {

    const filtredTodos = todos.filter(todo => todo.id != id)

    setTodos(filtredTodos)

  }


  return (

    <div className='todo__app'>

      <div className="todo__container">

        <h1 className='todo__title'>To Do List</h1>

        <div className='todo__actions'> 

          <input className='todo__input' value={text} onChange={(e) => setText(e.target.value)} placeholder='New task title'/>

          <button className={`todo__button ${text.trim() ? 'todo__button--active' : ''}`} onClick={addTodo}>Add</button>

        </div>
        


        <ul className='todo__list'>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} onToggle = {toggleTodo}/>
          ))}
        </ul>



        
      </div>

    </div>

  )



}



export default App
