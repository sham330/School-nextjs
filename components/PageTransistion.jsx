"use client";
import { usePathname } from "next/navigation";


const PageTransistion = ({children}) => {
    const pathname = usePathname();
  return (
    <div key={pathname}>

        {children}
    </div>
  )
  
}

export default PageTransistion;
