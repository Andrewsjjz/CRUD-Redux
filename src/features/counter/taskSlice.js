import { createSlice } from '@reduxjs/toolkit'


const initialState = [
  {
    id: "1",
    title: "Tarea 1",
    description: "lorem lorem lorem",
    completed: false
  },
  {
    id: "2",
    title: "Tarea 2",
    description: "lorem lorem lorem",
    completed: false
  },
  {
    id: "3",
    title: "Tarea 3",
    description: "lorem lorem lorem",
    completed: false
  },
  {
    id: "4",
    title: "Tarea 4",
    description: "lorem lorem lorem",
    completed: false
  },
  {
    id: "5",
    title: "Tarea 5",
    description: "lorem lorem lorem",
    completed: false
  }
  
]

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
      addTask : (state, action) => {
        state.push(action.payload)
      },
      deleteTask : (state, action) => {
        const taskFind = state.find(task => task.id === action.payload)
        if (taskFind){
          state.splice(state.indexOf(taskFind), 1)
        }
      },
      updateTask : (state, action) => {
        const {id, title, description} = action.payload

        const findTask = state.find(task => task.id === id)
        if (findTask ) {
            findTask.title = title
            findTask.description = description
        }
      }
  }
})


export const {addTask, deleteTask, updateTask} = taskSlice.actions

export default taskSlice.reducer