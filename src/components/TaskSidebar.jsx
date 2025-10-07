import Button from "./Button.jsx";

export default function TaskSidebar({ onStartAddTask }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 front-bold uppercase md:text-xl text-stone-200">
        Your Todo Lists
      </h2>
      <div>
        <Button onClick={onStartAddTask}>
          + Add New Task
        </Button>
      </div>
      <ul></ul>
    </aside>
  );
}
