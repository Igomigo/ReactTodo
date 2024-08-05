import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import App from "./components/testApp.jsx";
import './index.css'

const DATA = [
  { name: "Eat", id: "task-0", completed: true },
  { name: "Code", id: "task-1", completed: false },
  { name: "Sleep", id: "task-2", completed: false }
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>,
);
