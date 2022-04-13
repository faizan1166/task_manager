import React, { useEffect, useState } from 'react';
import Tasks from '../modals/Tasks';

const TaskManager = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }
    const [taskList, setTaskList] = useState([]);


    const saveTask = (taskobj) => {
        let tempList = taskList
        tempList.push(taskobj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }

    useEffect(() => {
        let arr = localStorage.getItem("taskList")
        let obj = JSON.parse(arr)
        if (arr) {
            setTaskList(obj)
        }
    }, [])
    const deleteTask=(index)=>{
        let tempList=taskList
        tempList.splice(index,1)
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
    }

    const handleDelete=(index)=>{
        deleteTask(index)
        window.location.reload()
    }

    return (
        <>
            <div className='head' >
                <h3 className='heading'>Task Manager</h3>
                <button className='btn btn-primary' onClick={() => setModal(true)}> Add New Task </button>
            </div>
            <div className="container">
                {taskList && taskList.map((taskobj,deleteTask) =>
                    <div className="card">
                        <div className="title">
                            <h1>{taskobj.Name}</h1>
                        </div>
                        <div className="content">
                            <p className="social">{taskobj.Summary}</p>
                           
                        </div>
                        <div className='date'>
                        <time>{taskobj.Date}</time>
                        </div>
                        <div className='button'>
                        <button className='btn btn-primary mx-2'onClick={handleDelete} >Delete</button>
                    </div>
                    </div> 
                     )}
            </div>
            <Tasks toggle={toggle} modal={modal} save={saveTask} />

        </>
    );
};

export default TaskManager;