import Link from "next/link"

type Props = {
  params: {
    id: string
  }
}

type Todo = {
  id: number
  todo: string
  completed: boolean
}

const getTodoById = async (id: string): Promise<Todo> => {
  const response = await fetch(`https://dummyjson.com/todos/${id}`)
  const data = await response.json()
  return data // the return is an object
}

const page = async ({ params }: Props) => {
  const { id } = params
  const todoItem = await getTodoById(id)

  return (
    <div className="container m-5">
      <h1>{todoItem.todo}</h1>
      <h3>Completed: {todoItem.completed ? 'Yes' : 'No'}</h3>
      <h3>ID: {todoItem.id}</h3>

      <Link href="/todos" className="inline-block mt-3 underline">Back</Link>
    </div>
  )
}

export default page