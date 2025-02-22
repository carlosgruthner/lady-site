import { CalendarIcon } from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

type HoverCardProps = {
    titleHover: string
    descriptionHover: string
    preco: string
    data: string
}

export function ProdutosHoverCard({ titleHover, descriptionHover, preco, data }: HoverCardProps) {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button variant="link">
                    <span className="text-2xl">
                        {titleHover}
                    </span>
                </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src="/logo.png" />
                        <AvatarFallback>LL</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">{preco}</h4>
                        <p className="text-sm">
                            {descriptionHover}
                        </p>
                        <div className="flex items-center pt-2">
                            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-xs text-muted-foreground">
                                {data}
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}
