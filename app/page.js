import { Slider } from "@/components/Slider";
import { Stats } from '@/components/Stats';
import { Achieve } from '@/components/Achieve';
import { Galery } from '@/components/Galery';
import { Bookin } from '@/components/Bookin';



export default function Home() {
 
  return (
  
    <main>
      <div><Slider/></div>

          <div><Stats/></div>
          <div><Achieve/></div>
          <div><Galery/></div>
          <div><Bookin/></div>

    </main>
  
  );
}
