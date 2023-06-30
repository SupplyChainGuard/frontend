import { NavLink, useLocation } from "react-router-dom";
import useNavbarToggle from "../hooks/useNavbarToggle";

function Navbar() {
  const { toggleNavbar } = useNavbarToggle();
  const location = useLocation();

  const routes = [
    { name: "Inventory", path: "/auth/inventory" },
    { name: "Providers", path: "/auth/providers" },
    { name: "Shipments", path: "/auth/shipments" },
    { name: "Orders", path: "/auth/orders" },
    { name: "Shipment tracking", path: "/auth/shipment-tracking" },
    { name: "Order tracking", path: "/auth/order-tracking" },
  ];

  const handleNavlinkClick = () => {
    toggleNavbar();
  };

  return location.pathname !== "/auth/profile" ? (
    <nav className="absolute lg:static lg:h-16 bg-gray-200 lg:bg-white flex lg:content-center flex-wrap w-full lg:w-fit h-full left-[-100%] left-0 transition-all lg:transition-none ease-in duration-500 menu-nav">
      <ul className="flex flex-col lg:flex-row w-full p-4 lg:p-0">
        {routes.map((route) => (
          <NavLink
            className="lg:ml-4 text-base p-2 font-bold text-[#64748B] nav-link"
            to={route.path}
            key={route.name}
            onClick={handleNavlinkClick}
          >
            {route.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  ) : (
    <></>
  );
}

export default Navbar;
