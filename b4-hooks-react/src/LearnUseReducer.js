import React, { useReducer } from "react";
// 1. Init state
const initState = 0;

// 2. Actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// 3. Reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      return state;
  }
};
export function LearnUseReducer() {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      <p>count là state hiện tại (giống như useState).</p>
      <p>dispatch là hàm để gửi action.</p>
      <p>initState = 0 là giá trị ban đầu của count</p>
      <p>
        reducer nhận state hiện tại và action. Dựa vào action, reducer trả về
        state mới
      </p>
    </>
  );
}
