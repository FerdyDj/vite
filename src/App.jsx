import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-7xl font-bold text-sky-400">
        Simple React Project with VITE
      </h1>
      <Link
        to="/counter"
        className="mt-5 text-xl hover:text-sky-400 font-bold hover:text-shadow-sm underline underline-offset-2 transition-all duration-200"
      >
        Counter
      </Link>
      <Outlet />
    </div>
  );
}

export default App;
