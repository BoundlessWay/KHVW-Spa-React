import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCalendarDay, faCalendarWeek, faTasks } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/Sidebar.css';

const Sidebar = () => {

    const [isMyListOpen, setIsMyListOpen] = useState(false);
    const [taskCounts, setTaskCounts] = useState({ personal: 0, work: 0, grocerylist: 0 });

    const toggleMyList = () => {
        setIsMyListOpen(!isMyListOpen);
    };

    const updateTaskCounts = () => {
        const personalTasks = JSON.parse(localStorage.getItem('personal')) || [];
        const workTasks = JSON.parse(localStorage.getItem('work')) || [];
        const groceryTasks = JSON.parse(localStorage.getItem('grocerylist')) || [];

        setTaskCounts({
            personal: personalTasks.length,
            work: workTasks.length,
            grocerylist: groceryTasks.length,
        });
    };

    useEffect(() => {

        updateTaskCounts();

        const handleStorageChange = () => {
            updateTaskCounts();
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                Todo App
            </div>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faHouse} />
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCalendarDay} />
                    <NavLink to="/myday">Today</NavLink><span className="task-count">5</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCalendarWeek} />
                    <NavLink to="/next7days">Next 7 Days</NavLink><span className="task-count">5</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faTasks} />
                    <NavLink to="/alltasks">All Tasks</NavLink><span className="task-count">5</span>
                </li>
                <li className="sublist">
                    <div onClick={toggleMyList} className="mylist-header">
                        My Lists
                    </div>
                    {isMyListOpen && (
                        <ul >
                            <li>
                                <NavLink to="/mylist/personal">Personal</NavLink>
                                <span className="task-count">{taskCounts.personal}</span>
                            </li>
                            <li>
                                <NavLink to="/mylist/work">Work</NavLink>
                                <span className="task-count">{taskCounts.work}</span>
                            </li>
                            <li>
                                <NavLink to="/mylist/grocerylist">Grocery List</NavLink>
                                <span className="task-count">{taskCounts.grocerylist}</span>
                            </li>
                        </ul>
                    )}
                </li>

                <li className="sublist">
                    <div className="mylist-header">
                        Tags
                    </div>
                    {/* {isMyListOpen && (
                        <ul >
                            <li><NavLink to="/mylist/personal">Personal</NavLink><span class="task-count">5</span></li>
                            <li><NavLink to="/mylist/work">Work</NavLink><span class="task-count">5</span></li>
                            <li><NavLink to="/mylist/grocerylist">Grocery List</NavLink><span class="task-count">5</span></li>
                        </ul>
                    )} */}
                </li>
            </ul>
            <div className="sidebar-footer">
                <p>&copy; Clone from Any.do</p>
            </div>
        </div>

    );
};

export default Sidebar;
