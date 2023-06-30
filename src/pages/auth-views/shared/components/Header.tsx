import { NavLink, useLocation } from "react-router-dom";
import useNavbarToggle from "../hooks/useNavbarToggle";

function Header() {
  const { toggleNavbar } = useNavbarToggle();
  const location = useLocation();

  const routes = [{ name: "Profile", path: "/auth/profile" }];

  const handleMenuClick = () => {
    toggleNavbar();
  };

  return (
    <nav className="bg-red-500 h-16 flex content-center flex-wrap">
      {location.pathname !== "/auth/profile" && (
        <button className="lg:hidden ml-4 text-white" onClick={handleMenuClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      )}
      <NavLink
        className="mx-auto lg:ml-4 text-white text-base mr-auto p-2"
        to="/auth"
      >
        SupplyChainGuard
      </NavLink>
      {routes.map((route) => (
        <NavLink
          className="mr-4 text-white text-base p-2 auth-link"
          to={route.path}
          key={route.name}
        >
          {route.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Header;
