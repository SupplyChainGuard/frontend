import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const routes = [
    { name: "Inventory", path: "/auth" },
    { name: "Providers", path: "/auth/providers" },
    { name: "Shipments", path: "/auth/shipments" },
    { name: "Orders", path: "/auth/orders" },
    { name: "Shipment tracking", path: "/auth/shipment-tracking" },
    { name: "Order tracking", path: "/auth/order-tracking" },
  ];

  return (
    <nav className="h-16 flex content-center flex-wrap">
      <ul className="flex">
        {routes.map((route) => (
          <NavLink className="ml-4 text-base p-2 font-bold text-[#64748B] nav-link" to={route.path} key={route.name} end>
            {route.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
