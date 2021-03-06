import TodoGroupContainer from '../containers/TodoGroupContainer'
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer'

function TodoList() {
    return (
        <div className="todo-list">
            <h1>TodoList</h1>
            <TodoGroupContainer />
            <TodoGeneratorContainer />
        </div>
    )
}

export default TodoList