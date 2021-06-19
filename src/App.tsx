import React, { useState } from 'react';
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  
  const addTodo: AddNewTodo = (text: string) => {
    const todo = { text: text, done: false }
    setTodos([...todos, todo])
  }

  return (
    <div className='App'>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
