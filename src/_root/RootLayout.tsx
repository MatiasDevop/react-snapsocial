import Bottombar from "@/components/shared/Bottombar";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";

import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        {/* <Outlet /> this shows what is going to be in our homePage */}
        <Outlet />
      </section>

      <Bottombar />
    </div>
  );
}

export default RootLayout;
