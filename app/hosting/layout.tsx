import Footer from '@/components/layouts/footer'
import { SiteHeader } from '@/components/layouts/siteHeader'
import { Metadata } from 'next/types'

import { FC } from 'react'

interface layoutProps {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: {
        default: "Hosting Website",
        template: `%s - "Hosting"`,
    },
    description: 'Hosting website built by zenhom',
}

const layout: FC<layoutProps> = ({ children }) => {

    return (
        <main>
            <SiteHeader />
            {children}
            <Footer />
        </main>
    )


}

export default layout