import { useForm } from "react-hook-form";
// import axios from "axios";

export default function LoginFormBackend() {
  // Hook của react-hook-form
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  // Hàm xử lý khi submit
  const onSubmit = async (data) => {
    try {
      // const res = await axios.post(
      //   "http://localhost:8080/api/auth/login",
      //   data
      // );
      // if (res.data.code === 1000) {

      //   alert("Đăng nhập thành công!");
      // } else {
      //   // Nếu BE trả code khác 1000
      //   setError("root", { message: "Sai thông tin đăng nhập" });
      // }
      console.log(data);
    } catch (err) {
      const res = err.response?.data;
      //tùy set up dưới be nha Quang san vd res.data.message day Quang
      if (res?.errors) {
        Object.entries(res.errors).forEach(([field, message]) => {
          setError(field, { message });
        });
      } else {
        // Nếu BE trả về lỗi tổng quát
        const message = res?.message || "Lỗi đăng nhập";
        setError("root", { message });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 style={{ textAlign: "right" }}>Đăng nhập ne</h3>

      <input
        placeholder="Email hoặc Username"
        {...register("username", { required: "Nhập username hoặc email" })}
      />
      {errors.username && (
        <p style={{ color: "red" }}>{errors.username.message}</p>
      )}

      <input
        type="password"
        placeholder="Mật khẩu"
        {...register("password", {
          required: "Nhập mật khẩu",
          minLength: { value: 6, message: "Mật khẩu ít nhất 6 ký tự" },
        })}
      />
      {errors.password && (
        <p style={{ color: "red" }}>{errors.password.message}</p>
      )}

      {errors.root && <p style={{ color: "red" }}>{errors.root.message}</p>}

      <button type="submit">Đăng nhập</button>
    </form>
  );
}
