import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const routes = [
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ]

  return (
    <nav className="bg-red-500">
      {routes.map((route) => (
        <NavLink className="ml-4" to={route.path} key={route.name}>
          {route.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Header;