import React from 'react';
import { useLocation } from 'react-router-dom';

const MyList = () => {
    const location = useLocation();
    const listType = location.pathname.split('/').pop();

    return (
        <div>
            <h2>List Type: {listType}</h2>

        </div>
    );
};

export default MyList;
