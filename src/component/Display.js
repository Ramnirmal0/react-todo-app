import React, { useContext } from 'react';
import { ToDoContext } from '../context/ToDoContext';

const Display = () => {
    const [task,setTask]=useContext(ToDoContext);

    const deleteItem=(index)=>{
        const arr = [...task];
        arr.splice(index,1);
        setTask(arr);
    }

    return (
        <div className="display-container">
           
            {
            task.map((item,index)=>{return <h3> <button className="delete" onClick={()=>{deleteItem(index)}}>x</button> {item} <input type="checkbox" className='check'/></h3>})
            }
        </div>
    );
};

export default Display;