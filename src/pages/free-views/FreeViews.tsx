import { Outlet } from "react-router-dom";
import Header from "./shared/components/Header";

function FreeViews() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-col w-full h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default FreeViews;