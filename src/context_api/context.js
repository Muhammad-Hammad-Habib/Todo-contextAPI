import { createContext, useContext } from "react";


const TodosContext = createContext({
    todos: [
    ],
    addTodo: () => { },
    removeTodo: () => { },
    toggleTodoStatus: () => { },
})

const TodoProvider = TodosContext.Provider
const useTodos = () => {
    return useContext(TodosContext)
}
export { TodosContext, TodoProvider, useTodos }
