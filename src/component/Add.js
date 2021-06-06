import React, { useContext, useState } from 'react';
import { ToDoContext } from '../context/ToDoContext';

const Add = () => {
    const [task,setTask]=useContext(ToDoContext);
    const [value, setValue]=useState('');

    const addToList=()=>{
        const regrex = /^[a-zA-Z\d]+[\sa-zA-Z\d]*$/;
        if(value!=='' && regrex.test(value)){
            setTask([...task,value]);
            setValue('');
        }
    }

    return (
        <div className="input-container">
           <div> <input type="text" name="input-task" title="White_space in Beginning Not Allowed" value={value} onInput={(e)=>{setValue(e.target.value)}} placeholder="Enter Task " className="task" /></div>
            <div><button className="add" onClick={addToList}>Add Task</button></div>
        </div>
    );
};

export default Add;