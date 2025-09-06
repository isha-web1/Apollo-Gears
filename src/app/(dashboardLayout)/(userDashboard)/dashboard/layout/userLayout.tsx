"use client";

import { NavbarWrapper } from "@/app/(dashboardLayout)/components/dashboardNavbar/dashboardNavbar";
import { SidebarWrapper } from "@/app/(dashboardLayout)/components/sidebar/modal.styles";



interface Props {
  children: React.ReactNode;
}

export const UserLayout = ({ children }: Props) => {
  return (
    <section className="flex">
      <SidebarWrapper></SidebarWrapper>

      <NavbarWrapper>{children}</NavbarWrapper>
    </section>
  );
};