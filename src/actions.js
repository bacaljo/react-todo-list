export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM'
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM'
export const TOGGLE_TODO_ITEM_STATE = 'TOGGLE_TODO_ITEM_STATE'

export const deleteTodoItem = (id) => ({ type: DELETE_TODO_ITEM, payload: id })
export const addTodoItem = (todo) => ({ type: ADD_TODO_ITEM, payload: todo })
export const toggleTodoItemState = (id) => ({ type: TOGGLE_TODO_ITEM_STATE, payload: id })
