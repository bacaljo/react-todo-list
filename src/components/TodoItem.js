import React, {Component} from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props)
    }

    onClick = () => {
        const id = this.props.id
        
        this.props.toggleTodoItemState(id)
    }
    
    onDelete = () => {
        const id = this.props.id

        this.props.deleteTodoItem(id)
    }

    render() {
        let todoItemTextClassName = 'todo-item-text'
        todoItemTextClassName += (this.props.done)
            ? ' todo-item-text-done'
            : ''

        return (
            <li className="todo-item">
                <button className={todoItemTextClassName} onClick={this.onClick}>{this.props.text}</button>
                <button className="todo-item-close" onClick={this.onDelete}>x</button>
            </li>
        )
    }
}

export default TodoItem