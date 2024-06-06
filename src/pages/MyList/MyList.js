import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faEye, faEllipsisH, faRedo, faLifeRing, faBell, faSearch, faArrowUp, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/MyList.css';
import { v4 as uuidv4 } from 'uuid';

const MyList = () => {
    const location = useLocation();
    const listType = location.pathname.split('/').pop();

    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem(listType)) || [];
        setTasks(storedTasks);
        setSelectedTask(storedTasks.length > 0 ? storedTasks[storedTasks.length - 1] : null);
    }, [listType]);


    const saveTasksToLocalStorage = (tasks) => {
        localStorage.setItem(listType, JSON.stringify(tasks));
    };

    const addTask = (taskContent) => {
        if (taskContent.trim()) {
            const newTask = { id: uuidv4(), content: taskContent.trim() };
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            setSelectedTask(newTask);
            setNewTask('');
            saveTasksToLocalStorage(updatedTasks);
            window.dispatchEvent(new Event('storage'));
        }
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        if (selectedTask && selectedTask.id === taskId) {
            setSelectedTask(updatedTasks.length > 0 ? updatedTasks[updatedTasks.length - 1] : null);
        }
        saveTasksToLocalStorage(updatedTasks);
        window.dispatchEvent(new Event('storage'));
    };

    return (
        <div className="mylist">
            <div className="toolbar">
                <div className="toolbar-left">
                    <span>{listType.charAt(0).toUpperCase() + listType.slice(1)}</span>
                    <span className="divider"></span>
                    <span><FontAwesomeIcon icon={faShareAlt} /> Share</span>
                    <span className="divider"></span>
                    <span><FontAwesomeIcon icon={faEye} /> View</span>
                    <span className="divider"></span>
                    <span><FontAwesomeIcon icon={faEllipsisH} /></span>
                </div>
                <div className="toolbar-right">
                    <span><FontAwesomeIcon icon={faRedo} /></span>
                    <span><FontAwesomeIcon icon={faLifeRing} /></span>
                    <span><FontAwesomeIcon icon={faBell} /></span>
                    <span><FontAwesomeIcon icon={faSearch} /></span>
                </div>
            </div>
            <div className="mylist-content">
                <div className="addTask">
                    <div className="task-list">
                        {tasks.slice().reverse().map((task, index) => (  // Reverse the tasks array before mapping
                            <div
                                key={task.id}
                                className={`task-item ${selectedTask && selectedTask.id === task.id ? 'selected' : ''}`}
                                onClick={() => setSelectedTask(task)}
                            >
                                {task.content}
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    className="delete-icon"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deleteTask(task.id);
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="add-task-form">
                        <input
                            type="text"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            placeholder="Add a task"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    addTask(e.target.value);
                                }
                            }}
                        />
                        <button onClick={() => addTask(newTask)}>
                            <FontAwesomeIcon icon={faArrowUp} />
                        </button>
                    </div>
                </div>
                <div className="detailTask">
                    {selectedTask && <div>Details of {selectedTask.content}</div>}
                </div>
            </div>
        </div>
    );
};

export default MyList;
