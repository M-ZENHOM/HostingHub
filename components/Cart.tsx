import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Icons } from "./Icons"
import { CartItem, useCartStore } from "@/store/cart"
import { Badge } from "./ui/badge"
import { useTransition } from "react"
import { toast } from "./ui/use-toast"
import useStore from "@/hooks/useStore"
import { ScrollArea } from "./ui/scroll-area"

export function Cart() {
    const [isPending, startTransition] = useTransition()
    const { removeFromCart } = useCartStore()
    const cart = useStore(useCartStore, (state) => state.cart)
    const totalPrice = cart?.reduce((total: number, item: CartItem) => {
        total += item.price;
        return total;
    }, 0);

    return (


        <Sheet>
            <SheetTrigger asChild >
                <Button variant="outline" className="relative">
                    {cart && cart.length !== 0 && (<Badge className="absolute top-0 -right-2 w-4 h-5 flex items-center justify-center" variant="default">{cart?.length}</Badge>)}
                    <Icons.Cart />
                </Button>
            </SheetTrigger>
            <SheetContent >
                <ScrollArea className="w-full h-full">
                    <SheetHeader>
                        <SheetTitle>Cart ({cart?.length})</SheetTitle>
                    </SheetHeader>
                    {cart?.length !== 0 ? (
                        <div className="flex flex-col  w-full h-[95%]">
                            {cart?.map((item) => (
                                <div key={item.id} className="grid gap-4 py-4">
                                    <div className="border-y py-4 flex items-center justify-between">
                                        <div>
                                            <h2>{item.title}</h2>
                                            <p className="text-muted-foreground">{item.lists.slice(0, 2).join().split(" , ")}</p>
                                            <p className="text-muted-foreground">Price: ${item.price.toFixed(2)}</p>
                                        </div>
                                        <Button onClick={() => {
                                            startTransition(async () => {
                                                try {
                                                    await removeFromCart(item.id)
                                                } catch (error) {
                                                    error instanceof Error
                                                        ? toast({ title: error.message })
                                                        : toast({ title: "Something went wrong." })
                                                }
                                            })
                                        }}
                                            disabled={isPending} variant="outline">
                                            <Icons.Delete className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}

                            <SheetFooter>
                                <div className="flex flex-col w-full">
                                    <div className="border-y py-4 w-full">
                                        <div className="flex justify-between">Total: <span>${totalPrice?.toFixed(2)}</span></div>
                                    </div>
                                    <Button className="w-full">Checkout</Button>
                                </div>
                            </SheetFooter>
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center w-full h-full text-2xl space-y-5 py-28">
                            <Icons.Cart className="h-8 w-8" />
                            <h2>You cart is empty</h2>
                        </div>
                    )}
                </ScrollArea>
            </SheetContent>
        </Sheet>

    )
}
