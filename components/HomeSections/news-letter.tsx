import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Wrapper } from '../Wrapper'

export default function NewLetter() {
    return (
        <Wrapper className='flex flex-col md:flex-row items-center justify-between w-full py-28 space-y-5 md:space-y-0 px-4 md:px-0 '>
            <div className='w-full max-w-lg space-y-2'>
                <h2 className='font-bold text-lg'>Subscribe to our newsletter</h2>
                <p className='text-muted-foreground'>Get a summary of what we’ve shipped during the last month, behind the scenes updates, and team picks.</p>
            </div>
            <div className='flex space-y-2 flex-col w-full md:w-fit'>
                <div className='flex flex-col space-x-2 md:flex-row space-y-5 md:space-y-0'>
                    <Input className='w-full md:max-w-lg' type="email" placeholder="host@hosting-hub.com" />
                    <Button>Subscribe</Button>
                </div>
                <label className='text-muted-foreground text-xs text-center md:text-start'>Pure information and no spam. Unsubscribe any time</label>
            </div>
        </Wrapper>
    )
}
