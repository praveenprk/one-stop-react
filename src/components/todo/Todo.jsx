import React, { useEffect, useState } from 'react'
import "../../App.css"
import ShowToDo from './ShowToDo';


const Todo = () => {

  const [task, setTask] = useState(''); // for form only
  const [allTasks, setAllTasks] = useState([]); // for list creation
  const [isTimeSpecific, setIsTimeSpecific] = useState(false);
  const [atTime, setAtTime] = useState('00:00');

  useEffect(() => {
    if(allTasks.length > 0)
      localStorage.setItem("todo", JSON.stringify(allTasks));
  }, [allTasks]);



  const handleAdd = (e) => {
    e.preventDefault();
    const updateTask = [
      ...allTasks,
      {
        taskName: task,
        date: new Date().toLocaleDateString(),
        type: "work",
        timeBound: isTimeSpecific ? true : false,
        atTime: isTimeSpecific ? atTime : null,
        completed: false
      }
    ];
    setAllTasks(updateTask);
  }

  return (
    <>
      <div className='d-flex flex-column gap-3'>
        <form onSubmit={(e) => handleAdd(e)} className='d-flex flex-column gap-3'>
        <h4>What needs to be done?</h4>
        <div className='d-flex flex-row'>
        <input
        className="form-control"
        type="text"
        value={task}
        onChange={(e) =>
        {
          e.preventDefault();
          setTask(e.target.value)}
        }
        />&nbsp;
        {/* For time specific todo */}
        <span
          onClick={() => setIsTimeSpecific(true)}
          style={{
            display: isTimeSpecific ? "none" : "block"
          }}
        >
          ⏰
        </span>
        {
          isTimeSpecific ?
          <div className='d-flex flex-row'>
            <input onChange={(e) => {
              e.preventDefault();
              setAtTime(e.target.value);
            }} type="time"/>
            <span onClick={() => setIsTimeSpecific(false)}>❌</span>
          </div>
          : ''
        }
        </div>
        <input className='btn btn-warning' type="submit" value="Add" />
        </form>
        <ShowToDo getAllTasks={allTasks} />
      </div>
    </>
  );
}

export default Todo