'use client'
import Image from 'next/image'
import React from 'react'

import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
    {
        href: "piscina.png",
        title: "Lux room",
        description: "Quarto com Piscina aquecida",
    },
    {
        href: "quarto02.png",
        title: "Bed Roses",
        description: "Quarto aconchegante com cama de casal e infeites especiais",

    },
    {
        href: "chocolate.png",
        title: "Chocolate",
        description: "Chocolate e doces para agradar a sua/seu amoada(o)",
    },
    {
        href: "urso.png",
        title: "Enfeites",
        description: "Acessórios e serviços de enfeite. Entre em contato e veja as disponibilidades",
    },
    {
        href: "quarto03.png",
        title: "Love Warm",
        description: "Quarto com enfeites e ambiente mais quante e aconchegante",
    },
    {
        href: "aliancas.png",
        title: "Alianças",
        description: "Presenteie seu amor com uma aliança e faça o amor transbordar e selar uma nova fase",
    },
]

export default function Navbar() {
    return (
        <div className='w-full h-10 px-4 flex justify-between items-center'>
            <div className='flex justify-start'>
                <Image src={"/logo.png"} alt="logo" width={40} height={40} />
            </div>
            <div className='w-full flex justify-center items-center'>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Produtos e Serviços</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <Link
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                <Image src="/assets/images/Produtos/piscina.png" alt="logo" width={500} height={200} className='rounded-lg'/>
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    Lux Room
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Quarto com piscina aquecida e com cama de casal e infeites especiais
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    {components.map((component) => (
                                        
                                        <ListItem href="/docs" title={component.title} key={component.title}>
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Preços</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Contate-nos
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"