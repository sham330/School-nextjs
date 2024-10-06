"use client";


const acadamic =[
    {
        head:"Computer Science",
        p:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut vel reprehenderit saepe excepturi est nam laboriosam. Odio a tempora nulla.",
        img:"/assets/a.jpg",
    },
    {
    head:"Maths Biology",
    p:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut vel reprehenderit saepe excepturi est nam laboriosam. Odio a tempora nulla.",
    img:"/assets/a.jpg",
},
{
    head:"Commerce",
    p:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut vel reprehenderit saepe excepturi est nam laboriosam. Odio a tempora nulla.",
    img:"/assets/a.jpg",
},
{
    head:"Science",
    p:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut vel reprehenderit saepe excepturi est nam laboriosam. Odio a tempora nulla.",
    img:"/assets/a.jpg",
},
   
]
const exta =[
    {
        head:"Sports",
        p:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut vel reprehenderit saepe excepturi est nam laboriosam. Odio a tempora nulla.",
        img:"/assets/a.jpg",
    },
    {
    head:"Abacus",
    p:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut vel reprehenderit saepe excepturi est nam laboriosam. Odio a tempora nulla.",
    img:"/assets/d.jpg",
},
{
    head:"Drawing",
    p:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut vel reprehenderit saepe excepturi est nam laboriosam. Odio a tempora nulla.",
    img:"/assets/c.jpg",
},
{
    head:"Music",
    p:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut vel reprehenderit saepe excepturi est nam laboriosam. Odio a tempora nulla.",
    img:"/assets/b.jpg",
},
   
]

const Acdamics = () => {
  return (
    <div className= " bg-blue-50 flex-none">
    <section className="w-full m-auto"  >
        <div className="relative w-full h-[400px] flex items-center justify-center">
        
        
        <img className="absolute inset-0 w-full h-full object-cover filter brightness-50" src="/assets/a.jpg"/>
        <h1 className=" absolute text-white text-3xl font-bold">Acdamics</h1>
       </div>
       </section>
       <div class=" p-[30px]  text-center">
        <h3 class="h3 mb-1">What we do</h3>
        <h1 class="h1">We Work For Your Childrens Future</h1>
        <p>Make your proffesional Life with us</p>
    </div>
       <div className=" bg-blue-100 flex-col flex-wrap gap-[60px] p-[20px]">

       
        {acadamic.map((item,index)=>{
           return <div key={index} className="flex justify-around items-center w-full border-t-2 border-b-2 border-black" >  <div class="w-[48%] flex-col justify-center">
           <h1 className="text-4xl font-semibold">{item.head}</h1>
           <p>{item.p}</p>
       </div>
       <div class="flex w-[48%] justify-center p-[20px]">
           <img className="object-cover w-[80%] h-[75%]" src={item.img}
               alt=""/>
       </div>
       </div>
       })}
   </div>
   <div className="mt-[20px]  p-[14px] text-center flex-col">
        <h1 className="h1">Extracurricular Activities</h1>
        <p className="h3 mb-5">Change your roles with some avtivities</p>
        
        {exta.map((item,index)=>{

        return<div key={index} className="flex justify-around items-center w-full bg-blue-100 border-t-2 border-b-2 border-black" > 
         <div class="w-[48%] flex-col justify-center">
        <h1 className="text-4xl font-semibold">{item.head}</h1>
        <p>{item.p}</p>
    </div>
    <div class="flex w-[48%] justify-center p-[20px]">
        <img className="object-cover w-[80%] h-[75%]" src={item.img}
            alt=""/>
    </div>
    </div>
   })}
   </div>
   </div>
  )
}
export default Acdamics;
