import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive, faCalendarDay, faBell, faLock, faTag, faList } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/DetailTask.css';

const DetailTask = ({ taskId, listType }) => {
    const [task, setDetailTasks] = useState(null);
    const [note, setNote] = useState('');


    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem(listType)) || {};
        let detailTask = null;

        if (Array.isArray(storedTasks)) {
            detailTask = storedTasks.find(task => task.id === taskId);
        } else {
            console.error('Stored tasks is not an array', storedTasks);
        }
        if (detailTask) {
            setDetailTasks(detailTask);
            setNote(detailTask.note || '');
        } else {
            console.warn(`Task with id ${taskId} not found`);
            setDetailTasks(null);
        }
    }, [taskId, listType]);

    useEffect(() => {
        if (task) {
            const storedTasks = JSON.parse(localStorage.getItem(listType)) || [];
            const updatedTasks = storedTasks.map(t =>
                t.id === taskId ? { ...t, note: note } : t
            );
            localStorage.setItem(listType, JSON.stringify(updatedTasks));
        }
    }, [note, task, taskId, listType]);

    console.log(task)
    const handleNoteChange = (e) => {
        setNote(e.target.value);
    };

    return (
        <div className="detailTask">
            <div className="detailTask-header">
                <div className='listName'>
                    <span><FontAwesomeIcon icon={faLock} /></span>
                    <span>My lists &gt; {listType}</span>
                </div>
                <div className='tools'>
                    <span className='complete'>Mark as complete</span>
                    <span><FontAwesomeIcon icon={faCalendarDay} /></span>
                    <span><FontAwesomeIcon icon={faBoxArchive} /></span>
                </div>
            </div>
            <h2 className='detailTask-title'>{task ? task.content : ''}</h2>
            <div className='detailTask-btn'>
                <button className='btn btn-remind'>
                    <FontAwesomeIcon icon={faBell} />
                    Remind me
                </button>
                <button className='btn btn-type'>
                    <FontAwesomeIcon icon={faList} />
                    {task ? task.type : ''}
                </button>
                <button className='btn btn-tag'>
                    <FontAwesomeIcon icon={faTag} />
                    Tags
                </button>
            </div>
            <div className="detailTask-content">
                <div className="note-section">
                    <h3>Note</h3>
                    <textarea
                        value={note}
                        onChange={handleNoteChange}
                        placeholder="Add a note"
                    />
                </div>
                <div className="attachments-section">
                    <h3>Attachments</h3>
                    <input
                        data-title="hello"
                        type="file"
                        multiple

                    />

                </div>
            </div>
        </div>
    );
};

export default DetailTask;
