import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Instagram from "@/components/Instagram";
import Sofa from "@/components/Sofa";
import Toppics from "@/components/Top-pics";
import Shop from "./shop/page";
import About from "./about/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main>
      <Hero/>
       <Hero2/>
       <Toppics/>
       <Sofa/>
       <Blog/>
       <Instagram/>
         <Shop/>
         <About/>
          <Contact/>
       
    </main>
  )
}

