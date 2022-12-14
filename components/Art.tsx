import { ArtType } from './Art.types'
import Image from "next/image";

export default ({artist, title, created_at, medium, description, image_url, testId}: ArtType & {testId: string}) => {
    return (
        <li className="w-1/3 flex flex-col pr-3" data-testid={testId}>
            <div className="w-full h-36 overflow-hidden relative">
                <Image src={image_url} layout="fill"/>
            </div>
            <div className="mt-2">
                <p className="text-2xl mb-1">{title}</p>
                <p className="text-xs">by <span>{artist}</span></p>
                <p className="text-xs">at <span>{created_at}</span></p>
                <hr className="mt-2 mb-2"/>
                <p className="text-sm">{description}</p>
                <p className="text-xs">{medium}</p>
            </div>
        </li>
    )
}