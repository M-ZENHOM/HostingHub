import React from 'react'
import { Wrapper } from '../Wrapper'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { buttonVariants } from '../ui/button'
import { Icons } from '../Icons'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Title from '../ResbuleTitle'
import { sevicesIntro } from '@/config/fakeData'

const Services = () => {
    return (
        <Wrapper id="hosting" className='py-28 mx-auto w-full'>
            <Title title='Our Hosting' colored='Services' />
            <div className='grid grid-cols-fluid gap-12 lg:gap-5 place-items-center lg:place-items-stretch'>
                {sevicesIntro.map((plan, i) => (
                    <Card key={i} className='space-y-5 py-10 px-2 bg-violet-500/10 hover:border hover:border-violet-500/50 w-full flex flex-col justify-between' >
                        <CardHeader >
                            <CardTitle>{plan.title}</CardTitle>
                            <CardDescription>Starting at only ${plan.price}/mo</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div>
                                {plan.lists.map((list, index) => (
                                    <div
                                        key={index}
                                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                    >
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium leading-none">
                                                {list}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Link href={plan.href} className={cn("w-full", buttonVariants({ variant: "default" }))} >
                                <Icons.Eye className="mr-2 h-4 w-4" /> See Plans
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </Wrapper>
    )
}

export default Services