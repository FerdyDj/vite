import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-7xl font-bold text-sky-400">
        Simple React Project with VITE
      </h1>
      <div className="flex gap-5">
        <Link
          to="/counter"
          className="mt-10 text-lg hover:text-sky-400 font-semibold tracking-tight hover:text-shadow-sm underline underline-offset-2 transition-all duration-200"
        >
          Counter App With Redo Undo
        </Link>
        <Link
          to="/close"
          className="mt-10 text-lg hover:text-sky-400 font-semibold tracking-tight hover:text-shadow-sm underline underline-offset-2 transition-all duration-200"
        >
          Close Dropdown Outside Click
        </Link>
        <Link
          to="/inline"
          className="mt-10 text-lg hover:text-sky-400 font-semibold tracking-tight hover:text-shadow-sm underline underline-offset-2 transition-all duration-200"
        >
          Inline Editable Input
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
