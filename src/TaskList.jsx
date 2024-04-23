import { useState } from "react";
import Task from "./Task";
import Alert from "@mui/material/Alert";
import { v4 as uuidv4 } from "uuid";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';

export default function TaskList() {
  const [tasks, setTasks] = useState([{ task: "Sample-task", id: uuidv4() , MkSDn : false}]);
  const [value, setValue] = useState("");
  const [isTrue, setIsTrue] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (value === "") {
      setIsTrue(true);
    } else {
      setTasks((prevTasks) => [...prevTasks, { task: value, id: uuidv4() }]);
      setValue("");
      setIsTrue(false);
    }
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  function MarkAsDoneAll() {
    setTasks ((prevTasks) => prevTasks.map((work) => { return {...work , MkSDn : true}}))
  }
  
  function MarkAsUndoneAll() {
    setTasks ((prevTasks) => prevTasks.map((work) => { return {...work , MkSDn : false}}))
  }

  function MrkSDan(id) {
    setTasks((prevTasks) => prevTasks.map((todo) => {
        if (todo.id === id) {
          return { ...todo, MkSDn: true };
        } else {
          return todo;
        }
      }));
  }

  function delTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <Task actSubmit={handleSubmit} value={value} actChange={handleChange} />
      {isTrue ? <Alert severity="warning">Please Enter a Task</Alert> : ""}
      <div>
        <ul>
          {tasks.map((work) => (
            <div key={work.id} style={{display : 'flex' , margin : '1rem'}}>
                <Button variant="contained" startIcon={<DeleteIcon />} size="small" color="error" onClick={() => delTask(work.id)}>Delete</Button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <li style={{textDecoration : work.MkSDn ? 'line-through' : 'none'}}>
                <span>{work.task}</span>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <Button variant="contained" size="small" color="success" startIcon={<DoneIcon />} onClick={() => MrkSDan(work.id)} >Mark as Done</Button>
            </div>
          ))}
        </ul>
        <Button variant="outlined" color="secondary" size="large" startIcon={<DoneAllIcon />} onClick={MarkAsDoneAll}></Button>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Button variant="outlined" color="secondary" size="large" startIcon={<RemoveDoneIcon />} onClick={MarkAsUndoneAll}  ></Button>
      </div>
    </div>
  );
}
