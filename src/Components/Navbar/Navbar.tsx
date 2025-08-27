"use client"
import { useEffect, useState } from "react";
import { FaBolt } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BsTools } from "react-icons/bs";
import { RiStackLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import SideMenu from "../SideMenu/SideMenu";

const Navbar = () => {

  const [sideMenu, setSideMenu] = useState<boolean>(false)

  const handleMenu = (): void => {
        setSideMenu(!sideMenu)
  }

  useEffect(() => {
  const handleResize = () => {
    if(window.innerWidth >= 1024){
        setSideMenu(true)
    }
    else{
      setSideMenu(false)
    }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  },[])

  return (
    <div className="border-b-1 relative border-gray-400 flex justify-between px-5 py-3 items-center">
   
   {/* Left Side Icons */}
      <div className="flex gap-x-5 items-center justify-between lg:justify-start w-full lg:w-[50%]">
        <div className="flex items-center gap-x-2">
        <FaBolt className="text-yellow-400 text-[1.5rem]"/>
        <h4 className="font-semibold text-shadow-gray-800">BOLT CRM</h4>
        </div>
        <HiOutlineMenuAlt3 className="block lg:hidden text-[1.5rem] cursor-pointer" onClick={():void => handleMenu()} />
        <SideMenu sideMenu = {sideMenu}/>
      </div>
 
    {/* Right side Menu */}
      <div className="hidden lg:flex gap-x-5 items-center justify-end w-[50%]">

        <span className="flex items-center gap-x-2">
          <BsTools/>
          <p className="text-sm font-semibold">Jobs</p>
        </span>
        <div className="flex items-center text-[1.2rem] gap-x-5">
        <RiStackLine className="cursor-pointer"/>
        <IoChatbubblesOutline className="cursor-pointer"/>
        <BsBell className="cursor-pointer"/>
        <IoSettingsOutline className="cursor-pointer"/>
        </div>
          <FaUserCircle className="cursor-pointer text-[1.5rem]"/>
      </div>
      
    </div>
  )
}

export default Navbar
