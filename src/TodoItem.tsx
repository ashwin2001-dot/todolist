
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';


interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean };
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        style={{ marginRight: '8px' }}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
      <IconButton aria-label="delete" onClick={() => deleteTodo(todo.id)} style={{ marginLeft: 'auto' }}>
        
      </IconButton>
    </div>
  );
};

export default TodoItem;
