"use client";
const img =[
  {
      img:"/assets/a.jpg",
  },
  {
    img:"/assets/a.jpg",
},
{
 
  img:"/assets/a.jpg",
},
{
  
  img:"/assets/a.jpg",
},
 
]

const Galery = () => {
  return (
    <div>
        <section className="w-full m-auto"  >
        <div className="relative w-full h-[400px] flex items-center justify-center">
        
        
        <img className="absolute inset-0 w-full h-full object-cover filter brightness-50" src="/assets/a.jpg"/>
        <h1 className=" absolute text-white text-3xl font-bold">Galery</h1>
       </div>
       </section>
       <div className="flex-1 p-20 grid grid-cols-3 gap-3">
       {img.map((item,index)=>{
       return<div key={index}><img className="h-[250px] w-[350px] object-cover  " src={item.img}/></div>
                })}
</div>
       </div>

  )
}

export default Galery;
