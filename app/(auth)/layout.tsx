import Image from "next/image"
import Link from "next/link"
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface AuthLayoutProps {
    children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-3 lg:grid-cols-2">
            <AspectRatio ratio={16 / 9}>
                <Link className="absolute text-xl font-extrabold top-5 left-10  tracking-wider rounded-md" href="/">SupaHosting</Link>
                <Image className='flex-1 h-screen absolute -z-10 opacity-25 lg:relative lg:opacity-50' src='/host-bg.jpg' fill priority alt='Host BG' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </AspectRatio>
            <main className="container absolute top-1/2 col-span-1 flex -translate-y-1/2 items-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1">
                {children}
            </main>
        </div>
    )
}