import ScalingText from './ScalingText'

type WorkSectionProps = {
    hovered: boolean
}

export default function StudioSection(props: WorkSectionProps) {

    return (
        <div className="w-full h-128 rounded-sm mb-2 bg-gray-700 pt-4 px-4 text-white font-inter font-semibold">
            <ScalingText hovered={props.hovered} fontSize={'24pt'} scaleFactor={1.3}>
                The main feature is the dual scrollable panes that resize on hover.
            </ScalingText>
        </div >
    )
}