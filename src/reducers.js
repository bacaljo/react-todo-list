import {combineReducers} from 'redux'
import {ADD_TODO_ITEM, DELETE_TODO_ITEM, TOGGLE_TODO_ITEM_STATE} from './actions'

const todoList = (state = [], action) => {
    if (action.type === DELETE_TODO_ITEM) {
        const todoItem = state.find(todoItem => todoItem.id === action.payload)
        const index = state.indexOf(todoItem)

        let newState = state.slice()
        newState.splice(index, 1)
        
        return newState
    } else if (action.type === ADD_TODO_ITEM) {
        return [...state, action.payload]
    } else if (action.type === TOGGLE_TODO_ITEM_STATE) {
        return state.map(todoItem => (todoItem.id === action.payload)
            ? {...todoItem, done: !todoItem.done}
            : todoItem)
    }

    return state
}

export default combineReducers({todoList})