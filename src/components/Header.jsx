//The header of the website will appear in every page of the website//

import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/svg/logo.svg"
import useMedia from "../hooks/useMedia";
import Circles from "./Circles";
//Links of the pages from my website//
const links = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About me",
    path: "/about-me"
  },
  {
    name: "Projects",
    path: "/projects"
  },
  {
    name: "Contact me",
    path: "/contact-me"
  }
];
//The burger only works for mobile//
const BurgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_1059_8437" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <rect x="0.5" y="0.5" width="23" height="23" fill="#C4C4C4" stroke="#494F66" />
    </mask>
    <g mask="url(#mask0_1059_8437)">
      <path d="M2 20.667H22" stroke="#7678ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 4H2" stroke="#7678ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 12.333H2" stroke="#7678ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
)
//The close icon only appears whenever the menu is open in mobile//
const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.8812 5.88164L14.1187 4.11914L9.99997 8.23164L5.88122 4.11914L4.11871 5.88164L8.23122 10.0004L4.11871 14.1191L5.88122 15.8816L9.99997 11.7691L14.1187 15.8816L15.8812 14.1191L11.7687 10.0004L15.8812 5.88164Z" fill="#7678ED" />
  </svg>
)

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const isDesktop = useMedia("(min-width: 768px)")

//This toggle will either activate or disactivate from the class that was given to it//
  const handleToggle = () => {
    const navlinks = document.querySelector(".navlinks");
    if (!isDesktop) {
      navlinks.classList.toggle("active");
    }
    setIsOpen(!isOpen);
  }

//This effect is when user scrolls will appear a shadow in the header//
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`Header ${scrollPosition > 0 ? 'shadow' : ''}`}>
      <div className="header-content container">
        <Link to="/" className="logo">
          <div>
            <img src={logo} alt="Valdur Design" />
          </div>
          <h1>Valdur Design</h1>

        </Link>

        <nav className="navlinks">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                {/* The use of nav link to show where the user is situated in the website */}
                <NavLink to={link.path} className={({ isActive }) => isActive ? "active" : ""}
                  onClick={handleToggle}
                >{link.name}</NavLink>
              </li>
            ))}
          </ul>
          {/* When the menu is open in the responsive view show the circles */}
          {isOpen && (
            <div style={{ transform: "translate(36%, 13vh)" }}>
              <Circles />
            </div>
          )}
        </nav>

        <button className="burger-button" onClick={handleToggle}>
          {isOpen ? <CloseIcon /> : <BurgerIcon />}
        </button>
      </div>
    </header>
  );
}