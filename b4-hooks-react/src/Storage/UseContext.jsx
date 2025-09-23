import Paragraph from "./Paragraph";

export default function UseContext() {
  return (
    <div>
      <h2>
        useState() useEffect() useContext() useReducer() useSelector(),
        useDispatch()
      </h2>

      <h3>UseContext()</h3>
      <p>
        Context (ngữ cảnh, phạm vi) được dùng để truyền dữ liệu xuống nhiều
        component con mà không cần phải truyền props thủ công qua từng cấp (gọi
        là prop drilling).
      </p>
      <p>
        Đại loại là truyền dữ liệu từ component A sang B sang C, thì context
        giúp truyền từ A cha tới C con mà ko thông qua B.
      </p>
      <Paragraph />
    </div>
  );
}
