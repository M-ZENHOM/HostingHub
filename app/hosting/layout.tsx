import Footer from '@/components/layouts/footer'
import { SiteHeader } from '@/components/layouts/siteHeader'

import { FC } from 'react'

interface layoutProps {
    children: React.ReactNode
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