import { useState } from "react";

import NewTask from "./components/NewTask.jsx";
import NoTaskSelected from "./components/NoTaskSelected.jsx";
import TaskSidebar from "./components/TaskSidebar.jsx";

function App() {
  const [tasksState, setTasksState] = useState({
    selectedTaskId: undefined,
    tasks: [],
  });

  function handleStartAddTask() {
    setTasksState((prevState) => {
      return {
        ...prevState,
        selectedTaskId: null,
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

  let content;

  if (tasksState.selectedTaskId === null) {
    content = <NewTask onAdd={handleAddTask} />;
  } else if (tasksState.selectedTaskId === undefined) {
    content = <NoTaskSelected onStartAddTask={handleStartAddTask} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <TaskSidebar
        onStartAddTask={handleStartAddTask}
        tasks={tasksState.tasks}
      />
      {content}
    </main>
  );
}

export default App;
