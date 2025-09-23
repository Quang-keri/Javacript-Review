import { ThemeContext } from "../ThemeProvider";
import { useContext } from "react";
import { createContext, useState } from "react";
import "../App.css";
export default function Paragraph() {
  //gọi useContext để thành consumer để lấy themecontext value nó từ bên app qua sài
  const context = useContext(ThemeContext);
  return (
    <div className={context.theme}>
      <p>Án vào btn Ahihi chuyển theme cho context đi bro</p>
    </div>
  );
}
