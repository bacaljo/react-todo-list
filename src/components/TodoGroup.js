import React, {Component} from 'react'
import TodoItem from './TodoItem'

class TodoGroup extends Component {
    constructor(props) {
        super(props)
        this.state = {todoList: [{id: 1234, text: 'This is my first task'}]}
    }

    render() {
        return (
            <ul className="todo-group">
                {this.state.todoList.map(todo => <TodoItem key={todo.id} id={todo.id} text={todo.text} />)}
            </ul>
        )
    }
}

export default TodoGroup