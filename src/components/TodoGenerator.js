function TodoGenerator(props) {
    return (
        <section className="todo-generator">
            <input className="todo-generator-text" type="text" placeholder="Input a new todo here..." />
            <button className="todo-generator-add">Add</button>
        </section>
    )
}

export default TodoGenerator