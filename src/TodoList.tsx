import { TodoItem } from "./TodoItem"

interface Props {
  todos: Todo[]
  toogleTodo: ToogleDone
}

export const TodoList: React.FC<Props> = ({ todos, toogleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.text} todo={todo} toogleTodo={toogleTodo} />
      ))}
    </ul>
  )
}
