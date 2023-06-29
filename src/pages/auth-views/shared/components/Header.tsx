import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const routes = [
    { name: "Profile", path: "/auth/profile" },
  ]

  return (
    <nav className="bg-red-500 h-16 flex content-center flex-wrap">
      <NavLink className="ml-4 text-white text-base mr-auto p-2" to="/auth">
        SupplyChainGuard
      </NavLink>
      {routes.map((route) => (
        <NavLink className="mr-4 text-white text-base p-2 auth-link" to={route.path} key={route.name}>
          {route.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Header;
