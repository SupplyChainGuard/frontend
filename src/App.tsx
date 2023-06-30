import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/free-views/home/pages/HomePage";
import Inventory from "./pages/auth-views/inventory/Inventory";
import Login from "./pages/free-views/login/pages/Login";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import FreeViews from "./pages/free-views/FreeViews";
import AuthViews from "./pages/auth-views/AuthViews";
import Register from "./pages/free-views/register/pages/Register";
import Orders from "./pages/auth-views/orders/Orders";
import Profile from "./pages/auth-views/profile/Profile";
import Providers from "./pages/auth-views/providers/Providers";
import Shipments from "./pages/auth-views/shipments/Shipments";
import ShipmentTracking from "./pages/auth-views/shipment-tracking/ShipmentTracking";
import OrderTracking from "./pages/auth-views/order-tracking/OrderTracking";
import NewShipment from "./pages/auth-views/shipments/pages/NewShipment";
import NewProvider from "./pages/auth-views/providers/pages/NewProvider";
import UpdateProduct from "./pages/auth-views/inventory/pages/UpdateProductForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<FreeViews />} errorElement={<NotFoundPage />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="auth/*" element={<AuthViews />} errorElement={<NotFoundPage />}>
          <Route index element={<Inventory />} />
          <Route path="inventory" >
            <Route index element={<Inventory />} />
            <Route path=":id/update" element={<UpdateProduct />} />
          </Route>
          <Route path="providers/*">
            <Route index element={<Providers />} />
            <Route path="new" element={<NewProvider />} />
          </Route>
          <Route path="shipments/*">
            <Route index element={<Shipments />} />
            <Route path="new" element={<NewShipment />} />
          </Route>
          <Route path="orders" element={<Orders />} />
          <Route path="shipment-tracking" element={<ShipmentTracking />} />
          <Route path="order-tracking" element={<OrderTracking />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
