import React, { useState } from 'react';
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const toogleTodo: ToogleDone = (selectedTodo: Todo) => {
    const updatedTodos: Todo[] = todos.map(todo => {
      if (todo == selectedTodo) {
        return {
          ...todo,
          done: !todo.done
        }
      }
      return todo
    })
    setTodos(updatedTodos)
  }
  
  const addTodo: AddNewTodo = (text: string) => {
    const todo = { text: text, done: false }
    setTodos([...todos, todo])
  }

  return (
    <div className='App'>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toogleTodo={toogleTodo} />
    </div>
  );
}

export default App;
