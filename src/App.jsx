import NewTask from "./components/NewTask.jsx";
import NoTaskSelected from "./components/NoTaskSelected.jsx";
import TaskSidebar from "./components/TaskSidebar.jsx";

function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <TaskSidebar />
        <NoTaskSelected />
      </main>
    </>
  );
}

export default App;
