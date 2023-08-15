import Link from 'next/link'
import React from 'react'
import { Wrapper } from '../Wrapper'
import { FooterTabs } from '@/config/layouts'

export default function Footer() {
    return (
        <footer className="min-h-[30vh] w-full border-t bg-background py-10 text-foreground px-4 md:px-0" >
            <Wrapper>
                <div className="space-y-8 xl:col-span-2">
                    {/* <h3 className="text-md text-muted-foreground lg:text-2xl">
                        SupaHosting
                    </h3> */}
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3>Product</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {FooterTabs.Products.map((fo, i) => (
                                        <li key={i}>
                                            <Link
                                                className="text-sm text-muted-foreground transition-colors duration-200 ease-in-out hover:text-accent-foreground"
                                                href={fo.href}
                                            >
                                                {fo.title}
                                            </Link>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3>Company</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {
                                        FooterTabs.Company.map((fo, i) => (
                                            <li key={i}>
                                                <Link
                                                    className="text-sm text-muted-foreground transition-colors duration-200 ease-in-out hover:text-accent-foreground"
                                                    href={fo.href}
                                                >
                                                    {fo.title}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3>Socials</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {
                                        FooterTabs.Socials.map((fo, i) => (
                                            <li key={i}>
                                                <Link
                                                    target='_blank'
                                                    className="text-sm text-muted-foreground transition-colors duration-200 ease-in-out hover:text-accent-foreground"
                                                    href={fo.href}
                                                >
                                                    {fo.title}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3>Legal</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {
                                        FooterTabs.Legal.map((fo, i) => (
                                            <li key={i}>
                                                <Link
                                                    className="text-sm text-muted-foreground transition-colors duration-200 ease-in-out hover:text-accent-foreground"
                                                    href={fo.href}
                                                >
                                                    {fo.title}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t  pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-sm leading-5 text-muted-foreground">
                        &copy; {new Date().getFullYear()} SupaHosting - built by <Link className='hover:text-white' target='_blank' href='https://twitter.com/MAD_ZENHOM'>Zenhom.</Link>
                    </p>
                </div>
            </Wrapper>
        </footer>
    )
}
