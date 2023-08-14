"use client"
import { Button } from '../ui/button'
import { Icons } from '../Icons'
import React from 'react'
import { Wrapper } from '../Wrapper'
import Image from 'next/image'



const data = [
    {
        title: "Hosting For Every Website",
        desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, consequuntur vitae,
        aut ad doloremque veniam harum neque voluptas aliquam hic distinctio ea aut
        em obcaecati consequatur incidunt ratione iste, voluptatem excepturi.`,
        btnTitle: "Get Started!",
        btnHref: "/",
        img: "/share.svg"
    },
    {
        title: "In a hurry? let’s start!",
        desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, consequuntur vitae,
        aut ad doloremque veniam harum neque voluptas aliquam hic distinctio ea aut
        em obcaecati consequatur incidunt ratione iste, voluptatem excepturi.`,
        btnTitle: "Get Started!",
        btnHref: "/",
        img: "/career.svg"
    },
    {
        title: "Grow with us",
        desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, consequuntur vitae,
        aut ad doloremque veniam harum neque voluptas aliquam hic distinctio ea aut
        em obcaecati consequatur incidunt ratione iste, voluptatem excepturi.`,
        btnTitle: "Get Started!",
        btnHref: "/",
        img: "/growup.svg"
    }
]

const Summary = () => {
    const [slide, setSlide] = React.useState<number>(1)
    const [num, setNum] = React.useState<number>(0)
    const handleSlideNext = () => {
        setSlide(prev => prev + 1)
        setNum(prev => prev + 1)
    }
    const handleSlidePrev = () => {
        setSlide(prev => prev - 1)
        setNum(prev => prev - 1)
    }
    return (
        <Wrapper className='relative bg-gradient-to-b from-violet-500/10  h-fit pb-14 rounded-lg border border-violet-500/40 shadow-btnGlow'>
            <div className='w-full flex items-center justify-between p-8'>
                <Button onClick={handleSlidePrev} disabled={slide === 1} variant={slide === 1 ? "ghost" : "default"}><Icons.leftArrow className='h-4 w-4 mr-1' /> Back</Button>
                <Button onClick={handleSlideNext} disabled={slide === data.length} variant={slide === data.length ? "ghost" : "default"}>Next <Icons.rightArrow className='h-4 w-4 ml-1' /></Button>
            </div>
            {data.slice(num, slide).map((sum, i) => (
                <div key={i} className='flex flex-col-reverse lg:flex-row space-y-5 items-center justify-center lg:justify-between w-full max-w-lg lg:max-w-4xl mx-auto px-6'>
                    <div className='space-y-5'>
                        <h1 className='font-extrabold text-4xl tracking-wide'>{sum.title}</h1>
                        <p className='text-muted-foreground'>{sum.desc}</p>
                        <Button variant="default">{sum.btnTitle}</Button>
                    </div>
                    <Image className='pb-5' width={300} height={300} src={sum.img} alt='' priority />
                </div>
            ))}
        </Wrapper>
    )
}

export default Summary