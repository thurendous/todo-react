import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'

function App() {
    const [todos, setTodos] = useState([
        { name: 'Read a book', done: true },
        { name: 'Write a blog', done: false },
        { name: 'Reoly a comment', done: false },
        { name: 'do exercises', done: false },
    ])
    const handleNewTodo = (todo) => {
        if (!todo) return
        const NewTodos = [...todos, { name: todo, done: false }]
        setTodos(NewTodos)
    }

    const toggleDone = (index) => {
        const newTodos = todos.map((todo, i) => {
            if (i !== index) {
                return todo
            }
            return { name: todo.name, done: !todo.done }
        })
        setTodos(newTodos)
    }

    const totalRemaining = todos.filter((todo) => {
        return todo.done === false
    }).length

    return (
        <div className="App">
            <h1>MY TODO LIST</h1>
            <p>Toal Remaining: {totalRemaining}</p>
            <NewTodo onNewTodo={(todo) => handleNewTodo(todo)} />
            <Todos todos={todos} onToggleDone={toggleDone} />
        </div>
    )
}

export default App
