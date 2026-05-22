function TodoItem({todo , onDelete , onToggle}) {

    return (

        <li className="todo__item">


        <label className="todo__item-left">

            <input type="checkbox" className="todo__checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)}/>

            <span className={`todo__text ${todo.completed ? 'todo__text--completed' : ''}`}>{todo.title}</span>

        </label>

        <button className="todo__delete-btn" onClick={() => onDelete(todo.id)}>&times;</button>

        </li>
        

    )



}

export default TodoItem