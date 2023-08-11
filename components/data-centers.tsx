import React from 'react'
import Title from './ResbuleTitle'
import { Wrapper } from './Wrapper'
import Image from 'next/image'

export default function DataCenters() {
    return (
        <div className='relative bg-muted bg-gradient-to-br from-violet-500/50 to-35%'>
            <div className='absolute w-full h-full opacity-30' style={{ backgroundImage: 'url(/grid.svg)' }} />
            <Wrapper className='py-10 px-5 flex flex-col justify-center items-center'>
                <Title title='Data Centres All ' colored='Around the World' />
                <p className='text-center text-foreground'>Our web hosting, WordPress hosting, and cloud hosting plans offer server locations in: USA, United Kingdom, France, India, Singapore, Brazil, Lithuania, and the Netherlands.</p>
                <Image className='mt-10' src="/dataImg.webp" width={800} height={800} priority alt='dataImg' />
            </Wrapper>
        </div>
    )
}
