import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
