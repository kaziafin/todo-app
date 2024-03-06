'use client'

import React, { useState, useEffect } from 'react';
import { TodoObject } from '../model/Todo';
import Todo from './Todo'; // Import the Todo component

export default function AddTask() {
    const [todos, setTodos] = useState<TodoObject[]>([]);

    useEffect(() => {
       
    }, [todos]);

    const addTodo = (newTodo: TodoObject) => {
        setTodos([newTodo, ...todos]);
    };

    const markTodoDone = (id: string) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo)); 
      }
    return (
        <main className="flex min-h-screen flex-col items-center p-2">
            <Todo addTodo={addTodo} /> {/* Render the Todo component */}
            <ul className='mt-5'>
          { 
            todos.map(todo => (
              <li 
                key={todo.id} 
                className={`text-3xl ml-5 cursor-pointer ${ todo.done ? 'line-through' : 'no-underline'}`}
                onClick={() => markTodoDone(todo.id)}  
              >{todo.value}</li>
            ))
          }
        </ul>
        </main>
    );
}


