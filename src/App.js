import "./style.css";
import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if (todo !== '') {
      setTodos([...todos, todo])
      setTodo('')
    }
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text
    })
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <img className="todo-header" src={"/images/todo-header.PNG"} alt="todo header" />
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList list={todos} remove={deleteTodo} />
    </div>
  )
}

export default App;