import { ThemeContext } from "../App";
import { useContext } from "react";
import "../App.css";
export default function Paragraph() {
  //gọi useContext để thành consumer để lấy themecontext value nó từ bên app qua sài
  const theme = useContext(ThemeContext);
  return (
    <div className={theme}>
      <p>Án vào btn Ahihi chuyển theme cho context đi bro</p>
    </div>
  );
}
