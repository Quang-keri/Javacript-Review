import { useForm } from "react-hook-form";

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(" data:", data);
    alert("Đăng nhập thành công ");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Đăng nhập</h3>

      <input
        placeholder="Email"
        {...register("email", {
          required: "Email không được trống",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Email không hợp lệ",
          },
        })}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      <br></br>
      <input
        type="password"
        placeholder="Mật khẩu"
        {...register("password", { required: "Nhập mật khẩu" })}
      />
      {errors.password && (
        <p style={{ color: "red" }}>{errors.password.message}</p>
      )}
      <br></br>
      <button type="submit">Đăng nhập</button>
    </form>
  );
}
