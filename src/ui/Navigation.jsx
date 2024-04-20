import { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  // const { company } = useParams();
  const list = [
    "about",
    "education",
    "work Experience",
    "honours",
    "skills",
    "technology and Tools",
  ];
  /*eslint-disable*/
  const [selected, setselected] = useState(" ");

  function handleClick(e) {
    e.preventDefault();
    setselected(e.target.closest("li").querySelector(".list-span").innerText);
  }
  return (
    <div>
      <ul className="mt-4 text-center md:p-4 lg:px-8 lg:text-2xl gap-2  grid grid-cols-4 grid-rows-2 md:flex md:flex-col md:gap-12  ">
        {list.map((item) => (
          <ListItem key={item} handleClick={handleClick} selected={selected}>
            {item}
          </ListItem>
        ))}
        {/* <li className="list-items">
          <Link className="icon" to="/education">
            <ion-icon name="book-outline"></ion-icon>
          </Link>
          <span className="list-span">Education</span>
        </li>
        <li className="list-items">
          <Link className="icon" to="workexp/tcs/silicon">
            <ion-icon name="briefcase-outline"></ion-icon>
          </Link>
          <span className="translate-y-4 list-span">Work Experience</span>
        </li>
        <li className="list-items">
          <Link className="icon md:mt-4 " to="/honours">
            <ion-icon className="mt-4" name="trophy-outline"></ion-icon>
          </Link>
          <span className="list-span ">Honours</span>
        </li>
        <li className="list-items">
          <Link className="icon" to="/skills">
            <ion-icon name="library-outline"></ion-icon>
          </Link>
          <span className="list-span">skills</span>
        </li>
        <li className="list-items">
          <Link className="icon" to="/technology">
            <ion-icon name="construct-outline"></ion-icon>
          </Link>
          <span className="list-span translate-y-4 ">Technology and Tools</span>
        </li> */}
      </ul>
    </div>
  );
}

function ListItem({ children, handleClick, selected }) {
  console.log(selected);
  return (
    <li className="list-items" onClick={handleClick}>
      <Link
        className={`${selected.toLowerCase() === children.toLowerCase() ? "bg-yellow-600 border-white" : ""} icon`}
        to={`${children === "work Experience" ? "/workexp" : children && children === "technology and Tools" ? "/technology" : children}`}
      >
        <ion-icon
          // className={selected === children ? "mb-2" : ""}
          name="crop-outline"
        ></ion-icon>
        <span
          className={`${
            children === "work Experience" ||
            children === "technology and Tools"
              ? "translate-y-4"
              : " "
          }
           list-span`}
        >
          {children}
        </span>
      </Link>
    </li>
  );
}
export default Navigation;
