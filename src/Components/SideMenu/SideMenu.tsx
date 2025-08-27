import React from 'react'
import { ReactNode } from 'react';
import { MdDashboard, MdListAlt } from "react-icons/md";
import { 
  FaUsers, 
  FaUser, 
  FaFolderOpen, 
  FaUserShield, 
  FaUsersCog 
} from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { LuTarget } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";
import { VscGraphLine } from "react-icons/vsc";
import { SlCalender } from "react-icons/sl";
import { PiSolarPanelLight } from "react-icons/pi";


interface sideMenuProps {
    sideMenu:boolean;
  }

  interface MenuItem {
  title: string;
  path?: string;
  icon?: ReactNode;
  children?: MenuItem[];
}


function SideMenu({sideMenu}:sideMenuProps) {



// Menu Items
const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    children: [
      { title: "Executive Dashboard", icon: <MdDashboard />, path: "/dashboard/executive" }
    ]
  },
  {
    title: "Sales",
    children: [
      { title: "Leads", icon: <FaUser />, path: "/sales/leads" },
      { title: "Opportunities", icon: <LuTarget />, path: "/sales/opportunities" },
      { title: "Customers", icon: <FaUsers />, path: "/sales/customers" }
    ]
  },
  {
    title: "Projects",
    children: [
      { title: "Active Projects", icon: <FaFolderOpen />, path: "/projects/active" },
      { title: "Tasks", icon: <MdListAlt />, path: "/projects/tasks" }
    ]
  },
  {
    title: "Finance",
    children: [
      { title: "Invoices & Payments", icon: <FaRegFileLines />, path: "/finance/invoices" },
      { title: "Funding / Financing", icon: <IoWalletOutline />, path: "/finance/funding" }
    ]
  },
  {
    title: "Reports",
    children: [
      { title: "Sales Performance", icon: <VscGraphLine />, path: "/reports/sales" },
      { title: "Project Timelines", icon: <SlCalender />, path: "/reports/projects" },
      { title: "Energy Metrics", icon: <PiSolarPanelLight />, path: "/reports/energy" }
    ]
  },
  {
    title: "Settings",
    children: [
      { title: "Users & Roles", icon: <FaUserShield />, path: "/settings/users" },
      { title: "Teams & Permissions", icon: <FaUsersCog />, path: "/settings/teams" }
    ]
  }
];

  return (
    <div className={`${sideMenu ? "translate-x-0" : "-translate-x-full"} transition-all duration-500 ease-in-out min-h-screen max-w-[17rem] py-7 px-3 w-full border-r-4 border-gray-300 absolute top-[3rem] left-0`}>
      <div className='space-y-5'>
     {menuItems.map((menus, index) => ( 
      <div key={index} >
      <h4 className='font-semibold text-gray-800 pb-2 px-2'>{menus.title}</h4>
      <ul>
        {menus.children?.map((child,idx) => (
        <li key={idx}><a href={child.path} className='flex items-center gap-x-2 p-2 hover:bg-gray-100 rounded-md text-gray-500 text-sm hover:text-gray-950'>{child.icon}{child.title}</a></li>
        ))}
      </ul>
      </div>
     ))}
    </div>
    </div>
  )
}

export default SideMenu
