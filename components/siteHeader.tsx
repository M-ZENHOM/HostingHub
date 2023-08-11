"use client"
import * as React from "react"
import Link from "next/link"
import { Icons } from "./Icons"
import { ModeToggle } from "./mode-toggle"
import { Button, buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"
import { MainNav } from "./main-nav"
import { Wrapper } from "./Wrapper"
import { MobileNav } from "./mobile-nav"



export function SiteHeader() {
    return (
        <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
            <Wrapper className="flex items-center justify-between p-3">
                <div className="flex space-x-2 mr-3">
                    <Icons.logo />
                    <h2 className="font-bold">Hosting Hub</h2>
                </div>
                <MainNav />
                <div className="flex space-x-1">
                    <Button variant="ghost">
                        Login
                    </Button>
                    <Button variant="glow" className=" ">
                        Start free trail
                    </Button>
                </div>
                <MobileNav />
                {/* <div className="flex item-center  justify-center">
                    <Link target="_blank" href="https://github.com/M-ZENHOM" rel="noreferrer">
                        <div className={cn(
                            buttonVariants({
                                variant: "ghost",
                            }),
                            "w-9 px-0"
                        )}>
                            <Icons.gitHub className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                        </div>

                    </Link>
                    <Link target="_blank" href="https://twitter.com/MAD_ZENHOM" rel="noreferrer">
                        <div className={cn(
                            buttonVariants({
                                variant: "ghost",
                            }),
                            "w-9 px-0"
                        )}>
                            <Icons.twitter className="h-4 w-4 fill-current" />
                            <span className="sr-only">Twitter</span>
                        </div>
                    </Link>
                    <ModeToggle />
                </div> */}

            </Wrapper>
        </header>
    )
}


