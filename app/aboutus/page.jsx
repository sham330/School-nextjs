"use client";
import  CountUp  from "react-countup";
import React from 'react'




const stats =[
    {
        num: 30,
        text: "Years of excellence",
    },
    {
        num: 2000,
        text: "Students seek wisdom",
    },
    {
        num: 50,
        text: "Teaching Staffs",
    },
    {
        num: 25,
        text: "Non Teaching",
    },
]
const about =[
    {
        head:"Vision",
        p:"Visio is the best bla bla",
    },
   
    {
        head:"Motive",
        p:"We are here to inform that our school ..................................................................School is an institution designed to provide learning spaces and environments",

    },
    {
        head:"Mission",
        p:"wee aree the misson ....................",
    },
    {
        head:"Motto",
        p:"Motto is the best of alll",
    }
]


const Aboutus = () => {
  return (
    
    <section className="w-full m-auto"  >
        <div className="relative w-full h-[400px] flex items-center justify-center">
        
        
        <img className="absolute inset-0 w-full h-full object-cover filter brightness-50" src="/assets/a.jpg"/>
        <h1 className=" absolute text-white text-3xl font-bold">About Us</h1>
       </div>
       <section className="max-w-[1400px] h-[600px]  m-auto pt-20 flex bg-blue-100 ">
        <div className="container rounded-2xl mx-10 bg-blue-200  xl:h-[500px] xl:w-[500px] ">
            <h2 className="h2">About us</h2>
            <h3 className="h3"> We are Mpam family</h3>
            <p className="">We are here to inform that our school ..........................................
                ........................School is an institution designed to provide learning spaces and environments for the teaching of students under the direction of teachers. Here are a few key points about schools:


            </p>
            
        </div>
        <div className="container  flex-col flex-1 ">
            <h1 className="items-center justify-center text-2xl font-extrabold xl:text-4xl " >We have</h1>
            <div className="max-w-[400px] h-[350px] object-cover"><img src="/assets/a.jpg"/></div>
            <div className="flex  flex-wrap gap-6 max-w-{80vw] mx-auto xl:max-w-none ">
                {stats.map((item,index)=>{
                    return <div  key={index} className="">
                        <CountUp end={item.num} duration={5} delay={2} className="text-2xl xl:text-4xl font-extrabold "/>
                         <p className={ `${ item.text.length < 15 ? "max-w-[100px] " : "max-w-[150px]"} leading-snug text-black` } >{item.text}</p>
                         </div> 
                         
                })}
            </div>
        </div>
    </section>
    <section className="pt-20 ">
      <div className="max-w-[1400px] h-[700px] m-auto flex-col  bg-blue-100">
      <h1 className="h1 text-center pt-10  ">Our Management</h1>
      <div className=" pt-6 flex gap-6">
        <div className="text-center"><img className="object-cover h-[400px] w-[400px] rounded-2xl" src="/assets/a.jpg"/><p className="text-2xl font-bold">Principal</p></div>
        <div className="text-center"><img className="object-cover h-[400px] w-[400px] rounded-2xl" src="/assets/b.jpg"/><p className="text-2xl font-bold">Corespondent</p></div>
        <div className="text-center"><img className="object-cover h-[400px] w-[400px] rounded-2xl" src="/assets/c.jpg"/><p className="text-2xl font-bold">Chairman</p></div>
    </div>
    </div>
    </section>
    <section className="pt-20">
        <div className="max-w-[1400px] h-[470px] m-auto flex-col  bg-blue-50">
            <div className="pt-5 pb-5">
            {about.map((item,index)=>{
                return <div className="flex-col pb-5 pt-5 ml-10" key={index}>
                    <h1 className="text-4xl font-semibold">{item.head}</h1>
                    <p>{item.p}</p> </div>
            })}
            </div>
        </div>
    </section>


    </section>
  )
}
export default Aboutus;
