import TodoGroup from '../components/TodoGroup'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    todoList: state.todoList
})

const TodoGroupContainer = connect(mapStateToProps)(TodoGroup)

export default TodoGroupContainer