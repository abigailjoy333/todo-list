import "./style.css"

function TodoInput({ todo, setTodo, addTodo }) {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          addTodo();
        }
    }

    return (
        <div className="input-wrapper">
            <input 
                type="text"
                name="todo"
                value={todo}
                placeholder="add a new quest"
                onChange={(e) => {setTodo(e.target.value)}}
                onKeyDown={handleKeyDown}
            />
        <button
            className="add-button"
            onClick={addTodo}
        >
            add
        </button>
      </div>
    )
}

export default TodoInput