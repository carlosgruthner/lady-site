
import Image from 'next/image'
import React from 'react'
import { ProdutosHoverCard } from './_components/ProdutosHoverCard'

const imagens = [
    {
        src: "piscina.png",
        title: "Lux room",
        description: "Quarto com Piscina aquecida",
        preco: "R$ 1.000,00",
        data: "12/06/2025"
    },
    {
        src: "quarto02.png",
        title: "Bed Roses",
        description: "Quarto aconchegante com cama de casal e infeites especiais",
        preco: "R$ 556,00",
        data: "12/06/2025"
    },
    {
        src: "chocolate.png",
        title: "Chocolate",
        description: "Chocolate e doces para agradar a sua/seu amoada(o)",
        preco: "R$ 39,00",
        data: "12/06/2025"
    },
    {
        src: "urso.png",
        title: "Enfeites",
        description: "Acessórios e serviços de enfeite. Entre em contato e veja as disponibilidades",
        preco: "R$ 128,00",
        data: "12/06/2025"
    },
    {
        src: "quarto03.png",
        title: "Love Warm",
        description: "Quarto com enfeites e ambiente mais quante e aconchegante",
        preco: "R$ 657,00",
        data: "12/06/2025"
    },
    {
        src: "aliancas.png",
        title: "Alianças",
        description: "Presenteie seu amor com uma aliança e faça o amor transbordar e selar uma nova fase",
        preco: "R$ 150,00",
        data: "12/06/2025"
    },
]

export default function Produtos() {
    // const icon = '/assets/images/Produtos/chocolate.png'

    return (
        <div>
            <div className='text-center my-8'>
                <h1 className='text-3xl font-bold text-gray-400'>Produtos & Serviços</h1>
            </div>

            <div className='grid  md:grid-cols-2 gap-10 p-10'>
                {imagens.map((img) => (
                    <div className='' key={img.src}>
                        <Image
                            src={`/assets/images/Produtos/${img.src}`}
                            alt={img.title}
                            className='rounded-2xl'
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto", objectFit: "cover" }}
                        />
                        <div>
                            <ProdutosHoverCard
                                titleHover={img.title}
                                descriptionHover={img.description}
                                preco={img.preco}
                                data={img.data}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
