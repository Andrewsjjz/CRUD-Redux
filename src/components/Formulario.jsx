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
}, [params.id, tasks])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="m-10 flex items-center gap-10">
        <input 
        className="border-2 border-black"
        name="title"
        type="text" 
        placeholder='Titulo de tarea' 
        onChange={handleChange}
        value={task.title}
        />
        <textarea 
        className="border-2 border-black"
        name="description" 
        placeholder='Descripcion de tarea'
        onChange={handleChange}
        value={task.description}
        ></textarea>
        <button className='bg-blue-700 text-white font-bold'>Guardar</button>
        </div>
      </form>
    </>
  )
}

export default Formulario
