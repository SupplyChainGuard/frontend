import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const routes = [
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ]

  return (
    <nav className="bg-red-500 h-16 flex content-center flex-wrap">
      <NavLink className="ml-4 text-white text-base mr-auto p-2" to="/">
        SupplyChainGuard
      </NavLink>
      {routes.map((route) => (
        <NavLink className="mr-4 text-white text-base p-2 free-link" to={route.path} key={route.name}>
          {route.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Header;