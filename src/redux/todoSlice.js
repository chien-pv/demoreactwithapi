import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  dataTodos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    deleteTodo(state, action) {
      state.dataTodos = state.dataTodos.filter(
        (item) => item.id != action.payload
      );
    },
    // action: { type: "",  payload: {id: "abc", taskName: "hoc js"}
    addTodo(state, action) {
      state.dataTodos.push(action.payload);
    },

    fetchTodo(state, action) {
      state.dataTodos = action.payload;
    },
    // action: { type: "",  payload: {index: 1 , taskName: "hoc js"}
    editTodo(state, action) {
      let { index, taskName } = action.payload;
      state.dataTodos[index].taskName = taskName;
    },
  },
});

export const { deleteTodo, addTodo, editTodo, fetchTodo } = todoSlice.actions;
