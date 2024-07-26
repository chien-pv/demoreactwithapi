import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import { useId } from "react";

function getUID() {
  // Get the timestamp and convert
  // it into alphanumeric input
  return Date.now().toString(36);
}

function FormAdd() {
  let [taskName, setTaskName] = useState("");

  let dispatch = useDispatch();
  console.log(taskName);
  return (
    <div className="form-add">
      <TextField
        value={taskName}
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
        size="small"
        id="outlined-controlled"
        label="Task Name"
      />
      <Button
        onClick={() => {
          let todoID = getUID();
          let todo = { id: todoID, taskName };
          dispatch(addTodo(todo));
          setTaskName("");
        }}
        variant="outlined"
      >
        Add Todo
      </Button>
    </div>
  );
}

export default FormAdd;
