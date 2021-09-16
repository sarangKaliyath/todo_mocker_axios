import { TodoInput } from "./TodoInput";
import React, { useState } from "react";

export function Todos() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <TodoInput
        text={text}
        setText={setText}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </div>
  );
}
