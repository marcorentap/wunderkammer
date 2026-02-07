import WorkSection from '@/components/Norgram/WorkSection'
import StudioSection from '@/components/Norgram/StudioSection'
import { createFileRoute } from '@tanstack/react-router'
import { motion } from "motion/react"
import { useState } from 'react'

export const Route = createFileRoute('/norgram')({
  component: RouteComponent,
})

function RouteComponent() {
  const [hoverState, setHoverState] = useState<"left" | "right" | null>(null)



  return (<>
    <div className='flex gap-2 px-2 h-dvh overflow-hidden'>
      {/* Left, Work*/}
      <motion.div className="h-dvh pt-2 overflow-y-scroll scrollbar-hide grow"
        onHoverStart={() => setHoverState("left")}
        onHoverEnd={() => setHoverState(null)}
        initial={{ width: "50dvw" }}
        whileHover={
          { width: "80dvw", transition: { duration: 0.2 } }
        }
        transition={{ duration: 0.5 }}
      >
        <WorkSection hovered={hoverState === "left"} />
        <div className='w-full h-24' />
        <WorkSection hovered={hoverState === "left"} />
        <div className='w-full h-24' />
        <WorkSection hovered={hoverState === "left"} />
        <div className='w-full h-24' />
        <WorkSection hovered={hoverState === "left"} />
        <div className='w-full h-24' />
        <WorkSection hovered={hoverState === "left"} />
        <div className='w-full h-24' />
        <WorkSection hovered={hoverState === "left"} />
        <div className='w-full h-24' />
        <WorkSection hovered={hoverState === "left"} />
        <div className='w-full h-24' />
        <WorkSection hovered={hoverState === "left"} />
        <div className='w-full h-24' />
      </motion.div>

      {/* Right */}
      <motion.div className="grow h-dvh overflow-y-scroll scrollbar-hide"
        onHoverStart={() => setHoverState("right")}
        onHoverEnd={() => setHoverState(null)}
        initial={{ width: "50dvw" }}
        whileHover={
          { width: "80dvw", transition: { duration: 0.2 } }
        }
        transition={{ duration: 0.5 }}
      >
        <div className='pt-2'>
          <StudioSection hovered={hoverState === "right"} />
        </div>
        <StudioSection hovered={hoverState === "right"} />
        <StudioSection hovered={hoverState === "right"} />
        <StudioSection hovered={hoverState === "right"} />
        <StudioSection hovered={hoverState === "right"} />
        <StudioSection hovered={hoverState === "right"} />
      </motion.div >
    </div>
  </>)
}
