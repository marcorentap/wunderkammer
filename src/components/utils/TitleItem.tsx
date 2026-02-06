import { useScroll, motion } from "motion/react";
import type React from "react"
import { useRef, useState, useEffect } from "react";

export type TitleProps = {
    key: React.Key
    scrollRef: React.RefObject<HTMLElement | null>
    children: React.ReactNode
}

export function TitleItem(props: TitleProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [scrollValue, setScrollValue] = useState(0);

    const { scrollYProgress } = useScroll({
        container: props.scrollRef,
        target: ref,
        offset: ["end end", "start start"],
    })

    useEffect(() => {
        return scrollYProgress.onChange((v) => {
            setScrollValue(v);
        });
    });

    return (
        <motion.div ref={ref} style={{
            opacity: 1 - 10 * Math.pow(scrollValue - 0.5, 2),
            filter: `blur(${10 * Math.pow(scrollValue - 0.5, 2)}px)`
        }
        }>
            {props.children}
        </motion.div>
    )
}
