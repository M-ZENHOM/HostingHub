<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 9e0e5490d27c74a375ccf9ef07fb9ce5434b616a
import Hero from "@/components/HomeSections/Hero";
import Services from "@/components/HomeSections/Services";
import Summary from "@/components/HomeSections/Summary";
import DataCenters from "@/components/HomeSections/data-centers";
import Footer from "@/components/layouts/footer";
import NewLetter from "@/components/HomeSections/news-letter";
<<<<<<< HEAD
import { SiteHeader } from "@/components/layouts/siteHeader";


export default function Home() {
      return (
            <main>
                  <SiteHeader />
                  <div className='absolute top-0 w-full h-full max-w-[1360px] mx-auto bg-gradient-to-tl from-indigo-500 via-red-500/40 to-pink-500/50 opacity-10 blur-[100px] saturate-150 -z-10' />
                  <Hero />
                  <Summary />
                  <Services />
                  <DataCenters />
                  <NewLetter />
                  <Footer />
            </main>
      )
=======
import { SiteHeader } from "@/components/layouts/siteHeader";;
=======
import Hero from "@/components/Hero";
import { Icons } from "@/components/Icons";
import Services from "@/components/Services";
import Summary from "@/components/Summary";
import DataCenters from "@/components/data-centers";
import NewLetter from "@/components/news-letter";

;
>>>>>>> be8d09698f7c46b805005d946a509057cb29e2fe


export default function Home() {
  return (
    <main>
<<<<<<< HEAD
      <SiteHeader />
=======
>>>>>>> be8d09698f7c46b805005d946a509057cb29e2fe
      <div className='absolute top-0 w-full h-full max-w-[1360px] mx-auto bg-gradient-to-tl from-indigo-500 via-red-500/40 to-pink-500/50 opacity-10 blur-[100px] saturate-150 -z-10' />
      <Hero />
      <Summary />
      <Services />
      <DataCenters />
      <NewLetter />
<<<<<<< HEAD
      <Footer />
=======
>>>>>>> be8d09698f7c46b805005d946a509057cb29e2fe
    </main>
  )
>>>>>>> 9e0e5490d27c74a375ccf9ef07fb9ce5434b616a
}
