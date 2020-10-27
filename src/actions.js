export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM'
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM'

export const deleteTodoItem = (id) => ({type: DELETE_TODO_ITEM, payload: id})

export const addTodoItem = (todo) => 
    ({type: ADD_TODO_ITEM, payload: todo})
