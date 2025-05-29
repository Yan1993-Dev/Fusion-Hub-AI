import { useState } from "react";

interface AuthFormProps {
  type: "login" | "register";
}

export default function AuthForm({ type }: AuthFormProps) {
  const [form, setForm] = useState({ email: "", password: "", name: "", confirmPassword: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${type} form data:`, form);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80 space-y-4">
      {type === "register" && (
        <input
          type="text"
          name="name"
          placeholder="Имя"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Пароль"
        value={form.password}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      {type === "register" && (
        <input
          type="password"
          name="confirmPassword"
          placeholder="Подтвердите пароль"
          value={form.confirmPassword}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        />
      )}
      <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded">
        {type === "login" ? "Войти" : "Зарегистрироваться"}
      </button>
    </form>
  );
}
