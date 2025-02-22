import Image from 'next/image'
import React from 'react'

export default function Main() {
    return (
        <main className='w-full h-full'>
            <div id='Home' className='w-full h-screen text-center'>
                <div className='max-w-[1980px] w-full h-full mx-auto p-0 flex justify-center items-center' style={{ position: 'relative' }}>
                    <div className=' bg-black opacity-80' >
                        <Image src="/assets/images/Main/capa.png" alt='' className='relative z-1' layout='fill' style={{ objectFit: 'cover' }} ></Image>
                    </div>
                    <div className='absolute'>
                        <h1 className='py-2 text-white font-bold text-6xl'>Quer ser minha Lady?</h1>
                        <p className='py-4 text-slate-300 sm:max-w-[70%] m-auto text-2xl'>
                            Presenteie o seu amor e tenha a melhor experiência inesquecível.
                        </p>
                        <div className='flex items-center justify-between max-w-[400px] m-auto py-3'>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
