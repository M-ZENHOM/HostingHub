import { buttonVariants } from '../ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Title from '../ResbuleTitle'
import AnimationDiv from '../AnimationDiv'

const Hero = () => {
    return (
        <div className='relative flex flex-col justify-center items-center py-28 space-y-7 '>
            <div className='absolute w-full h-[60vh] -z-10 opacity-30' style={{ backgroundImage: 'url(/grid.svg)' }} />
            <AnimationDiv delay={0.2}>
                <Link
                    href="#hosting"
                    className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium ">
                    <span className='bg-clip-text text-transparent bg-gradient-to-r to-violet-500 from-white'>
                        In a hurry? let{"’"}s start!
                    </span>
                </Link>
            </AnimationDiv>
            <AnimationDiv delay={0.4}>
                <Title className='lg:text-6xl py-0' title='Everything You Need to' colored='Create a Website' />
            </AnimationDiv>
            <AnimationDiv delay={0.6}>
                <p className="leading-7 [&:not(:first-child)]:mt-6 w-full max-w-sm lg:max-w-md text-center  text-muted-foreground">
                    Up to 78% off Hosting with Free Domain Registration, Free Website Migration, 24/7 Customer Suppor</p>
            </AnimationDiv>
            <AnimationDiv delay={0.8}>
                <Link href="#hosting" className={cn(buttonVariants({ variant: "glow" }), "px-12 rounded-2xl py-6")}>
                    Hosting Services
                </Link>
            </AnimationDiv>
        </div>
    )
}

export default Hero