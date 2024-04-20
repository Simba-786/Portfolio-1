function Education() {
  return (
    <div className="flex gap-4 flex-col">
      <h2 className="text-center underline underline-offset-2 uppercase tracking-wider font-bold text-lg">
        Education
      </h2>
      <span className=" underline underline-offset-4 uppercase font-bold text-amber-800 text-sm ">
        Degrees
      </span>
      <div className="grid md:grid-cols-1 grid-cols-2 md:gap-4 lg:grid-cols-2 gap-2 ">
        <div className="bg-red-400 text-white rounded-md p-2 animate-bounce-1  ">
          Bachelor Of Science (Information Technology) - - (Bunts Sangha College
          - Mumbai University).
        </div>
        <div className="bg-sky-400 text-white rounded-md p-2 animate-bounce-2">
          Higher Secondary School Certificate{" "}
          <span className="font-bold"> 51.53%</span>
        </div>
        <div className="bg-green-400 text-white rounded-md p-2 animate-bounce-3">
          Secondary School Certificate{" "}
          <span className="font-bold"> 79.45%</span>
        </div>
      </div>
      <span className="uppercase underline underline-offset-4 mt-4  font-bold text-amber-800 text-sm">
        Learnings
      </span>
      <div className="  grid grid-cols-2 gap-x-4">
        <div>
          <h3 className="capitalize font-bold text-amber-800 text-sm">
            Technology
          </h3>
          <div className="technologies bg-green-400">SQL</div>
          <div className="technologies bg-red-400">Linux</div>
          <div className="technologies bg-sky-400">HTML</div>
          <div className="technologies bg-green-400">CSS</div>
          <div className="technologies bg-slate-400">Javascript</div>
          <div className="technologies bg-green-400">React-JS</div>
          <div className="technologies bg-orange-400">Tailwind-CSS</div>
        </div>
        <div className="flex flex-col gap-2 text-white">
          <h3 className="capitalize font-bold text-amber-800 text-sm ">
            Tools
          </h3>
          <div>
            <h4 className="text-amber-800 uppercase">Monitoring Tools</h4>
            <ul>
              <li className="technologies bg-amber-800  hover:bg-amber-200 hover:text-amber-800">
                AppDynamics
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h4 className="text-amber-800 uppercase">Database Management</h4>
            <ul>
              <li className="technologies bg-red-400 text-white hover:bg-amber-200 hover:text-amber-800">
                MySQL
              </li>
              <li className="technologies bg-green-400  hover:bg-amber-200 hover:text-amber-800">
                Oracle
              </li>
              <li className="technologies bg-yellow-400  hover:bg-amber-200 hover:text-amber-800">
                SQL server management studio
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-amber-800 uppercase">Servers</h4>
            <ul>
              <li className="technologies bg-orange-800  hover:bg-amber-200 hover:text-amber-800">
                Windows
              </li>
              <li className="technologies bg-black  hover:bg-amber-200 hover:text-amber-800">
                Linux
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-amber-800 uppercase">Ticketing System</h4>
            <ul>
              <li className="technologies bg-green-800  hover:bg-amber-200 hover:text-amber-800">
                ServiceNow
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
