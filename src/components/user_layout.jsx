import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./app_header";
import ColorInversionFooter from "./app_footer";
import { TodoContext } from "../contexts/todo_context";
import { useState } from "react";

function UserLayout() {
  let [todos, setTodos] = useState(["Học JS", "Hoc CSS"]);

  return (
    <>
      <TodoContext.Provider
        value={{
          datas: todos,
          setTodos,
        }}
      >
        <ResponsiveAppBar />
        <main>
          <Outlet />
        </main>
        <ColorInversionFooter />
      </TodoContext.Provider>
    </>
  );
}
export default UserLayout;
