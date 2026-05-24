import {useState} from 'react'


function TodoForm({text , setText , addTodo}) {

    

    return (

        <div className='todo__actions'> 

            <input className='todo__input' value={text} onChange={(e) => setText(e.target.value)} placeholder='New task title'/>

            <button className={`todo__button ${text.trim() ? 'todo__button--active' : ''}`} onClick={addTodo}>Add</button>

        </div>
        

    )


}



export default TodoForm