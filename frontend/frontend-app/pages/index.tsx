import { Header } from '../components/Header';
import { Marketing } from '../components/Marketing';
import { AuthForm } from '../components/AuthForm';
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 p-6">
        <Marketing />
        <AuthForm />
      </main>
    </div>
  );
}
