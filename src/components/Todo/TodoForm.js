import React, { useState } from 'react';
import '../../assets/styles/TodoForm.css';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) return;
        addTodo(value);
        setValue('');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Add new todo"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;
