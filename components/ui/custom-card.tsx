"use client"
import { cn } from '@/lib/utils'
import React from 'react'
import { Icons } from '../Icons'
import { Button } from './button'


interface CardProps {
    title: string
    price: string
    lists: string[]
}

const Card = React.forwardRef<HTMLDivElement | null, CardProps>(({ title, lists, price }, ref) => {
    return (
        <div ref={ref} className='group relative w-full max-w-xl flex flex-col items-center bg-muted justify-center py-10 px-5  hover:bg-gradient-to-b hover:from-violet-500/10  space-y-5 rounded-md transition-all duration-500'>
            <h2 className=' tracking-tight font-extrabold text-2xl'>{title}</h2>
            <Icons.logo className='h-10 w-10' />
            <ul className='space-y-5 text-lg text-center'>
                {lists.map((list, i) => (
                    <li key={i}>{"✔ "}{list}</li>
                ))}
            </ul>
            <h6 className='flex flex-col items-center text-xl '>Starting at only <span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-white'>${price}/mo</span></h6>
            <Button className='absolute -bottom-5 w-full max-w-[200px]' variant="default">See Plans</Button>
        </div>
    )
})

Card.displayName = "Card"

export { Card }