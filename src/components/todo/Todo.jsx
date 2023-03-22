import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import "../../App.css"
import { addAllTask } from '../../features/todo/todoSlicer';
import ShowToDo from './ShowToDo';


const Todo = () => {

  const [task, setTask] = useState(''); // for form only
  const [isTimeSpecific, setIsTimeSpecific] = useState(false);
  const [atTime, setAtTime] = useState('00:00');

  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    const updateTask = 
      {
        id: Math.floor(Math.random() * 100000),
        taskName: task,
        date: new Date().toLocaleDateString(),
        type: "work",
        timeBound: isTimeSpecific ? true : false,
        atTime: isTimeSpecific ? atTime : null,
        completed: false
      }
    dispatch(addAllTask(updateTask));
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
        <ShowToDo />
      </div>
    </>
  );
}

export default Todo