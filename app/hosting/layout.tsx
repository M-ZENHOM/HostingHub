<<<<<<< HEAD
import Footer from '@/components/layouts/footer'
import { SiteHeader } from '@/components/layouts/siteHeader'
=======
>>>>>>> be8d09698f7c46b805005d946a509057cb29e2fe
import { FC } from 'react'

interface layoutProps {
    children: React.ReactNode
}

const layout: FC<layoutProps> = ({ children }) => {
<<<<<<< HEAD
    return (
        <main>
            <SiteHeader />
            {children}
            <Footer />
        </main>
    )
=======
    return <div>{children}</div>
>>>>>>> be8d09698f7c46b805005d946a509057cb29e2fe
}

export default layout