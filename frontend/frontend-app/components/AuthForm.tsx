import React from 'react'; 
import { useState } from 'react';

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <section className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">
      <div className="flex mb-6 rounded-full overflow-hidden border border-indigo-600">
        <button 
          className={`flex-1 py-2 text-lg font-semibold transition-all ${isLogin ? 'bg-indigo-600 text-white' : 'bg-transparent text-indigo-600 hover:bg-indigo-50'}`} 
          onClick={() => setIsLogin(true)}
        >
          Вход
        </button>
        <button 
          className={`flex-1 py-2 text-lg font-semibold transition-all ${!isLogin ? 'bg-indigo-600 text-white' : 'bg-transparent text-indigo-600 hover:bg-indigo-50'}`} 
          onClick={() => setIsLogin(false)}
        >
          Регистрация
        </button>
      </div>
      <form className="space-y-5">
        {!isLogin && <input type="text" placeholder="Имя" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-indigo-600" />}
        <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-indigo-600" />
        <input type="password" placeholder="Пароль" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-indigo-600" />
        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-indigo-500 transition">
          {isLogin ? 'Войти' : 'Зарегистрироваться'}
        </button>
      </form>
    </section>
  );
};
