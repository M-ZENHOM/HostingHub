<<<<<<< HEAD
import Footer from '@/components/footer'
import { SiteHeader } from '@/components/siteHeader'
=======
<<<<<<< HEAD
import Footer from '@/components/layouts/footer'
import { SiteHeader } from '@/components/layouts/siteHeader'
=======
>>>>>>> be8d09698f7c46b805005d946a509057cb29e2fe
>>>>>>> 9e0e5490d27c74a375ccf9ef07fb9ce5434b616a
import { FC } from 'react'

interface layoutProps {
    children: React.ReactNode
}

const layout: FC<layoutProps> = ({ children }) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 9e0e5490d27c74a375ccf9ef07fb9ce5434b616a
    return (
        <main>
            <SiteHeader />
            {children}
            <Footer />
        </main>
    )
<<<<<<< HEAD
=======
=======
    return <div>{children}</div>
>>>>>>> be8d09698f7c46b805005d946a509057cb29e2fe
>>>>>>> 9e0e5490d27c74a375ccf9ef07fb9ce5434b616a
}

export default layout