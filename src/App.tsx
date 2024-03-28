// src/App.tsx
import React from 'react';
import './App.css';
import TodoList from './TodoList';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';




const App: React.FC = () => {
  
 
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Todo List
      </Typography>
     
      <TodoList />
     
    </Container>
   
  );

  }


export default App;


