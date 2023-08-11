import React from 'react'
import { cn } from '@/lib/utils'

interface WrapperProps {
    children: React.ReactNode
    className?: string
    id?: string
}

const Wrapper = React.forwardRef<HTMLDivElement, WrapperProps>(({ children, className, ...props }, ref) => {
    return (
        <section {...props} ref={ref} className={cn("w-full max-w-7xl mx-auto p-2", className)}>
            {children}
        </section>
    )
})

Wrapper.displayName = "Wrapper"

export { Wrapper }