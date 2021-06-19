import { TodoItem } from "./TodoItem"

interface Props {
  todos: Todo[]
}

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.text} todo={todo} />
      ))}
    </ul>
  )
}
