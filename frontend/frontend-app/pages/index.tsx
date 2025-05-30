import { Header } from '@/components/Header';
import { Marketing } from '@/components/Marketing';
import AuthForm  from '@/components/AuthForm';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Основной контент */}
      <main className="flex-grow flex flex-col items-center justify-center container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
          <Marketing />
          <AuthForm />
        </div>
      </main>

      {/* Футер (по желанию) */}
      <footer className="text-center text-gray-500 text-sm py-4">
        © 2025 Fusion Hub AI. Все права защищены.
      </footer>
    </div>
  );
}
