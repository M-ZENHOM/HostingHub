"use client"
import { Wrapper } from '@/components/Wrapper'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/Icons'
import { webPlans } from '@/config/site'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import React from 'react'
import { CartItem, useCartStore } from '@/store/cart'
import { toast } from '@/components/ui/use-toast'



const VPSPage = () => {
    const [isAnnual, setYear] = React.useState(false)
    const { addToCart } = useCartStore()
    const handleAdd = (item: CartItem) => {
        addToCart(item)
        toast({
            title: "✅ Added to cart",
        })
    }
    return (
        <Wrapper className='w-full py-20'>
            <div className='absolute left-0 top-0 bg-gradient-to-br from-blue-500 to-50% w-full h-full -z-10' />
            <div className='text-center py-12 flex flex-col justify-center items-center space-y-5'>
                <h2 className='font-extrabold text-5xl'>VPS Hosting</h2>
                <p className='text-muted-foreground'>Choose from a vriety of affordable, high quality shared hosting service</p>
                <div className="flex items-center space-x-2">
                    <Label>Monthly Bill</Label>
                    <Switch onClick={() => setYear(!isAnnual)} />
                    <Label>Annual Bill</Label>
                </div>
            </div>
            <div className='grid grid-cols-fluid gap-5'>
                {webPlans.map((plan) => (
                    <Card key={plan.id} className='space-y-5 py-10 px-2 bg-violet-500/10 hover:border hover:border-violet-500/50 w-full' >
                        <CardHeader className='text-center' >
                            <CardTitle className='text-3xl'>{plan.title}</CardTitle>
                            <CardDescription className='text-xl'>${!isAnnual ? `${plan.monthlyPrice}/mo` : `${(plan.yearlyPrice).toFixed(2)}/yr`}</CardDescription>
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
                            <Button onClick={() => handleAdd({ id: plan.id, title: plan.title, lists: plan.lists, price: !isAnnual ? plan.monthlyPrice : plan.yearlyPrice })} variant="default" >
                                <Icons.Cart className="mr-2 h-4 w-4" /> Add to cart
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </Wrapper>
    )
}

export default VPSPage
