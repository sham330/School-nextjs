

import React from 'react'


export const Achieve = () => {
  return (
    <section className="pt-20 ">
      <div className="max-w-[1400px] h-[700px] m-auto flex-col  bg-blue-100">
      <h1 className="h1 text-center pt-10  ">Achivements! </h1>
      <div className="  pt-6 flex gap-4 ">
        <div><img className="object-cover h-[400px] w-[400px] rounded-2xl" src="/assets/a.jpg"/><p className="text-2xl">Our student achived this that on this day</p></div>
        <div><img className="object-cover h-[400px] w-[400px] rounded-2xl" src="/assets/b.jpg"/><p className="text-2xl">Our student achived this that on this day</p></div>
        <div><img className="object-cover h-[400px] w-[400px] rounded-2xl" src="/assets/c.jpg"/><p className="text-2xl">Our student achived this that on this day</p></div>
    </div>
    </div>
    </section>
  )
}
