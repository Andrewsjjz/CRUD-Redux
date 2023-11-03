import { useSelector, useDispatch } from "react-redux"
import { deleteTask } from "../features/counter/taskSlice"
import { Link } from "react-router-dom"

const ListaTareas = () => {

    const taskState = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
      dispatch(deleteTask(id))
    }

  return (
    <>

    <header>
      <h1>List of Task {taskState.length}</h1>
      <Link to="/create-task">
       Create Task
       </Link>
    </header>

    <header>
      <h1>List of Task {taskState.length}</h1>
      <Link to="/create-task">
       Create Task
       </Link>
    </header>

    <div>
      {taskState.map (task => (
        <div
        key={task.id}
        >
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <p>{task.completed}</p>

        <button 
        className="bg-red-500"
        onClick={() => handleDelete(task.id)}
        >Eliminar
        </button>

        <Link 
        to={`/update-task/${task.id}`}
        className="bg-blue-500"
        >Actualizar
        </Link>

        </div>
      ))}
    </div>
    </>
  )
}

export default ListaTareas
