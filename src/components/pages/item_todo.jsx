import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../../redux/todoSlice";
import { useState } from "react";
function ItemTodo({ id, taskName, index }) {
  let dispatch = useDispatch();
  let [isEdit, setIsEdit] = useState(false);
  let [text, setText] = useState(taskName);
  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="right">{id}</TableCell>
        <TableCell align="right">
          {isEdit ? (
            <input
              onChange={(e) => {
                setText(e.target.value);
              }}
              defaultValue={taskName}
            ></input>
          ) : (
            taskName
          )}
        </TableCell>
        <TableCell align="right">
          <Button
            onClick={() => {
              if (isEdit) {
                dispatch(
                  editTodo({
                    index,
                    taskName: text,
                  })
                );
                setIsEdit(false);
              } else {
                setIsEdit(true);
              }
            }}
            variant="outlined"
            color="success"
          >
            {isEdit ? "Save" : <EditNoteIcon />}
          </Button>
          <Button
            onClick={() => {
              dispatch(deleteTodo(id));
            }}
            variant="outlined"
            color="error"
          >
            <DeleteOutlineIcon />
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
}

export default ItemTodo;
