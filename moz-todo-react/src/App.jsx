import { useState } from "react";
import Todo from "./components/todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid";

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = {id: `todo-${nanoid()}`, name, completed: false};
    setTasks([...tasks, newTask]);
    //or
    //setTasks(tasks.concat(newTask));
  }

  function toggleTaskCompleted(id) {
    console.log(tasks[0]);
  }

  const taskNoun = (tasks.length === 1) ? "task" : "tasks";
  const headingText = `${tasks.length} ${taskNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form onAddTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {tasks?.map((task) =>
          <Todo name={task.name}
            id={task.id}
            completed={task.completed}
            key={task.id}
            toggleTaskCompleted={toggleTaskCompleted}
          />)}
      </ul>
    </div>
  );
}

export default App;
