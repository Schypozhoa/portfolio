import Link from "next/link";
import { useState, useEffect } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavbarComponent = ({isHomeInView, isAboutInView, isProjectInView}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="fixed z-20 bg-black w-full text-white">
        <div className="w-full">
          <div className="flex items-center h-20 w-full ">
            <div className="flex items-center sm:mx-10 md:mx-10 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <h1 className=" font-bold text-xl cursor-pointer">
                  <Link href="/">
                    <div className="text-2xl pl-8 sm:pl-0">
                      <span className="text-mikuPrimary">danu</span>adin
                    </div>
                  </Link>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-10">
                  <h1
                    className={
                      isHomeInView
                      ? "text-mikuPrimary" 
                      : "cursor-pointer hover:text-mikuPrimary"
                    }
                  >
                    <Link href="/">
                      Home
                    </Link>
                  </h1>
                  <h1
                    className={
                      isAboutInView
                        ? "text-mikuPrimary"
                        : "cursor-pointer hover:text-mikuPrimary"
                    }
                  >
                    <Link href="#about">
                      About
                    </Link>
                  </h1>
                  <h1
                    className={
                      isProjectInView
                        ? "text-mikuPrimary"
                        : "cursor-pointer hover:text-mikuPrimary"
                    }
                  >
                    <Link href="#projects">
                      Projects
                    </Link>
                  </h1>
                </div>
              </div>

              <div className="flex justify-center items-center flex-shrink-0 md:block">
                <div className="flex space-x-4">
                  <div>
                    <a
                      href="https://github.com/Schypozhoa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsGithub className="hidden md:block" size="2rem" />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/danuadin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsLinkedin className="hidden md:block" size="2rem" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div onClick={handleMobileNav} className="mr-14 md:hidden">
              <AiOutlineMenu size="2rem" />
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div
            className={
              isOpen ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""
            }
          >
            <div
              className={
                isOpen
                  ? "fixed left-0 top-0 w-full sm:w[40%] md:w-[30%] h-screen bg-black p-10 ease-in duration-300"
                  : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
              }
            >
              <div>
                <div className="flex w-full items-center justify-between">
                  <div
                    onClick={handleMobileNav}
                    className="rounded shadow-lg shadow-gray-400 p-3 cursor-pointer"
                  >
                    <AiOutlineClose />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col space-y-4 pt-4">
                  <h1
                    className={
                      isHomeInView
                        ? "text-mikuPrimary"
                        : "cursor-pointer hover:text-mikuPrimary"
                    }
                  >
                    <Link href="/" onClick={handleMobileNav}>
                      Home
                    </Link>
                  </h1>
                  <h1
                    className={
                      isAboutInView
                        ? "text-mikuPrimary"
                        : "cursor-pointer hover:text-mikuPrimary"
                    }
                  >
                    <Link href="#about" onClick={handleMobileNav}>
                      About
                    </Link>
                  </h1>
                  <h1
                    className={
                      isProjectInView
                        ? "text-mikuPrimary"
                        : "cursor-pointer hover:text-mikuPrimary"
                    }
                  >
                    <Link href="#projects" onClick={handleMobileNav}>
                      Projects
                    </Link>
                  </h1>
                </div>
                <div className="space-x-4 pt-20">
                  <div className="flex space-x-4">
                    <div className="rounded shadow-lg shadow-gray-400 p-3 cursor-pointer">
                      <a
                        href="https://github.com/Schypozhoa"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsGithub size="2rem" />
                      </a>
                    </div>
                    <div className="rounded shadow-lg shadow-gray-400 p-3 cursor-pointer">
                      <a
                        href="https://www.linkedin.com/in/danuadin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsLinkedin size="2rem" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
