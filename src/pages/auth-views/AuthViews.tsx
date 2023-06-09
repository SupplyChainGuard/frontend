import { Outlet } from "react-router-dom";
import Header from "./shared/components/Header";
import Navbar from "./shared/components/Navbar";

function AuthViews() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-col w-full h-full">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default AuthViews;