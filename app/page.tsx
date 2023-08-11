import Hero from "@/components/Hero";
import { Icons } from "@/components/Icons";
import Services from "@/components/Services";
import Summary from "@/components/Summary";
import DataCenters from "@/components/data-centers";
import NewLetter from "@/components/news-letter";

;


export default function Home() {
  return (
    <main>
      <div className='absolute top-0 w-full h-full max-w-[1360px] mx-auto bg-gradient-to-tl from-indigo-500 via-red-500/40 to-pink-500/50 opacity-10 blur-[100px] saturate-150 -z-10' />
      <Hero />
      <Summary />
      <Services />
      <DataCenters />
      <NewLetter />
    </main>
  )
}
