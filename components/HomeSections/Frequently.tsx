import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Wrapper } from '../Wrapper'
import { Separator } from '../ui/separator'

export default function Frequently() {
    return (
        <Wrapper className='pb-20 px-4 md:px-0'>
            <Separator className='w-full bg-gradient-to-r from-white/50 to-violet-500/50 mb-10 opacity-30 ' />
            <h2 className='text-4xl tracking-tighter font-extrabold mb-10'>Frequently asked questions</h2>
            <Accordion type="single" collapsible className='space-y-3'>
                <AccordionItem value="item-1" >
                    <AccordionTrigger>Can you buy domain names and sell them?</AccordionTrigger>
                    <AccordionContent className='w-full max-w-2xl'>
                        If you have a website domain for sale, Market is the place for you. Our dedicated platform offers in-house auctions and Buy It Now listings, visited by thousands of people every day. List your domains at a fixed price and we{"’"}ll take care of the rest.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How do I pick the right domain name?</AccordionTrigger>
                    <AccordionContent className='w-full max-w-2xl'>
                        So you{"’"}ve discovered that simply Googling {"’"}register website domain{"’"} and finding a great provider isn{"’"}t the whole story. You also need to consider which domain extension to pick, and which name to register. So check out our simple guide to choosing the best domain.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Why do you have different offers for the same products?</AccordionTrigger>
                    <AccordionContent className='w-full max-w-2xl'>
                        Products might be the same, but every customer is different. That{"’"}s why we tailor our deals to suit as many people as possible. So you get exactly what you need, for less.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Wrapper>
    )
}
