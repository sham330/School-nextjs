"use client";
import React from 'react'

import Link from "next/link"
import { usePathname } from 'next/navigation';

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About Us",
        path: "/aboutus",
    },
    {
        name: "Acdamics",
        path: "/acdamics",
    },
    {
        name: "Galery",
        path: "/galery",
    },
    {
        name: "Contact",
        path: "/contact",
    },
    
    
    

]
export const Nav = () => {
    const pathname = usePathname();
  return (
    <nav className='flex gap-8'>
        {links.map((link,index)=>{
            return <Link href={link.path} key={index} className={`${link.path===pathname && "text-white border-b-2 border-white"}captalize font-medium hover:text-white transition-all`}>{link.name}</Link>
        })}
    </nav>
  )
}
