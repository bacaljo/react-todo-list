import TodoGroupContainer from '../containers/TodoGroupContainer'
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer'

function TodoList() {
    return (
        <div className="todo-list">
            <TodoGroupContainer />
            <TodoGeneratorContainer />
        </div>
    )
}

export default TodoList