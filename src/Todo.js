function Todo({ todo, onClick, i }) {
    console.log('@', i)
    console.log(todo)
    return (
        <li key={i}>
            <input
                type="checkbox"
                onClick={onClick}
                checked={todo.done ? 'checked' : ''}
                readOnly
            />
            {todo.name}
        </li>
    )
}

export default Todo
