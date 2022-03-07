import React from 'react';
import Task from "./Task";

const TaskList = ({TaskList}) => {
    return (
        <div>
            {TaskList.map(task => {
                return (
                    <Task task={task} />
                )
            })}
        </div>
    );
 };
  
 export default TaskList;