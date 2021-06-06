import React, { createContext, useState } from 'react';

export const ToDoContext= createContext();
export const StateProvider = (props) => {

    const [task , setTask]=useState([]);

    return (
        <>
        <ToDoContext.Provider value={[task,setTask]}>
            {props.children}
        </ToDoContext.Provider>    
        </>
    );
};
