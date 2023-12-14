import "./style.css"

function TodoList({ list, remove }) {
    return (
        <div>
            <ul className="todo-list">
                {list.map((entry, index) => (
                    <div className="todo">
                        <li key={index}> {entry} </li>

                        <button
                            className="delete-button"
                            onClick={() => {remove(entry)}}
                        >
                            delete
                        </button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default TodoList