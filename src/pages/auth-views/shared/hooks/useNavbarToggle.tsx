import { useState } from "react";

function useNavbarToggle() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    const nav = document.querySelector(".menu-nav");
    nav?.classList.toggle("left-0");
    setNavbarOpen(!navbarOpen);
  };
  return { navbarOpen, toggleNavbar };
}

export default useNavbarToggle;