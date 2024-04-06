import React, { useContext, useEffect, useRef, useState } from "react";
import DarkLight from "../DarkLight/DarkLight";
import avatar from "/images/avatar.png";
import { CiMenuFries } from "react-icons/ci";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../../../Contexts/AuthContext";
import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";

const ProfileNavbar = () => {
  const [showNav, setShowNav] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then((res) => {
      toast.success("Logout successfully Done.");
    });
  };

  // DropDown hidden when click outside
  const popupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowNav(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    if (!showNav) {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showNav]);
  // ref={popupRef} use in current DropDown div
  // Dropdown program End
  return (
    <div className="flex items-center justify-between gap-3 pb-2">
      <div className="flex justify-center items-center gap-5 ml-2">
        <div className="darkAndLight">
          <DarkLight />
        </div>
        <div className="profile group rounded-full w-[100px] relative">
          <img
            className="w-16 h-16 cursor-pointer rounded-full "
            src={user?.photoURL || avatar}
            alt="avatar"
          />

          <Dropdown
            style={{
              background: "transparent",
              position: "absolute",
              top: "0",
              outline: "none",
              border: "0",
              opacity: 0,
              padding: "15px"
            }}
            label=""
            dismissOnClick={false}
          >
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Item>{user?.displayName || "Please Log In"}</Dropdown.Item>
            <Dropdown.Item>{user?.email || "email@gmail.com"}</Dropdown.Item>
            {user ? 
            <Dropdown.Item><span
            onClick={handleLogout}
            className="w-full dark:text-light border-2 border-red-500 rounded-xl my-3 text-center p-2 text-black hover:bg-red-500"
          >
            Logout
          </span></Dropdown.Item>: 
          <Dropdown.Item><Link to={"/login"}
          className="w-full dark:text-light border-2 border-themeColor rounded-xl my-3 text-center p-2 text-black hover:bg-themeColor3"
        >
          <em>SIGN IN</em>
        </Link></Dropdown.Item>}
          </Dropdown>
        </div>
      </div>
      <div ref={popupRef}>
        <div>
          <CiMenuFries
            onClick={() => {
              setShowNav(!showNav);
            }}
            className="text-4xl m-3 text-themeColor cursor-pointer lg:hidden block"
          />
        </div>
        {showNav && (
          <div className="dropdown lg:hidden md:top-[120px] top-[200px]">
            <Navbar />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileNavbar;
