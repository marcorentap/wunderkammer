import useEmblaCarousel from 'embla-carousel-react'
import { StepBackIcon, StepForwardIcon } from 'lucide-react'
import ScalingDiv from './ScalingDiv'
import ScalingText from './ScalingText'

type WorkSectionProps = {
    hovered: boolean
}

export default function WorkSection(props: WorkSectionProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel()

    const goToPrev = () => emblaApi?.scrollPrev()
    const goToNext = () => emblaApi?.scrollNext()

    return (
        <div className="w-full  rounded-sm mb-2">
            <div className="embla">
                <div className="overflow-hidden mb-2" ref={emblaRef}>
                    <div className="flex">
                        <div className="grow-0 shrink-0 basis-full">
                            <img className="rounded-sm" src="https://www.datocms-assets.com/151165/1757757763-norgramevenexstralandscape3.jpg" />
                        </div>
                        <div className="grow-0 shrink-0 basis-full">
                            <img className="rounded-sm" src="https://www.datocms-assets.com/151165/1757757763-norgramevenexstralandscape3.jpg" />
                        </div>
                        <div className="grow-0 shrink-0 basis-full">
                            <img className="rounded-sm" src="https://www.datocms-assets.com/151165/1757757763-norgramevenexstralandscape3.jpg" />
                        </div>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <ScalingDiv hovered={props.hovered} widthRem={1.5} heightRem={1.5} scaleFactor={1.3}>
                            <button
                                className='bg-gray-300 flex items-center justify-center rounded-sm w-full h-full p-1 cursor-pointer' onClick={goToPrev}>
                                <StepBackIcon fill='black' className='rounded-sm' />
                            </button>
                        </ScalingDiv>
                        <ScalingDiv hovered={props.hovered} widthRem={1.5} heightRem={1.5} scaleFactor={1.3}>
                            <button
                                className='bg-gray-300 flex items-center justify-center rounded-sm w-full h-full p-1 cursor-pointer' onClick={goToNext}>
                                <StepForwardIcon fill='black' className='rounded-sm' />
                            </button>
                        </ScalingDiv>
                    </div>
                    <div>
                        <ScalingText hovered={props.hovered} fontSize={"10pt"} scaleFactor={1.6}>
                            Cabinet of Curiosities
                        </ScalingText>
                    </div>
                    <div>
                        <ScalingText hovered={props.hovered} fontSize={"10pt"} scaleFactor={1.6}>
                            Stuff from Cyberspace
                        </ScalingText>
                    </div>
                    <div>
                        <ScalingText hovered={props.hovered} fontSize={"10pt"} scaleFactor={1.6}>
                            13.37
                        </ScalingText>
                    </div>
                    <div>
                        <ScalingText hovered={props.hovered} fontSize={"10pt"} scaleFactor={1.6}>
                            2026
                        </ScalingText>
                    </div>
                </div>
            </div>
        </div >
    )
}