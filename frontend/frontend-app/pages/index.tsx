import { useState } from 'react';

export default function Home() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Header */}
            <header className="w-full bg-white shadow">
                <nav className="container mx-auto flex items-center justify-between p-4">
                    <div className="flex items-center gap-2">
                        <img
                            className="h-10 w-10"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Fusion Hub Logo"
                        />
                        <span className="font-bold text-lg">Fusion Hub AI</span>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <a href="#" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Product</a>
                        <a href="#" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Features</a>
                        <a href="#" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Marketplace</a>
                        <a href="#" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Company</a>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 p-6">
                {/* Marketing Block */}
                <section className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Управляй данными умно</h1>
                    <p className="text-lg text-gray-600 mb-6">Fusion Hub AI помогает тебе управлять данными и бизнесом.</p>
                    <a href="#" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition">Узнать больше</a>
                </section>

                {/* Auth Form */}
                <section className="w-full max-w-md bg-white rounded-lg shadow p-8">
                    <div className="flex mb-4">
                        <button
                            className={`flex-1 py-2 ${isLogin ? 'border-b-2 border-indigo-600 font-semibold' : 'text-gray-600'}`}
                            onClick={() => setIsLogin(true)}
                        >
                            Вход
                        </button>
                        <button
                            className={`flex-1 py-2 ${!isLogin ? 'border-b-2 border-indigo-600 font-semibold' : 'text-gray-600'}`}
                            onClick={() => setIsLogin(false)}
                        >
                            Регистрация
                        </button>
                    </div>

                    <form className="space-y-4">
                        {!isLogin && (
                            <input
                                type="text"
                                placeholder="Имя"
                                className="w-full px-4 py-2 border rounded focus:outline-indigo-600"
                            />
                        )}
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border rounded focus:outline-indigo-600"
                        />
                        <input
                            type="password"
                            placeholder="Пароль"
                            className="w-full px-4 py-2 border rounded focus:outline-indigo-600"
                        />
                        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500 transition">
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </button>
                    </form>
                </section>
            </main>
        </div>
    );
}
