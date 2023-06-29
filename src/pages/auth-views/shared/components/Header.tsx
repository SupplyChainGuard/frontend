import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const routes = [
    { name: "SupplyChainGuard", path: "/auth" },
    { name: "Profile", path: "/auth/profile" },
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
