import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  isOpen?: boolean;
  onToggle?: () => void;
  close: string;
  menu: string;
  navLinks: Array<{
    id: string;
    title: string;
  }>;
}

const Navbar: React.FC<NavbarProps> = ({
  menu,
  close,
  navLinks,
  isOpen = false,
  onToggle,
}) => {
  const [active, setActive] = useState<string>("hero");
  const [toggle, setToggle] = useState<boolean>(isOpen);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setToggle(isOpen);
  }, [isOpen]);

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setToggle(!toggle);
    }
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="w-full flex items-center bg-gradient-to-b from-black sm:bg-none px-8 sm:px-16 py-6 fixed z-40 pointer-events-none">
      <div className="w-full flex justify-between items-start mx-auto">
        <div
          className={`transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <section className="top-4 left-4 fixed">
            <Link
              to="/"
              className="flex items-start"
              onClick={() => {
                setActive("hero");
                window.scrollTo(0, 0);
              }}
            >
              <p className="text-white text-[26px] lg:text-[36px] font-bold pointer-events-auto cursor-pointer flex">
                KW
              </p>
            </Link>
          </section>
        </div>
        {/* Desktop menu navigation */}
        <section className={" top-4 right-4 fixed"}>
          <ul
            className={`hidden sm:flex gap-3 items-end ${
              scrolled
                ? "flex-col items-end justify-end"
                : "flex-row items-start"
            }`}
          >
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] text-left pl-4 mb-2 transition-colors duration-300 ${
                  active === nav.id
                    ? "text-white" // Active state color
                    : "text-slate-500 hover:text-slate-300" // Inactive state with hover
                }`}
              >
                {active === nav.id && (
                  <div className="absolute right-[-40px] w-2 h-6 lg:h-8 "></div>
                )}
                <a
                  href={`#${nav.id}`}
                  onClick={() => {
                    setActive(nav.id);
                  }}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
        {/* Mobile menu navigation*/}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain pointer-events-auto cursor-pointer"
            onClick={handleToggle}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl bg-black/80`}
          >
            <ul className="w-full">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] text-left pl-4 mb-2 transition-colors duration-300 ${
                    active === nav.id
                      ? "text-white" // Active state color
                      : "text-slate-500 hover:text-slate-300" // Inactive state with hover
                  }`}
                >
                  <a
                    href={`#${nav.id}`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.id);
                    }}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
