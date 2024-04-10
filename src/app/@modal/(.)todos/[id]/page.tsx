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
    <div className="w-full fixed top-0 left-0 h-screen bg-black bg-opacity-70 flex justify-center items-center">
      <div className="bg-white text-black p-3 w-1/3">
        <h2 className="mb-2">{todoItem.todo}</h2>
        <Link href="/todos" className="underline">Close</Link>
      </div>
    </div>
  )
}

export default page