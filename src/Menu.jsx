import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";

export default function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between md:hidden">
        <a href="/">
          <img src="Logo.svg" className="m-5" alt="Logo" />
        </a>
        <div className="p-5" onClick={() => setMenuIsOpen((prev) => !prev)}>
          {menuIsOpen ? (
            <RiCloseLargeFill size={30} aria-label="Close" />
          ) : (
            <GiHamburgerMenu size={30} aria-label="Menu" />
          )}
        </div>
      </nav>
      {menuIsOpen && (
        <ul className="menu flex flex-col gap-2 mt-10 font-Markazi text-xl items-start absolute bg-white top-7 h-full w-1/2 px-5 py-2">
          <li>
            <a href="/">HOME</a>
          </li>

          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#specials">MENU</a>
          </li>
          <li>
            <a href="reserve">RESERVATIONS</a>
          </li>
          <li>
            <a href="#">LOGIN</a>
          </li>
          <li>
            <a href="http://www.doordash.com" target="_blank">
              ORDER ONLINE
            </a>
          </li>
        </ul>
      )}

      <nav className="p-5 my-5 justify-center items-center gap-16 text-secondary-1 hidden md:flex">
        <a href="/">
          <img src="Logo.svg" className="mx-5" alt="Logo" />
        </a>
        <ul className="menu flex gap-5 font-Markazi text-xl items-center">
          <li>
            <a href="/">HOME</a>
          </li>

          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#specials">MENU</a>
          </li>
          <li>
            <a href="reserve">RESERVATIONS</a>
          </li>
          <li>
            <a href="#">LOGIN</a>
          </li>
          <li
            className="bg-primary-1 text-white font-Markazi text-xl px-4 py-2 rounded-2xl mx-4 cursor-pointer hover:bg-primary-2 hover:text-primary-1"
            onClick={() => window.open("https://www.doordash.com", "_blank")}
          >
            ORDER ONLINE
          </li>
        </ul>
      </nav>
    </>
  );
}
