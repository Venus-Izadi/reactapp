import React from "react";

export const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        onChange={props.onChangeHandle}
        value={props.currentTodo}
      />
    </form>
  );
};
