import Link from 'next/link'

type Props = {
  todoItem: {
    id: number
    todo: string
    completed: boolean
  }
}

const TodoItem = ({ todoItem }: Props) => {
  return (
    <li>
      <Link href={`/todos/${todoItem.id}`} className="underline">{todoItem.todo} - ID: {todoItem.id}</Link>
    </li>
  )
}

export default TodoItem