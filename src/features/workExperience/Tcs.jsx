import { Link, Outlet, useParams } from "react-router-dom";

export default function Tcs() {
  const { work } = useParams();
  console.log(work);

  return (
    <div className="flex gap-4 flex-col">
      <div className="text-slate-800 font-semibold tracking-wide ">
        <p className="font-bold text-sm mb-4 uppercase">
          Senior Process Associate, Tata Consultancy Services, Mumbai/INDIA (DEC
          2017 – Present)
        </p>
        <div className="flex gap-4">
          <Link
            className={
              work === "silicon"
                ? "bg-yellow-200 block px-2 py-1 text-yellow-800 uppercase cursor-pointer hover:bg-yellow-200 active:scale-125 select-none hover:text-yellow-800 rounded-sm"
                : "bg-yellow-800 block px-2 py-1 text-yellow-200  uppercase cursor-pointer hover:bg-yellow-200 active:scale-125 select-none hover:text-yellow-800 rounded-sm"
            }
            to="/workexp/tcs/silicon"
          >
            Silicon Valley
          </Link>
          <Link
            className={
              work === "wells"
                ? "bg-yellow-200 block px-2 py-1 text-yellow-800 uppercase cursor-pointer hover:bg-yellow-200 active:scale-125 select-none hover:text-yellow-800 rounded-sm"
                : "bg-yellow-800 block px-2 py-1 text-yellow-200  uppercase cursor-pointer hover:bg-yellow-200 active:scale-125 select-none hover:text-yellow-800 rounded-sm"
            }
            to="/workexp/tcs/wells"
          >
            Wells Fargo
          </Link>
          <Link
            className={
              work === "gecapital"
                ? "bg-yellow-200 block px-2 py-1 text-yellow-800 uppercase cursor-pointer hover:bg-yellow-200 active:scale-125 select-none hover:text-yellow-800 rounded-sm"
                : "bg-yellow-800 block px-2 py-1 text-yellow-200  uppercase cursor-pointer hover:bg-yellow-200 active:scale-125 select-none hover:text-yellow-800 rounded-sm"
            }
            to="/workexp/tcs/gecapital"
          >
            GeCapital
          </Link>
        </div>
        <div className="m-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
