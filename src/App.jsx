import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskContextProvider from "./contexts/TaskContexts";

export default function App() {
  return (
    <TaskContextProvider>
      <div className="m-4 w-1/2 min-w-72 mx-auto flex flex-col gap-4">
        <h1 className="text-center text-4xl">Prague itinerary</h1>

        <AddTask />

        <h2 className="text-3xl border-b-2 mt-2">Tasks : </h2>

        <TaskList />
      </div>
    </TaskContextProvider>
  );
}
