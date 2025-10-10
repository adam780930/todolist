import { useState } from "react";

import NewTask from "./components/NewTask.jsx";
import NoTaskSelected from "./components/NoTaskSelected.jsx";
import TaskSidebar from "./components/TaskSidebar.jsx";
import SelectedTask from "./components/SelectedTask.jsx";

function App() {
  const [tasksState, setTasksState] = useState({
    selectedTaskId: undefined,
    tasks: [],
  });

  function handleSelectTask(id) {
    setTasksState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: id,
      };
    });
  }

  function handleStartAddTask() {
    setTasksState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: null,
      };
    });
  }

  function handleCancelAddTask() {
    setTasksState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: undefined,
      };
    });
  }

  function handleAddTask(taskData) {
    setTasksState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        ...taskData,
        id: taskId,
      };

      return {
        ...prevState,
        selectedTaskId: undefined,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask() {
    setTasksState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: undefined,
        tasks: prevState.tasks.filter(
          (task) => task.id !== prevState.selectedTaskId
        ),
      };
    });
  }

  const selectedTask = tasksState.tasks.find(
    (task) => task.id === tasksState.selectedTaskId
  );

  let content = <SelectedTask task={selectedTask} onDelete={handleDeleteTask}/>;

  if (tasksState.selectedTaskId === null) {
    content = <NewTask onAdd={handleAddTask} onCancel={handleCancelAddTask} />;
  } else if (tasksState.selectedTaskId === undefined) {
    content = <NoTaskSelected onStartAddTask={handleStartAddTask} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <TaskSidebar
        onStartAddTask={handleStartAddTask}
        tasks={tasksState.tasks}
        onSelectTask={handleSelectTask}
      />
      {content}
    </main>
  );
}

export default App;
