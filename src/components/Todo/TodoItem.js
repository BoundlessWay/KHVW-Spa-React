import React from 'react';
import '../../assets/styles/TodoItem.css';

const TodoItem = ({ todo, removeTodo }) => {
    return (
        <li className="todo-item">
            <span>{todo}</span>
            <button onClick={removeTodo}>Remove</button>
        </li>
    );
};

export default TodoItem;
