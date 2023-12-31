import { useState } from "react";
import "./header.css";
import { nav } from "../data/Data";
import { Link } from "react-router-dom";
import logo from "./wool-logo.png";
import { Avatar } from "@material-tailwind/react";
import avatar from './avatar.jfif'
const Navbar = () => {
  const [navList, setNavList] = useState(false);

  return (
    <>
      <header className="mx-10">
        <div className="flex justify-between items-center">
          <div className="logo">
            <img src={logo} alt="" className="w-12" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link className="capitalize text-lg"  to={list.path}>
                    {list.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex items-center">
            <h4>
              <span>2</span> My List
            </h4>
            <Avatar src={avatar} alt="avatar" />
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
