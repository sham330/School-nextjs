"use client";
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {CiMenuFries} from "react-icons/ci";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "About US",
        path: "/about",
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
    
];

export const Mobilnav = () => {
    const pathname = usePathname();
  return <Sheet>
    <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-white'/>
    </SheetTrigger>
    <SheetContent className="flex flex-col">
        <div className='mt-32 mb-40 text-center text-2xl  '>
            <h1 className='text-4xl font-semibold '>Mpam</h1>
        </div>
        <nav className='flex flex-col justify-center items-center gap-8'>
        {links.map((link,index)=>{
            return <Link href={link.path} key={index} className={ `${link.path===pathname && "text-blue-500 border-b-2 border-blue-500"}"text-xl capitalize hover:text-white transition-all"`}>{link.name}</Link>
        })}
        </nav>
    </SheetContent>
  </Sheet>
}
