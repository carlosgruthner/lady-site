import Image from 'next/image'
import React from 'react'


export default function Navbar() {
    return (
        <div>
            <div className='flex justify-start px-4'>
                <Image src={"/logo.png"} alt="logo" width={50} height={50} />
            </div>
        </div>
    )
}
