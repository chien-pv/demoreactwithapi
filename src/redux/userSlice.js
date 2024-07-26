import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  dataUser: [
    {
      id: 2,
      name: "Nguyen Van A",
    },
    {
      id: 3,
      name: "Nguyen Van B",
    },
    {
      id: 4,
      name: "Nguyen Van C",
    },
  ],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser(state, action) {
      state.dataUser = state.dataUser.filter(
        (item) => item.id != action.payload
      );
    },
  },
});

export const { deleteUser } = userSlice.actions;
