"use client";
import { usePathname } from "next/navigation";
import DesktopNavbarComponent from "./DesktopNavbarComponent";
import MobileNavbarComponent from "./MobileNavbarComponent";
export interface MenuItem {
  url: string;
  name: string;
}
const NavbarComponent = () => {
  const pathname = usePathname();
  if (pathname.startsWith('/dashboard')) return null
  else 
  return (
    <section>
      <div className="container">
        {/* display when Desktop Screen */}
        <DesktopNavbarComponent />

        {/* display when Mobile Screen */}
        <MobileNavbarComponent />
      </div>
    </section>
  );
};
export { NavbarComponent };
