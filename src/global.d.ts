// não abusar desse tipo de workaround

interface Todo {
  text: string,
  done: boolean
}

type AddNewTodo = (text: string) => void
