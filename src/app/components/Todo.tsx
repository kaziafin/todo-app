import React, { useState } from 'react';
import { TodoObject } from '../model/Todo';
import { v4 as uuid } from 'uuid'; // Import uuid function

interface TodoProps {
    addTodo: (todo: TodoObject) => void;
}

const Todo: React.FC<TodoProps> = ({ addTodo }) => {
    const [todo, setTodo] = useState<string>('');

    const handleAddTodo = () => {
        if (todo.trim() !== '') {
            addTodo({
                id: uuid(), // Assuming uuid function is imported
                value: todo,
                done: false
            });
            setTodo(''); // Clear the todo input after adding todo
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder='Enter a new todo'
                className='p-4 rounded mr-5 text-slate-900'
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
            />
            <button
                className='bg-slate-400 border-2 p-4 rounded'
                onClick={handleAddTodo} // Pass a function directly to onClick
            >Add Todo</button>
        </div>
    );
};

export default Todo;
