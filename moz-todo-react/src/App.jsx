import { useState } from "react";
import Todo from "./components/todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid";

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");

  // Determine the name and behaviour of each filter
  const filter_map = {
    "All": () => true,
    "Active": (task) => !task.completed,
    "Completed": (task) => task.completed
  }

  // Extract the keys from the filter_map object
  // Iterate through the filter names array and set the names of each 
  // filter button based on the filter map name
  const filter_names = Object.keys(filter_map);
  const filter_list = filter_names.map((name) => 
    <FilterButton 
       key={name}
       name={name}
       isPressed={name === filter}
       setFilter={setFilter}
    />
  );

  function addTask(name) {
    // Creates a new task
    const newTask = {id: `todo-${nanoid()}`, name, completed: false};
    setTasks([...tasks, newTask]);
    //or
    //setTasks(tasks.concat(newTask));
  }

  function deleteTask(id) {
    // Deletes a task from the task list
    console.log(`Deleting task with id ${id}`);
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
    console.log(`Task with id ${id} deleted successfully`);
  }

  const editTask = (id, newName) => {
    // Edit the name of a todo
    const editedTasks = tasks?.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // If this task has a new name
        return {...task, name: newName};
      }
      // If no changes, return the original task
      return task;
    });
    // update the tasks list
    setTasks(editedTasks);
  }

  function toggleTaskCompleted(id) {
    //console.log(`Updating the state of the task with the id ${id}`);
    const updatedTasks = tasks?.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      //console.log(`Task with id: ${id} has been toggled`);
      return task;
    });
    setTasks(updatedTasks);
    //console.log("New tasklist created");
  }

  const taskNoun = (tasks.length === 1) ? "task" : "tasks";
  const headingText = `${tasks.length} ${taskNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form onAddTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filter_list}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {tasks?.filter(filter_map[filter]).map((task) =>
          <Todo 
            name={task.name}
            id={task.id}
            completed={task.completed}
            key={task.id}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
          />)}
      </ul>
    </div>
  );
}

export default App;
