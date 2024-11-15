import React, { useState } from 'react'

const TodoInput = (props) => {
  const {handleAddTodo, todoValue, setValueTodo} = props;
  
  return (
    <header>
      <input value={todoValue} type="text" placeholder='Enter task...' onChange={e=>
        setValueTodo(e.target.value)
      } />
      <button onClick={()=>
        {handleAddTodo(todoValue)
          setValueTodo('')
        }}>Add</button>
    </header>
  )
}

export default TodoInput