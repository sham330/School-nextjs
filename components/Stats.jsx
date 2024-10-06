"use client";
import  CountUp  from "react-countup";
import React from 'react'
import { Button } from "./ui/button";
import Link from "next/link";


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

export const Stats = () => {
  return (
    <section className="max-w-[1400px] h-[700px]  m-auto pt-40 flex bg-blue-100 ">
        <div className="container rounded-2xl mx-10 bg-blue-200  xl:h-[500px] xl:w-[500px] ">
            <h2 className="h2">About us</h2>
            <h3 className="h3"> We are Mpam family</h3>
            <p className="">We are here to inform that our school ..........................................
                ........................School is an institution designed to provide learning spaces and environments for the teaching of students under the direction of teachers. Here are a few key points about schools:


            </p>
            <Link href="/aboutus">
            <Button>Read More</Button>
            </Link>
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
  )
}