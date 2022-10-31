import { useState } from 'react'

function NewTodo({ onNewTodo }) {
    const [todo, setTodo] = useState('')
    // this can trigger the rendering of the webpage
    const handleClick = () => {
        if (!todo) return
        // const todo = 'like the video'
        // or you can do this
        // const newTodos = todos.concat([todo])
        onNewTodo(todo)
        setTodo('')
    }

    const handleChange = (e) => {
        const todo = e.target.value
        setTodo(todo)
        console.log({ todo })
    }

    return (
        <div>
            <input
                onChange={handleChange}
                type="text"
                placeholder="input your todo"
                value={todo}
            />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default NewTodo
