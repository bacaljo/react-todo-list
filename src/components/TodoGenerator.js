import React, {Component} from 'react'
import { v4 as uuid } from 'uuid'

class TodoGenerator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    onChange = (event) => {
        this.setState(() => ({text: event.target.value}))
    }

    onClick = (event) => {
        event.preventDefault()

        const id = uuid()
        const text = this.state.text
        const done = false
        const todo = {id, text, done}

        this.props.addTodoItem(todo)
        this.setState(() => ({text: ''}))
    }

    render() {
        return (
            <form className="todo-generator">
                <input className="todo-generator-text" type="text" placeholder="Input a new todo here..." 
                    value={this.state.text} onChange={this.onChange} />
                <input className="todo-generator-add" type="submit" value="Add" onClick={this.onClick} />
            </form>
        )
    }
}

export default TodoGenerator