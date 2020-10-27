import TodoGroup from './TodoGroup'
import TodoGenerator from './TodoGenerator'

function TodoList() {
    return (
        <div className="todo-list">
            <TodoGroup todoList={[{id: 1234, text: 'This is my first task'}]} />
            <TodoGenerator />
        </div>
    )
}

export default TodoList