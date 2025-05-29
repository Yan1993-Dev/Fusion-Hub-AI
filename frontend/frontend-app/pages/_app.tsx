// frontend-app/pages/_app.tsx
import '@/styles/globals.css'; // Путь до твоего CSS файла
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
