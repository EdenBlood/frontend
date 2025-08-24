import { Outlet } from "react-router-dom";

export function DashBoard() {
  return (
    <div className="min-h-screen flex flex-col gap-8">
      <header className="relative bg-[url('/hero.webp')] w-full h-52 bg-cover bg-center">
        <h1 className="w-full h-full flex items-center justify-center text-black text-6xl font-bold">
          TODO
        </h1>
      </header>
      <main className="max-w-5xl w-full mx-auto flex gap-10">
        <Outlet />
      </main>
      <footer className="w-full h-16 bg-gray-800 text-white flex items-center justify-center">
        <p>© {new Date().getFullYear()} My Todo App</p>
      </footer>
    </div>
  );
}
