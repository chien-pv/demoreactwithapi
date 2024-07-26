import { createStore } from "redux";
const ADD = "@user/add";
const DELETE = "@user/delete";
const initState = [
  {
    id: 1,
    name: "Nguyen Van A",
  },
  {
    id: 2,
    name: "Nguyen Van B",
  },
];

const store = createStore(reducer);
// {
//     type: "add",
//     payload: {}

// }

function reducer(state = initState, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case DELETE:
      var id = action.id;
      return state.filter((item) => item.id !== id);
    default:
      return state;
  }
}

function deleteUser(id) {
  return {
    type: DELETE,
    id,
  };
}

console.log("redux ", store.getState());

// store.dispatch(deleteUser(1));

console.log("redux ", store.getState());
store.dispatch({
  type: ADD,
  payload: {
    id: 3,
    name: "Nguyen Van C",
  },
});
console.log("redux ", store.getState());
