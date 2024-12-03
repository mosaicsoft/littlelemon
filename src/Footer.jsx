import { CiPhone } from "react-icons/ci";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col gap-8 md:flex-row md:justify-around md:items-start px-10 py-10 md:py-20 bg-primary-1 text-white font-Markazi text-xl">
        <img src="logo.png" className="w-1/5 md:w-1/12" />
        <div className="text-white font-Markazi text-xl">
          <ul>
            <li>
              <a href="/" className="hover:text-primary-2">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary-2">
                About
              </a>
            </li>
            <li>
              <a href="#specials" className="hover:text-primary-2">
                Menu
              </a>
            </li>
            <li>
              <a href="reserve" className="hover:text-primary-2">
                Reservations
              </a>
            </li>
            <li>
              <a
                href="http://www.doordash.com"
                target="_blank"
                className="hover:text-primary-2"
              >
                Order Online
              </a>
            </li>
            <li>Login</li>
          </ul>
        </div>
        <div>
          <p className="flex items-center gap-2">
            <IoLocation />
            3255 Eldridge Trace,
          </p>
          <p className="ms-7"> East Sherman, </p>
          <p className="ms-7">WA 83772</p>
          <p className="flex items-center gap-2">
            <MdOutlineEmail />
            hello@littlelemon.com
          </p>
          <p className="flex items-center gap-2">
            <CiPhone />
            832-833-912
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="hover:text-primary-2"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            className="hover:text-primary-2"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.x.com"
            target="_blank"
            className="hover:text-primary-2"
          >
            <FaSquareXTwitter />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="hover:text-primary-2"
          >
            <FaFacebook />
          </a>
        </div>
      </footer>
      <div className="bg-primary-1 pt-3 text-white font-Markazi flex justify-center items-center gap-2">
        Copyright &copy;2024 Sasmit Vasantgadkar. All rights reserved.
        <a href="mailto:sasmitav@gmail.com">
          <HiOutlineMail />
        </a>
        <a href="https://www.linkedin.com/in/sasmitv/" target="_blank">
          <FaLinkedin />
        </a>
      </div>
      <div className="bg-primary-1 pb-3 text-white font-Markazi flex justify-center items-center gap-2">
        Created as part of{" "}
        <a href="https://www.coursera.org/professional-certificates/meta-front-end-developer">
          Meta Front-End Developer Professional Certificate
        </a>{" "}
        - Capstone Project
      </div>
    </>
  );
}
