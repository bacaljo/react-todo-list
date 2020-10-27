import {combineReducers} from 'redux'
import {DELETE_TODO_ITEM} from './actions'

const todoList = (state = [], action) => {
    if (action.type === DELETE_TODO_ITEM) {
        const todoItem = state.find(todoItem => todoItem.id === action.payload)
        const index = state.indexOf(todoItem)

        state.splice(index, 1)
    }

    return state
}

export default combineReducers({todoList})