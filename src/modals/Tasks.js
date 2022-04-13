import React,{useState} from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';


const Tasks = ({modal,toggle , save}) => {
    const [taskName,setTaskName]=useState('');
    const[summary,setSummary]=useState('');
    const [date,setDate]= useState('');   
    
    
    const handleChange=(e)=>{
        const{name, value} = e.target
         if(name === "taskName"){
            setTaskName(value)
         }else if(name==="summary") {
            setSummary(value)
         } else{
            setDate(value)
         }

    }

    

    const saveHandle=()=>{
        let taskobj={}
        taskobj["Name"]=taskName
        taskobj["Summary"]=summary
        taskobj["Date"]=date
        save(taskobj)
    }


    return (
        <div>
             <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}> Create New Task</ModalHeader>
                <ModalBody>
                <form>
                    <div className="mb-3">
                        <label for="task_name" className="form-label">Task Name</label>
                        <input type="text" className="form-control" value={taskName} name="taskName" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="summary">Summary</label>
                        <textarea className="form-control"  rows="3" value={summary} name="summary" onChange={handleChange} ></textarea>
                    </div>
                    <div className="mb-3">
                    <label for="date">Date</label>
                        <input type="date" className="form-control" value={date} name="date" onChange={handleChange}  />
                    </div>
                 </form>
                 
                </ModalBody>
                 <ModalFooter>
                    <button className='btn btn-primary' onClick={saveHandle}>Save</button>
                    <button className='btn btn-secondary' onClick={toggle}>Cancel</button>
                 </ModalFooter>
             </Modal>
        </div>
    );
};

export default Tasks;