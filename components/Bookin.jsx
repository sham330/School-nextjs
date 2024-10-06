import React from 'react'
import { Button } from './ui/button'

export const Bookin = () => {
  return (
    <section className="pt-20 ">
        
    <div className="max-w-[1400px] h-[350px] m-auto flex-none bg-blue-100">
    <h1 className="h3 flex-1 text-center pt-5">Lets Apply for your Child </h1>
        
        <div className="flex justify-between s">
            <img className="h-[270px] w-[500px] object-cover mx-6 pt-10 " src="/assets/d.jpg"/>
            <div className="flex-col gap-2 pt-10 w-[600px]">
                <h1 className="h3">Admission open for 2024</h1>
                <p>Our mpam insitution has one of the most excellence that this and thath this thath
                    thatht that thaht thaht this of the main of the normal examplee
                </p>
                <Button>Apply Now!</Button>
            </div>


    </div>
        

    </div>
    </section>
  )
}
