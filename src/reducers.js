import {combineReducers} from 'redux'

const todoList = (state = [], action) => {
    if (action.type === 'DELETE_TODO_ITEM') {
        const todoItem = state.find(todoItem => todoItem.id === action.payload)
        const index = state.indexOf(todoItem)

        state.splice(index, 1)
    }

    return null
}

export default combineReducers({todoList})