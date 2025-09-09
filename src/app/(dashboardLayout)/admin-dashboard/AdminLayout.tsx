"use client";

import { NavbarWrapper } from "../components/dashboardNavbar/dashboardNavbar";
import AdminSidebarWrapper from "../components/sidebar/adminSidebar";


interface Props {
  children: React.ReactNode;
}

 const AdminLayout = ({ children }: Props) => {
  return (
    <section className="flex">
      <AdminSidebarWrapper></AdminSidebarWrapper>
      <NavbarWrapper>{children}</NavbarWrapper>
    </section>
  );
};


export default AdminLayout;
