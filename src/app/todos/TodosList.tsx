import TodoItem from "./TodoItem"

type Todo = {
  id: number
  todo: string
  completed: boolean
}

const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch('https://dummyjson.com/todos')
  const data = await response.json()
  return data.todos // this is an array
}

const TodosList = async () => {
  const todos = await getTodos()

  return (
    <ul>
      {todos.map((todoItem) => (
        <TodoItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </ul>
  )
}

export default TodosList