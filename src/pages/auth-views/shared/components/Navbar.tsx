import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const routes = [
    { name: "Inventory", path: "/auth/inventory" },
    { name: "Providers", path: "/auth/providers" },
    { name: "Shipments", path: "/auth/shipments" },
    { name: "Orders", path: "/auth/orders" },
    { name: "Shipment tracking", path: "/auth/shipment-tracking" },
    { name: "Order tracking", path: "/auth/order-tracking" },
  ];

  return (
    <nav className="bg-red-200">
      <ul className="flex">
        {routes.map((route) => (
          <NavLink className="ml-4" to={route.path} key={route.name}>
            {route.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
