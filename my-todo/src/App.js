"use client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import TodoApp from "./TodoApp";

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
