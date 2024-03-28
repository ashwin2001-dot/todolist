
import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { write } from 'fs';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<{ id: number; text: string; completed: boolean }[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
      setTodos([...todos, { id: newId, text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };
 
  return (
    <div>
      <TextField
        type="text"
        label="Add Todo"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        style={{ marginBottom: '8px' }}
      />
      <Button variant="contained" onClick={addTodo}>
        Add Todo
      </Button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <TodoItem todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
