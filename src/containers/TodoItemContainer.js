import TodoItem from '../components/TodoItem'
import {connect} from 'react-redux'
import {deleteTodoItem} from '../actions'

const mapStateToProps = state => ({
    todoList: state.todoList
})

const mapDispatchToProps = dispatch => ({
    deleteTodoItem: (id) => dispatch(deleteTodoItem(id))
})

const TodoItemContainer = connect(mapStateToProps, mapDispatchToProps)(TodoItem)

export default TodoItemContainer