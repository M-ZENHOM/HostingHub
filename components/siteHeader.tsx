"use client"
import * as React from "react"
import { Button } from "./ui/button"
import { MainNav } from "./main-nav"
import { Wrapper } from "./Wrapper"
import { MobileNav } from "./mobile-nav"
import { Cart } from "./Cart"



export function SiteHeader() {
    return (
        <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
            <Wrapper className="flex items-center justify-between p-3">
                <div className="flex space-x-2 mr-3">
                    <h2 className="font-bold">SupaHosting</h2>
                </div>
                <MainNav />
                <div className="flex space-x-1">
                    <Button variant="glow">
                        Login
                    </Button>
                    <Cart />
                </div>
                <MobileNav />
            </Wrapper>
        </header>
    )
}


