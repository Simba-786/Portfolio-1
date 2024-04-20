import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="  relative sm:grid sm:grid-cols-2 py-8 px-4 md:flex md:px-1 grid grid-cols-2 md:text-xs text-[10px] flex-col justify-center items-center  text-yellow-800">
      <h1 className="  top-0 left-[50%] translate-x-[-50%] absolute   uppercase text-sm mb-4 p-1  text-yellow-800 font-semibold  underline underline-offset-4 tracking-wider">
        Profile
      </h1>
      <div className="ring ring-offset-2 ring-slate-800  shadow-lg h-24 w-24 sm:h-24 sm:w-24 md:min-w-24 md:max-w-40 md:min-h-24 md:max-h-40  rounded-lg mb-8 overflow-hidden bg-yellow-400 ">
        <img
          className="shadow-lg border-2 sm:h-24 sm:w-24 h-24 w-24 md:min-w-24 md:max-w-40 md:min-h-24 md:max-h-40"
          src="../asset/images/image.jpg"
          alt="image1"
        />
      </div>
      <div className="flex text-start  sm:text-start flex-col uppercase p-1 gap-4  ">
        <div>
          <span className="text-yellow-800 font-bold">Name</span>
          <p>Sindbaaz</p>
        </div>
        <div>
          <span className="text-yellow-800 font-bold">Address</span>
          <p>Ambernath,Maharashtra-421505</p>
        </div>
        <div>
          <span className="text-yellow-800 font-bold ">Contact Number</span>
          <p>9766902092</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:flex sm:gap-x-4 ">
          <Link
            to="https://www.facebook.com/sindbaaz.ansari4325/about"
            target="_blank"
            className="hover:bg-sky-600 hover:ring-white ring-sky-600 bg-sky-200  shadow-lg icon pl-2 cursor-pointer"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </Link>
          <Link
            to="https://www.linkedin.com/in/sindbaaz-ansari-641729120/"
            target="_blank"
            className="hover:bg-blue-600 hover:ring-white ring-blue-600 bg-blue-200 shadow-lg icon pl-2"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </Link>
          <Link
            to="https://www.instagram.com/jhony_3274_?igsh=MXNjMmkwZWd1NzgwYQ=="
            target="_blank"
            className="hover:bg-red-600 hover:ring-white ring-red-600 bg-red-200 shadow-lg icon pl-2"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
