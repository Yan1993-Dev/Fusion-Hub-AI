// pages/login.tsx
export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-center">Вход</h1>
        <form className="w-full flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-gray-700 font-medium">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Введите email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-gray-700 font-medium">Пароль</label>
            <input
              id="password"
              type="password"
              placeholder="Введите пароль"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}
