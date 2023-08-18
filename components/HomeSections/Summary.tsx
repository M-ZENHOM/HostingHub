"use client"
import { Button, buttonVariants } from '../ui/button'
import { Icons } from '../Icons'
import React from 'react'
import { Wrapper } from '../Wrapper'
import Image from 'next/image'
import { summaryData } from '@/config/fakeData'
import Link from 'next/link'
import { cn } from '@/lib/utils'


const Summary = () => {
    const [slide, setSlide] = React.useState<number>(1)
    const [num, setNum] = React.useState<number>(0)
    const nextSlide = () => {
        setSlide(prev => prev + 1)
        setNum(prev => prev + 1)
    }
    const prevSlide = () => {
        setSlide(prev => prev - 1)
        setNum(prev => prev - 1)
    }
    return (
        <Wrapper className='relative bg-gradient-to-b from-violet-500/10  h-fit pb-14 rounded-lg border border-violet-500/40 shadow-btnGlow'>
            <div className='w-full flex items-center justify-between p-8'>
                <Button onClick={prevSlide} disabled={slide === 1} variant={slide === 1 ? "ghost" : "default"}><Icons.leftArrow className='h-4 w-4 mr-1' /> Back</Button>
                <Button onClick={nextSlide} disabled={slide === summaryData.length} variant={slide === summaryData.length ? "ghost" : "default"}>Next <Icons.rightArrow className='h-4 w-4 ml-1' /></Button>
            </div>
            {/* Simple slide just for demo */}
            {summaryData.slice(num, slide).map((sum, i) => (
                <div key={i} className='flex flex-col-reverse lg:flex-row space-y-8 items-center justify-center lg:justify-between w-full max-w-lg lg:max-w-4xl mx-auto px-6'>
                    <div className='space-y-5'>
                        <h1 className='font-extrabold text-4xl tracking-wide'>{sum.title}</h1>
                        <p className='text-muted-foreground w-full max-w-sm'>{sum.desc}</p>
                        <Link href={sum.btnHref} className={cn(buttonVariants({ variant: "default" }))}>{sum.btnTitle}</Link>
                    </div>
                    <Image className='pb-5 w-full max-w-xs h-full  max-h-[16rem]' width={300} height={300} src={sum.img} alt='' priority />
                </div>
            ))}
        </Wrapper>
    )
}

export default Summary