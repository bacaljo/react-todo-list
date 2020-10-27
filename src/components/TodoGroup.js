import TodoItemContainer from '../containers/TodoItemContainer'

function TodoGroup(props) {
    return (
        <ul className="todo-group">
            {props.todoList.map(todo => <TodoItemContainer key={todo.id} id={todo.id} text={todo.text} />)}
        </ul>
    )
}

export default TodoGroup