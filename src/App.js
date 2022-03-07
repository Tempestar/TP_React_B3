import React, { useState } from 'react';
import data from './data.json';
import './App.css';
import Header from './Header';
import TaskList from '.TaskList';
 
function App() {
  const [ TaskList, setTaskList ] = useState(data);

 return (
   <div className="App">
    	<Header />
      <TaskList TaskList={TaskList}/>
   </div>
 );
}
 
export default App;
