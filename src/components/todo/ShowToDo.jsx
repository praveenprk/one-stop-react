import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeTask, removeTodaysTodos, tickOffTodoList } from '../../features/todo/todoSlicer';
// import { ClearToDoList } from './Buttons/ClearToDoList'

const ShowToDo = () => {

  let allTasks;
  
  // getting tasks from redux store
  allTasks = useSelector(state => state.todo)
 
  const dispatch = useDispatch();

  return (
    <div className='d-flex flex-column gap-3'>
      <h5 style={{
        textAlign: "center"
      }}>To-Do List</h5>
      <ul>
      {
          allTasks?.map((list, i) => {
          return (
          <div key={i}>
          <li style={{
              textDecoration: list?.completed === true ? "line-through" : "none"
            }}>
            <input
            className='form-check-input'
            type='checkbox'
            onClick={() => {
              dispatch(tickOffTodoList(list.id));
            }}
            />&nbsp;
            {list?.taskName}
          </li>
          <button className='btn btn-danger' onClick={
            (e) => {
              e.preventDefault();
              dispatch(removeTask(list.id))
            }
          }>Delete</button>
          </div>
          )
        })
      }
      </ul>
      {
        // Show btn only when tasks are there in the list
      allTasks?.length ? <button
        className='btn btn-danger'
        onClick={
          (e) => {
            e.preventDefault();
            
            dispatch(removeTodaysTodos());
          }
      }
      >Clear All<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
      <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg></button> : ''
    }
    </div>
  )
}

export default ShowToDo
