import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, updateTask } from "../features/counter/taskSlice"
import { v4 as uuid } from "uuid"
import { useNavigate, useParams } from "react-router-dom"

const Formulario = () => {

const [task, setTask] = useState ({
    title : "",
    description : ""
})

const dispatch = useDispatch()
const navigate = useNavigate()
const params = useParams()
const tasks = useSelector(state => state.tasks)

const handleChange = (e) => {
    setTask({
        ...task,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault()

    if (params.id) {

      dispatch(updateTask(task))

    } else {

      dispatch(addTask({
        ...task,
        id: uuid(),
      }))

    }
    navigate('/')
}

useEffect(() => {
  if (params.id) {
    setTask(tasks.find(task => task.id ===params.id))

  }
}, [])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
        name="title"
        type="text" 
        placeholder='Titulo de tarea' 
        onChange={handleChange}
        value={task.title}
        />
        <textarea 
        name="description" 
        placeholder='Descripcion de tarea'
        onChange={handleChange}
        value={task.description}
        ></textarea>
        <button className='bg-blue-700 text-white font-bold'>Guardar</button>
      </form>
    </>
  )
}

export default Formulario
