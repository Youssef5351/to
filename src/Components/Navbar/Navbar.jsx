import React, { useEffect } from "react";
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

  return (
    <div id="navbar" className="navbar">
      <a href="/">
        <img src={logo} className="logo" alt="Logo" />
      </a>
      <a href="/sign-up" className={`signin ${isAuthenticated ? "authenticated" : ""}`}>انشاء حساب</a>
      <a href="#About-Us" className={`signin ${isAuthenticated ? "authenticated" : ""}`}>معلومات عنا</a>
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
        <button className="user-icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="iconic" width="0.97em" height="1em" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88s-88-39.4-88-88s39.4-88 88-88m0 344c-58.7 0-111.3-26.6-146.5-68.2c18.8-35.4 55.6-59.8 98.5-59.8c2.4 0 4.8.4 7.1 1.1c13 4.2 26.6 6.9 40.9 6.9c14.3 0 28-2.7 40.9-6.9c2.3-.7 4.7-1.1 7.1-1.1c42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448"></path></svg>
        </button>
      )}
    </div>
  );
};

export default Navbar;
