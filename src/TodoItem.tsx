
interface Props {
  todo: Todo
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <li>
      <label style={{ textDecoration: todo.done ? 'line-through' : undefined }}>
        <input type='checkbox' checked={ todo.done } />
        { ' ' }{todo.text}
      </label>
    </li>
  )
}
