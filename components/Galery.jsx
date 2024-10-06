import React from 'react'
import { Button } from './ui/button'

export const Galery = () => {
  return (
    <section className="pt-20 ">
        <div className="flex-col  max-w-[1400px] h-[700px] m-auto   bg-blue-100">
            <h1 className="h2 text-center pt-10">OUR CAMPUS LIFE</h1>
            <div className="flex-1 justify-items-center  pt-5 grid grid-cols-3 gap-2">
                
                <img className="h-[250px] w-[350px] object-cover rounded-2xl" src="/assets/b.jpg"/>
                <img className="h-[250px] w-[350px] object-cover rounded-2xl" src="/assets/b.jpg"/>
                <img className="h-[250px] w-[350px] object-cover rounded-2xl" src="/assets/b.jpg"/>
               
                
                <img className="h-[250px] w-[350px] object-cover rounded-2xl " src="/assets/b.jpg"/>
                <img className="h-[250px] w-[350px] object-cover rounded-2xl " src="/assets/b.jpg"/>
                <img className="h-[250px] w-[350px] object-cover rounded-2xl" src="/assets/b.jpg"/>
                </div>
                <div className="flex-1 text-center pt-8">
                <Button >View more</Button>
                </div>
         </div>
    </section>
  )
}
