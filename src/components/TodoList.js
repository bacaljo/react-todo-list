import TodoGroup from './TodoGroup'

function TodoList() {
    return (
        <div className="todo-list">
            <TodoGroup todoList={[{id: 1234, text: 'This is my first task'}]} />
        </div>
    )
}

export default TodoList