import Footer from '@/components/footer'
import { SiteHeader } from '@/components/siteHeader'
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