import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../../assets/styles/MainContent.css';
import MyDay from '../../pages/MyDay/MyDay';
import Next7Days from '../../pages/Next7Days/Next7Days';
import AllTasks from '../../pages/AllTasks/AllTasks';
import MyList from '../../pages/MyList/MyList';
import Home from '../../pages/Home/Home';





function MainContent() {
    return (
        <div className="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/myday" element={<MyDay />} />
                <Route path="/next7days" element={<Next7Days />} />
                <Route path="/alltasks" element={<AllTasks />} />
                <Route path="/mylist/*" element={<MyList />} />

            </Routes>
        </div>
    );
}

export default MainContent;