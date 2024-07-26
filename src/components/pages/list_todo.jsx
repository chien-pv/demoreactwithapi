import ItemTodo from "./item_todo";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTodo } from "../../redux/asyncAction";

function ListTodo() {
  let dispatch = useDispatch();
  let todos = useSelector((state) => state.todos.dataTodos);
  console.log("todo Redux ", todos);

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  let datas = todos.map((item, index) => (
    <ItemTodo index={index} key={item.id} {...item} />
  ));

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Task Name</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{datas}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ListTodo;
