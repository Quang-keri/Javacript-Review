import { useContext } from "react";
import "./App.css";
import { LearnContext } from "./Storage/LearnContext";
import { ThemeContext } from "./ThemeProvider";
import { LearnUseLayoutEffect } from "./LearnUseLayoutEffect";
import { LearnUseReducer } from "./LearnUseReducer";
function App() {
  const context = useContext(ThemeContext);
  return (
    <div className="App">
      <button onClick={context.toggleTheme}>Nút này đổi màu</button>
      <LearnContext />
      <h3>Sự khác nhau giữa useEffect và useLayoutEffect</h3>
      <p>
        A. useEffect 1. Cập nhật lại state 2. Cập nhật lại DOM (mutate) 3.
        Render lại UI 4. Gọi clear up function khi deps thay đổi 5. Gọi
        useEffect callback
      </p>
      <p>
        B. useLayoutEffect 1. Cập nhật lại state 2. Cập nhật lại DOM (mutate) 3.
        Gọi clear up function khi deps thay đổi (sync) 4. Gọi useEffect callback
        (sync) 5. Render lại UI
      </p>

      <p>
        Vd : tạo nút count useEffect khi nó lớn 3 set lại count 0 thì nó bị
        “giật” sử dụng useLayoutEffect để nó ko bị giật và đồng thời vd nó sẽ
        set về 3 lun thay vì 4 liền giật về 0 của useEffect
      </p>

      <LearnUseLayoutEffect />

      <h3>useReducer()</h3>
      <p>
        giống vs useState nhưng quản lí các state phức tạp như object ,array,
      </p>
      <LearnUseReducer />
    </div>
  );
}

export default App;
