import TodoGenerator from '../components/TodoGenerator'
import {connect} from 'react-redux'
import {addTodoItem} from '../actions'

const mapDispatchToProps = dispatch => ({
    addTodoItem: (todo) => dispatch(addTodoItem(todo))
})

const TodoGeneratorContainer = connect(null, mapDispatchToProps)(TodoGenerator)

export default TodoGeneratorContainer