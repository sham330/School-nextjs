"use client";
import { Bookin } from "@/components/Bookin";
import { FaSchool } from "react-icons/fa";
import { MdMail,MdPhone } from 'react-icons/md';



const Contacts = () => {
  return (
    <div className="bg-blue-50">
        <section className="w-full m-auto"  >
        <div className="relative w-full h-[400px] flex items-center justify-center">
        
        
        <img className="absolute inset-0 w-full h-full object-cover filter brightness-50" src="/assets/a.jpg"/>
        <h1 className=" absolute text-white text-3xl font-bold">Contacts</h1>
       </div>
       </section>
       <div className="mt-[20px]  p-[14px] text-center flex-col">
        <h1 className="h1">Feel Free</h1>
        <p className="h3 mb-5">To contact us</p>
        </div>
       <div className="flex-col flex-wrap gap-[60px] p-[20px]">
       <div className="flex justify-around items-center w-full " >  <div class="w-[48%] flex-col justify-center">
           <div className="flex-col bg-blue-100 rounded-2xl pl-8"><h1 className="text-4xl font-semibold">Address <FaSchool className="text-32px to-black"/></h1>
           <p>puthukkadai,kk dist,629 171</p>
           <h1 className="text-4xl font-semibold">Email <MdMail className="text-32px to-black"/></h1>
           <p>Mpamhr@gmail.com</p>
           <h1 className="text-4xl font-semibold">Phone <MdPhone className="text-32px to-black"/></h1>
           <p>044446272561</p>
           
           </div>
       </div>
       <div class="flex w-[48%] justify-center p-[20px]">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1974.1337350600281!2d77.17651064930097!3d8.276155699988681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05aaa0ab98bf13%3A0xb1bcfae03c9da754!2sMunichirai%20Punitha%20Arokiamatha%20Matric%20School!5e0!3m2!1sen!2sin!4v1723259309734!5m2!1sen!2sin" width="450" height="300"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
       </div>
       
       </div>
       <Bookin/>

    </div>
  )
}


export default Contacts;
