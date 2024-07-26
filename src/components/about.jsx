import { TodoContext } from "../contexts/todo_context";
import { useContext } from "react";
function About() {
  let { datas, setTodos } = useContext(TodoContext);
  console.log("todoContext: ", datas);

  function updateTodo() {
    setTodos([]);
  }

  return (
    <>
      <h1>About Page</h1>
      <button onClick={updateTodo}> Update Todo</button>
    </>
  );
}
export default About;
