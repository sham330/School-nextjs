import React from 'react'
import Link from "next/link";
import {Button} from "./ui/button";
import { Nav } from './Nav';
import { Mobilnav } from './Mobilnav';

export const Header = () => {
  return (
    <header className='py-8 xl:py-10 text-black bg-blue-500 ' >
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
            <h1 className='text-4xl font-semibold'>Mpam</h1>
            </Link>
            <div className="hidden xl:flex items-center gap-8">
            <Nav/>
            <Link href="/contact">
                <Button>Apply Now!</Button>
            </Link>
            </div>


            <div className="xl:hidden">
              <Mobilnav/>
            </div>
        </div>
    </header>
  )
}

