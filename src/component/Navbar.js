import React, { useContext } from 'react';
import { ToDoContext } from '../context/ToDoContext';

const Navbar = () => {
    const [task,setTask]=useContext(ToDoContext);
    return (
        <div className="Nav">
            <h2>To-Do App</h2>
            <h4 className='status'>Total Task : {task.length}</h4>
            
        </div>
    );
};

export default Navbar;