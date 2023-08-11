import { cn } from '@/lib/utils'
import React from 'react'

interface ResbuleTitleProps {
    title: string
    colored: string
    className?: string
}

const Title = React.forwardRef<HTMLHeadingElement, ResbuleTitleProps>(({ title, colored, className, ...props }, ref) => {
    return <h1 ref={ref} {...props} className={cn("scroll-m-20 py-10 text-3xl font-extrabold tracking-tight lg:text-4xl w-full max-w-2xl mx-auto text-center", className)}>
        {title} <span className='bg-clip-text text-transparent bg-gradient-to-r to-violet-500/70 from-white'>{colored}</span>
    </h1>
})


Title.displayName = "Title"

export default Title

