import { Outlet, useParams } from "react-router-dom";
import Navigation from "./Navigation";
import Profile from "./Profile";
// bg-gradient from-sky-200 to-yellow-400
function AppLayout() {
  const { params } = useParams();
  console.log(params);
  return (
    <div className="background shadow-md rounded-lg h-screen scrollbar-hide bg-yellow-50 w-4/5 flex flex-col mx-auto overflow-scroll p-8 md:flex-row md:gap-x-8 md:flex  gap-y-8 text-xs">
      <section className="sm:min-w-24 md:min-w-48 md:max-w-64 text-center sm:h-3/5 border-2 border-yellow-800 rounded">
        <Profile />
      </section>
      <main className="sm:min-w-28   sm:px-2 border-2 border-yellow-800 h-4/5 overflow-scroll grow sm:grow rounded scrollbar-hide">
        <Outlet />
      </main>
      <section className=" h-96 text-center min-w-24 md:min-w-24 lg:min-w-40   overflow-scroll scrollbar-hide border-2 border-yellow-800 rounded">
        <Navigation />
      </section>
    </div>
  );
}

export default AppLayout;
