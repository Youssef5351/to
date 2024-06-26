import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Elkoumi.png";


const Navbar = ({ isAuthenticated }) => {
   useEffect(() => {
    const switchTheme = () => {
      const rootElem = document.documentElement;
      const bodyElem = document.body;
      let dataTheme = rootElem.getAttribute('data-theme');
      let newTheme = dataTheme === 'light' ? 'dark' : 'light';
      rootElem.setAttribute('data-theme', newTheme);
      bodyElem.style.backgroundColor = newTheme === 'light' ? '#f2f2f2' : '#111827'; // Set background color accordingly
    };

    document.querySelector("#theme-switcher").addEventListener('click', switchTheme);
    return () => {
      document.querySelector("#theme-switcher").removeEventListener('click', switchTheme);
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const signinLinks = document.querySelectorAll(".signin");

      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        signinLinks.forEach(link => link.classList.add("scrolled"));
      } else {
        navbar.classList.remove("scrolled");
        signinLinks.forEach(link => link.classList.remove("scrolled"));
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

   const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/";
  };


  return (
    <div id="navbar" className="navbar">
      <a href="/">
        <img src={logo} className="logo" alt="Logo" />
      </a>
      <a href="/sign-up" className={`signin ${isAuthenticated ? "authenticated" : ""}`}>انشاء حساب</a>
      <a href="/sign-in" className={`signin ${isAuthenticated ? "authenticated" : ""}`}>تسجيل دخول</a>
      <a href="#Location" className={`signin ${isAuthenticated ? "authenticated" : ""}`}> الموقع</a>
      <div id="theme-switcher" className={isAuthenticated ? "authenticated" : ""}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="icon-sun">
          <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391l-19.9 107.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121l19.9-107.9c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1l90.3-62.3c4.5-3.1 10.2-3.7 15.2-1.6M160 256a96 96 0 1 1 192 0 96 96 0 1 1-192 0m224 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" id="icon-moon">
          <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
        </svg>
      </div>
{isAuthenticated && (
        <div className="user-icon" onClick={toggleDropdown} aria-expanded={showDropdown}>
          <svg xmlns="http://www.w3.org/2000/svg" className="iconic" width="0.97em" height="1em" viewBox="0 0 496 512">
            <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88s-88-39.4-88-88s39.4-88 88-88m0 344c-58.7 0-111.3-26.6-146.5-68.2c18.8-35.4 55.6-59.8 98.5-59.8c2.4 0 4.8.4 7.1 1.1c13 4.2 26.6 6.9 40.9 6.9c14.3 0 28-2.7 40.9-6.9c2.3-.7 4.7-1.1 7.1-1.1c42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448"></path>
          </svg>

          {showDropdown && (
            <ul className="dropdown-menu">
              <li className="n"><a href="/profile">الملف الشخصي
                <svg className="users" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="currentColor"><path d="M224 128a95.76 95.76 0 0 1-31.8 71.37A72 72 0 0 0 128 160a40 40 0 1 0-40-40a40 40 0 0 0 40 40a72 72 0 0 0-64.2 39.37A96 96 0 1 1 224 128" opacity="0.2"></path><path d="m253.66 133.66l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L216 132.69V128A88 88 0 0 0 56.49 76.67a8 8 0 0 1-13-9.34A104 104 0 0 1 232 128v4.69l10.34-10.35a8 8 0 0 1 11.32 11.32m-41.18 55A104 104 0 0 1 24 128v-4.69l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0l24 24a8 8 0 0 1-11.32 11.32L40 123.31V128a87.62 87.62 0 0 0 22.24 58.41a79.66 79.66 0 0 1 36.06-28.75a48 48 0 1 1 59.4 0a79.6 79.6 0 0 1 36.08 28.78a90 90 0 0 0 5.71-7.11a8 8 0 0 1 13 9.34ZM128 152a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0 64a88.2 88.2 0 0 0 53.92-18.49a64 64 0 0 0-107.84 0A87.57 87.57 0 0 0 128 216"></path></g></svg>
              </a>
                            </li>
               <hr className="mana"/>
              <li className="nn"><button onClick={handleLogout}>تسجيل الخروج
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" className="outing"><path fill="currentColor" d="M11 3.5a.5.5 0 0 0-.576-.494l-7 1.07A.5.5 0 0 0 3 4.57v10.86a.5.5 0 0 0 .424.494l7 1.071a.5.5 0 0 0 .576-.494V10h5.172l-.997.874a.5.5 0 0 0 .658.752l1.996-1.75a.5.5 0 0 0 0-.752l-1.996-1.75a.499.499 0 1 0-.658.752l.997.874H11zm-2.5 7.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m4 4.75H12v-5h1v4.5a.5.5 0 0 1-.5.5M12 8V4h.5a.5.5 0 0 1 .5.5V8z"></path></svg>
              </button>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
