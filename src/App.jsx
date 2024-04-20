import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import About from "./features/About";
import HonoursAndAwards from "./features/HonoursAndAwards";
import TechnologyAndTools from "./features/TechnologyAndTools";
// import TrainingAndCertifications from "./features/TrainingAndCertifications";
import Skills from "./features/Skills";
import Education from "./features/Education";
import WorkExperience from "./features/WorkExperience";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Silicon from "./features/workExperience/Silicon";
import Wells from "./features/workExperience/Wells";
import Gecapital from "./features/workExperience/Gecapital";
import Homepage from "./features/Homepage";
import Matrix from "./features/workExperience/Matrix";
import Tcs from "./features/workExperience/tcs";
import HDFC from "./features/workExperience/HDFC";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    path: "",
    children: [
      {
        element: <Homepage />,
        path: "/",
      },
      {
        element: <About />,
        path: "/about",
      },
      {
        element: <Education />,
        path: "/education",
      },
      {
        element: <HonoursAndAwards />,
        path: "/honours",
      },
      {
        element: <WorkExperience />,
        path: "/workexp/",
        children: [
          {
            element: <Tcs />,
            path: "/workexp/:company",
            children: [
              {
                element: <Silicon />,
                path: "/workexp/:company/silicon",
              },
              {
                element: <Wells />,
                path: "/workexp/:company/wells",
              },
              {
                element: <Gecapital />,
                path: "/workexp/:company/gecapital",
              },
            ],
          },
          {
            element: <Matrix />,
            path: "/workexp/:company",
            children: [
              {
                element: <HDFC />,
                path: "/workexp/:company/hdfc",
              },
            ],
          },
          //
        ],
      },
      {
        element: <TechnologyAndTools />,
        path: "/technology",
      },

      {
        element: <Skills />,
        path: "/skills",
      },
    ],
  },
]);

function App() {
  return (
    <div className="h-screen overflow-scroll scollbar-hide p-8">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
