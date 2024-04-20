// import Tabs from "@mui/material/Tabs";

import { Link, Outlet, useParams } from "react-router-dom";

function WorkExperience() {
  const { company } = useParams();
  console.log(company);
  return (
    <div className="text-[14px] leading-5">
      <h2 className="text-center underline underline-offset-2 uppercase tracking-wider font-bold text-xl">
        Work Experience
      </h2>
      <Link
        className={
          company === "tcs"
            ? "bg-yellow-200 px-2 py-1 text-yellow-800 font-xl rounded-sm font-bold text-xl inline-block mr-4 mb-5"
            : "bg-yellow-800 px-2 py-1 text-yellow-200 rounded-sm font-bold text-xl inline-block mr-4 mb-5"
        }
        to="/workexp/tcs/silicon"
      >
        Tcs
      </Link>
      <Link
        className={
          company === "matrix"
            ? "px-2 py-1 bg-yellow-200 rounded-sm text-yellow-800 font-bold inline-block text-xl mb-5"
            : "px-2 py-1 bg-yellow-800 rounded-sm text-yellow-200 font-bold inline-block text-xl mb-5"
        }
        to="/workexp/matrix/hdfc"
      >
        Matrix
      </Link>
      <Outlet />
    </div>
  );
}

export default WorkExperience;

// return (
//
