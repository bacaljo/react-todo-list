import TodoItem from '../components/TodoItem'
import {connect} from 'react-redux'
import {deleteTodoItem, toggleTodoItemState} from '../actions'

const mapDispatchToProps = dispatch => ({
    deleteTodoItem: (id) => dispatch(deleteTodoItem(id)),
    toggleTodoItemState: (id) => dispatch(toggleTodoItemState(id))
})

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem)

export default TodoItemContainer