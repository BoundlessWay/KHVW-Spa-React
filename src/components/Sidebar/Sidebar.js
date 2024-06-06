import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCalendarDay, faCalendarWeek, faTasks, faListAlt, faTags } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/Sidebar.css';

const Sidebar = () => {

    const [isMyListOpen, setIsMyListOpen] = useState(false);

    const toggleMyList = () => {
        setIsMyListOpen(!isMyListOpen);
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                Todo App
            </div>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faHouse} />
                    <NavLink to="/">Home</NavLink><span class="task-count">5</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCalendarDay} />
                    <NavLink to="/myday">Today</NavLink><span class="task-count">5</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCalendarWeek} />
                    <NavLink to="/next7days">Next 7 Days</NavLink><span class="task-count">5</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faTasks} />
                    <NavLink to="/alltasks">All Tasks</NavLink><span class="task-count">5</span>
                </li>
                <li className="sublist">
                    <div onClick={toggleMyList} className="mylist-header">
                        My Lists
                    </div>
                    {isMyListOpen && (
                        <ul >
                            <li><NavLink to="/mylist/personal">Personal</NavLink><span class="task-count">5</span></li>
                            <li><NavLink to="/mylist/work">Work</NavLink><span class="task-count">5</span></li>
                            <li><NavLink to="/mylist/grocerylist">Grocery List</NavLink><span class="task-count">5</span></li>
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
                <p>&copy; 2024 Any.do Clone</p>
            </div>
        </div>

    );
};

export default Sidebar;
