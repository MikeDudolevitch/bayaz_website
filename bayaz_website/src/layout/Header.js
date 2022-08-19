import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Header.css";

function Header() {
  const [showMenu, setShowMenu] = useState("");
  const [transition, setTransition] = useState("");

  const menuClick = (e) => {
    if (showMenu === "visible") {
      if (e.target.classList && e.target.classList.contains("nav-link")) {
        // gives time for the active link to transition inside the menu
        setTimeout(() => {
          setShowMenu("");
          removeTransition();
        }, 600);
      } else {
        setShowMenu("");
        removeTransition();
      }
    } else {
      setTransition("transition");
      setShowMenu("visible");
    }
  };
  // adds 200ms, allowing for the animation to finish before removing the transition
  // need to remove the transition becuase of issues when resizing the window
  const removeTransition = () => {
    setTimeout(() => {
      setTransition("");
    }, 200);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setShowMenu("");
      removeTransition();
    });
  }, []);

  return (
    <header>
      <div className="leftSpacer"> </div>
        <Link
          to="music"
          activeClass="activeLogo"
          spy={true}
          smooth={false}
          duration={500}
          onClick={() => {
            setShowMenu("");
            removeTransition();
          }}
        >
          <img src="./pics/BAYAZtextonlycream.png" alt="bayaz logo" className="logo"/>
        </Link>
      {/* <div className="logoNav"> */}
        <div className="navParent">
            <div className={`navIcon ${showMenu}`} onClick={menuClick}>
              <div></div>
              <div></div>
              <div></div>
            </div>
{/* Music / Gallery / Videos / Shows / Merch / Contact / Press Kit */}
          <nav className={`${showMenu} ${transition}`}>
            <Link
              to="music"
              className="navLink"
              activeClass="active"
              spy={true}
              smooth={false}
              duration={500}
              onClick={menuClick}
            >
              Music
            </Link>
            <Link
              to="gallery"
              className="navLink"
              activeClass="active"
              spy={true}
              smooth={false}
              duration={500}
              onClick={menuClick}
            >
              Gallery
            </Link>
            <Link
              to="video"
              className="navLink"
              activeClass="active"
              spy={true}
              smooth={false}
              duration={500}
              onClick={menuClick}
            >
              Videos
            </Link>
            <Link
              to="shows"
              className="navLink"
              activeClass="active"
              spy={true}
              smooth={false}
              duration={500}
              onClick={menuClick}
            >
              Shows
            </Link>
            <Link
              to="about"
              className="navLink"
              activeClass="active"
              spy={true}
              smooth={false}
              duration={500}
              onClick={menuClick}
            >
              About
            </Link>
            <Link
              to="contact"
              className="navLink"
              activeClass="active"
              spy={true}
              smooth={false}
              duration={500}
              onClick={menuClick}
            >
              Contact
            </Link>
          </nav>
        {/* </div> */}
      </div>
    </header>
  );
}

export default Header;