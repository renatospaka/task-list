
interface Props {
  todo: Todo
  toogleTodo: ToogleDone
}

export const TodoItem: React.FC<Props> = ({ todo, toogleTodo }) => {
  return (
    <li>
      <label style={{ textDecoration: todo.done ? 'line-through' : undefined }}>
        <input type='checkbox' checked={ todo.done } onClick={() => toogleTodo(todo)} />
        { ' ' }{todo.text}
      </label>
    </li>
  )
}
