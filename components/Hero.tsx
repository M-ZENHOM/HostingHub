import { buttonVariants } from './ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Hero = () => {
    return (
        <div className='relative flex flex-col justify-center items-center py-28 space-y-7 '>
            <div className='absolute w-full h-[60vh] -z-10 opacity-30' style={{ backgroundImage: 'url(/grid.svg)' }} />
            <Link
                href="#hosting"
                className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium ">
                <span className='bg-clip-text text-transparent bg-gradient-to-r to-violet-500 from-white'>
                    In a hurry? let{"’"}s start!
                </span>
            </Link>
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-6xl w-full max-w-2xl text-center">
                Everything You Need to <span className='bg-clip-text text-transparent bg-gradient-to-r to-violet-500/70 from-white'>Create a Website</span>
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 w-full max-w-sm lg:max-w-md text-center  text-muted-foreground">
                Up to 78% off Hosting with Free Domain Registration, Free Website Migration, 24/7 Customer Support
            </p>
            <Link href="#hosting" className={cn(buttonVariants({ variant: "glow" }), "px-12 rounded-2xl py-6")}>
                Hosting Services
            </Link>
        </div>
    )
}

export default Hero