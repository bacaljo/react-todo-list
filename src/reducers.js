import {combineReducers} from 'redux'
import {ADD_TODO_ITEM, DELETE_TODO_ITEM, TOGGLE_TODO_ITEM_STATE} from './actions'

const todoList = (state = [], action) => {
    switch(action.type) {
        case DELETE_TODO_ITEM:
            return state.filter(todoItem => todoItem.id != action.payload)
        case ADD_TODO_ITEM:
            return [...state, action.payload]
        case TOGGLE_TODO_ITEM_STATE:
            return state.map(todoItem => (todoItem.id === action.payload)
                ? {...todoItem, done: !todoItem.done}
                : todoItem)
        default:
            return state
    }
}

export default combineReducers({todoList})