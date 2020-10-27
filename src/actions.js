export const deleteTodoItem = (id) => {
    return {
        type: 'DELETE_TODO_ITEM', payload: id
    }
}