import React, {Component} from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {done: false}
    }

    render() {
        return (
            <li className="todo-item">
                <button className="todo-item-text">{this.props.text}</button>
                <button className="todo-item-close">x</button>
            </li>
        )
    }
}

export default TodoItem