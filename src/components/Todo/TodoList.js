import React, { useState } from 'react';
import '../../assets/styles/TodoList.css';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([...todos, text]);
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} removeTodo={() => removeTodo(index)} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
