import { Link, Outlet } from "react-router-dom";

function Matrix() {
  return (
    <div className="flex gap-4 flex-col">
      <div className="text-slate-800 font-semibold tracking-wide ">
        <p className="font-bold text-sm mb-4 uppercase">
          Production Support Engineer, Matrix Technologies Mumbai/INDIA (FEB
          2024 – Present)
        </p>
        <div className="flex gap-4">
          <Link
            className="bg-yellow-200 block px-2 py-1 text-yellow-800 uppercase cursor-pointer hover:bg-yellow-200 active:scale-125 select-none hover:text-yellow-800 rounded-sm"
            to="/workexp/matrix/hdfc"
          >
            HDFC
          </Link>
        </div>
        <div className="m-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Matrix;
