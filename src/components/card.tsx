import { X } from "lucide-react";

export function Card({ className, img, title, charge }: { className?: string, img: string, title: string, charge?: string }) {
    return (
        <div className={`flex flex-col gap-2 justify-center relative w-44 bg-gray-100 h-60 rounded-lg items-center ${className}`}>
            <button className="absolute text-gray-400 top-2 right-2"><X /></button>
            <img className="rounded-full" src={img} alt="imgen peronsa" />
            <h4>{title}</h4>
            <span>{charge}</span>
        </div>
    )
}