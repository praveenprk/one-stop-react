import { TODO } from "../constants/constants"

export const getTasksFromLS = () => {
let tasks = JSON.parse(localStorage.getItem(TODO))
return tasks;
}

export const deleteTask = (delId) => {
    let allTasks = getTasksFromLS();
    allTasks = allTasks.filter(task => task.id !== delId);
    localStorage.setItem(TODO, JSON.stringify(allTasks))
}

export const clearTodaysToDo = () => {  
    let allTasks = getTasksFromLS();
    let today = new Date().toLocaleDateString();
    allTasks = allTasks.filter(task => task.date !== today);
    // allTasks.length
    localStorage.setItem(TODO, JSON.stringify(allTasks));
  }