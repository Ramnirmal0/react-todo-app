import React from 'react';
import Add from './component/Add';
import Display from './component/Display';
import Navbar from './component/Navbar';
import { StateProvider } from './context/ToDoContext';


function App() {
  return (
    <div className="App">
          <StateProvider>
            <Navbar/>
            <Display/>
            <Add/>
         </StateProvider>
    </div>
  );
}

export default App;
