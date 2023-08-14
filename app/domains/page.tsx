import { getDomains } from "@/lib/get-domains"
import Search from "./Search"
import { FC } from "react"
import { Wrapper } from "@/components/Wrapper"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { SiteHeader } from "@/components/layouts/siteHeader"
import Footer from "@/components/layouts/footer"
import { Metadata } from "next/types"

interface pageProps {
    searchParams: { [key: string]: string | string[] | undefined }
}

export const metadata: Metadata = {
    title: "Domains Search",
    description: 'Hosting website built by zenhom',
}
const DomainsPage: FC<pageProps> = async ({ searchParams }) => {
    const search = typeof searchParams.search === 'string' ? searchParams.search : ""
    const domains = await getDomains(search)

    return (
        <>
            <SiteHeader />
            <Wrapper className="">
                <div className='absolute left-0 top-0 bg-gradient-to-br from-red-500/50 to-50% w-full h-full -z-10' />
                <Search search={search} />
                {domains && (
                    <Card className="py-10 mb-10" >
                        <div className=" mx-4 flex items-center space-x-4 rounded-md border p-4">
                            <div className="flex-1 space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    Domain Availability
                                </p>
                                <p className="text-md text-muted-foreground">
                                    {domains?.registered === true ? `${domains?.name} is already registered` : `${domains?.name} is available`}
                                </p>
                            </div>
                        </div>
                        <CardHeader>
                            <CardTitle>Registrar Info</CardTitle>
                            <CardDescription>
                                {domains?.registered === true &&
                                    <div className="space-x-3">
                                        <span>{`Creted: ${(domains?.created).match(/\d{4}-\d{2}-\d{2}/)}`} </span>
                                        <span>{`Changed: ${(domains?.changed).match(/\d{4}-\d{2}-\d{2}/)}`} </span>
                                        <span>{`Expires: ${(domains?.expires).match(/\d{4}-\d{2}-\d{2}/)}`} </span>
                                    </div>
                                }
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div>
                                <div
                                    key={domains?.registrar?.id}
                                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                >
                                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            {domains?.registrar?.name}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    key={domains?.registrar?.id}
                                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                >
                                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            {domains?.registrar?.email}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    key={domains?.registrar?.id}
                                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                >
                                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            {domains?.registrar?.url}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    key={domains?.registrar?.id}
                                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                >
                                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            {domains?.registrar?.phone}
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </CardContent>

                    </Card>
                )}
            </Wrapper>
            <Footer />
        </>
    )
}

export default DomainsPage