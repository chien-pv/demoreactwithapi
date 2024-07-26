import { fetchTodo } from "./todoSlice";

export function getTodo() {
  return async (dispatch) => {
    const response = await fetch(
      "https://669b082e276e45187d347a71.mockapi.io/todos"
    );
    const json = await response.json();

    dispatch(fetchTodo(json));
  };
}
