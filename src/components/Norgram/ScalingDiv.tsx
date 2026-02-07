import { motion } from "motion/react"
import type { ReactNode } from "react"

type ScalingDivProps = {
    hovered: boolean,
    widthRem: number,
    heightRem: number,
    scaleFactor: number,
    children: ReactNode
}
export default function ScalingDiv(props: ScalingDivProps) {
    return (
        <motion.div
            animate={
                {
                    width: props.hovered ? `calc(${props.widthRem}rem * ${props.scaleFactor})` : `${props.widthRem}rem`,
                    height: props.hovered ? `calc(${props.heightRem}rem * ${props.scaleFactor})` : `${props.heightRem}rem`,
                }
            }
            transition={{ duration: 0.5, ease: 'linear' }}
        >
            {props.children}
        </motion.div>
    )
}