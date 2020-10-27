import React, {Component} from 'react'
import TodoItemContainer from '../containers/TodoItemContainer'

class TodoGroup extends Component {
    render() {
        return (
            <ul className="todo-group">
                {this.props.todoList.map(todo => <TodoItemContainer key={todo.id} id={todo.id} text={todo.text} />)}
            </ul>
        )
    }
}

export default TodoGroup