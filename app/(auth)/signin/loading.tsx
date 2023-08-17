import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function loading() {
    return (
        <div className="grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-3 lg:grid-cols-2">
            <div className="relative">
                <Skeleton className="h-4 w-[200px] absolute top-10 left-5 " />
                <div className='flex-1 h-screen bg-black absolute -z-10 opacity-25 lg:relative lg:opacity-50' />
            </div>

            <main className="container absolute top-1/2 col-span-1 flex -translate-y-1/2 items-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1">
                <div className="flex flex-col items-center justify-center space-x-4 space-y-4 m-auto">
                    <div className="space-y-4">
                        <Skeleton className="h-4 w-[150px]" />
                        <Skeleton className="h-4 w-[250px]" />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                        <Skeleton className="h-12 w-20 rounded-md" />
                        <Skeleton className="h-12 w-20 rounded-md" />
                        <Skeleton className="h-12 w-20 rounded-md" />
                    </div>
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                    <Skeleton className="h-12 w-full rounded-md" />
                </div>
            </main>
        </div>
    )
}
