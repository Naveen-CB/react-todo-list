import React, { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'


const App = () => {

  

  const [todoItems, setTodo] = useState([]);
  const [todoValue, setValueTodo] = useState('');

  useEffect(()=>{
    if(!localStorage){
      return;
    }

    let localTodo = localStorage.getItem('todo');
    if(!localTodo){
      return;
    }
    localTodo = JSON.parse(localTodo).todo;
    setTodo(localTodo);
  },[])

  const persistValue = (newTodoList) =>{
    localStorage.setItem('todo', JSON.stringify({todo: newTodoList}))
  }

  const handleAddTodo = (newTodo) =>{
    const newTodoItems = [...todoItems, newTodo];
    persistValue(newTodoItems);
    setTodo(newTodoItems);
  }

  const handleDeleteTodo = (index) =>{
    const newTodoItems = todoItems.filter((todo, todoIndex) =>{
      return todoIndex !== index;
    })
    persistValue(newTodoItems);
    setTodo(newTodoItems);
  }

  const handleEditTodo = (index) =>{
    const todo = todoItems[index];
    setValueTodo(todo);
    handleDeleteTodo(index);
  }
  return (
   <main>
    <TodoInput todoValue ={todoValue} setValueTodo={setValueTodo} handleAddTodo = {handleAddTodo} />
    <TodoList todoItems = {todoItems} handleDeleteTodo = {handleDeleteTodo}
    handleEditTodo = {handleEditTodo}
    />
   </main>
  )
}

export default App
