import "./App.css";
import FormAdd from "./components/pages/form_add";
import ListTodo from "./components/pages/list_todo";
import "./styles/index.scss";
import { useState, useRef, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <FormAdd />
        <ListTodo />
      </div>
    </Provider>
  );
}

export default App;
