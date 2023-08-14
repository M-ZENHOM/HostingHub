"use client"
import * as React from "react"
import { MainNav } from "./main-nav"
import { Wrapper } from "../Wrapper"
import { MobileNav } from "./mobile-nav"
import { Cart } from "../Cart"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button"



export function SiteHeader() {
    return (
        <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
            <Wrapper className="flex items-center justify-between p-3">
                <div className="flex space-x-2 mr-3">
                    <h2 className="font-bold">SupaHosting</h2>
                </div>
                <MainNav />
                <div className="flex space-x-1">
                    <Link href="/signin" className={cn(buttonVariants({ variant: "glow" }))} >
                        Sign In
                    </Link>
                    <Cart />
                </div>
                <MobileNav />
            </Wrapper>
        </header>
    )
}


