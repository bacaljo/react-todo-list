export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM'

export const deleteTodoItem = (id) => {
    return {
        type: DELETE_TODO_ITEM, payload: id
    }
}