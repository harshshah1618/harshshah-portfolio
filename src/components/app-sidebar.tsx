import * as React from "react";
import { Link } from "react-router";

import { DarkModeToggleButton } from "@/components/mode-toggle";
import { NavMain } from "@/components/nav-main";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { sidebar } from "@/data/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          tooltip="Toggle Sidebar"
          className="w-8 h-8 cursor-pointer"
          asChild
        >
          <SidebarTrigger />
        </SidebarMenuButton>

        <div className="flex flex-col w-full items-center justify-center gap-2 -mt-2 mb-3 group-data-[collapsible=icon]:mb-0">
          <Link to="/" className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
            <Avatar className="w-24 h-24 group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:h-0 transition-all duration-200">
              {/* <AvatarImage src={sidebar.profileImage} /> */}
              <AvatarFallback className="bg-gradient-to-br from-pink-500 to-yellow-500 text-white text-3xl font-bold">
                HS
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-semibold group-data-[collapsible=icon]:hidden">
              {sidebar.userName}
            </span>
          </Link>
        </div>

        <Separator orientation="horizontal" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebar.sections} />
      </SidebarContent>
      <SidebarFooter>
        <DarkModeToggleButton />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
