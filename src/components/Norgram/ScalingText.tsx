import { motion } from "motion/react"
import type { ReactNode } from "react"

type ScalingDivProps = {
    hovered: boolean,
    fontSize: string,
    scaleFactor: number,
    children: ReactNode
}

export default function ScalingText(props: ScalingDivProps) {
    return (
        <motion.p
            animate={
                {
                    fontSize: props.hovered ? `calc(${props.fontSize}* ${props.scaleFactor})` : `${props.fontSize}`
                }
            }
            transition={{ duration: 0.5, ease: 'linear' }}
        >
            {props.children}
        </motion.p>
    )
}