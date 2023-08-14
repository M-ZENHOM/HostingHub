import Hero from "@/components/HomeSections/Hero";
import Services from "@/components/HomeSections/Services";
import Summary from "@/components/HomeSections/Summary";
import DataCenters from "@/components/HomeSections/data-centers";
import Footer from "@/components/layouts/footer";
import NewLetter from "@/components/HomeSections/news-letter";
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
}
