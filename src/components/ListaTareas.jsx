import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/counter/taskSlice";
import { Link } from "react-router-dom";

const ListaTareas = () => {
  const taskState = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <>
      <header className="flex">
        <h1>List of Task {taskState.length}</h1>
        <button className="bg-blue-300">
          <Link to="/create-task">Create Task</Link>
        </button>
      </header>

      <div className="grid grid-cols-3 gap-4">
        {taskState.map((task) => (
          <div
            key={task.id}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
          >
            <div className="mb-6">
              <div className="font-bold text-xl mb-2">{task.title}</div>
              <p className="text-gray-700 text-base">{task.description}</p>
              <div className="flex items-center justify-between">
                <Link to={`/update-task/${task.id}`} className="bg-blue-500">
                  Actualizar
                </Link>
                <button
                  className="bg-red-500"
                  onClick={() => handleDelete(task.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListaTareas;
