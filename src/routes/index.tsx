import NorgramTitle from "@/components/Norgram/NorgramTitle"
import DummyTitle from "@/components/Dummy/DummyTitle"
import { TitleItem } from "@/components/utils/TitleItem"
import { createFileRoute } from "@tanstack/react-router"
import { motion } from "motion/react"
import { useRef } from "react"

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const containerRef = useRef(null)

  return (
    <motion.div ref={containerRef}
      className="flex flex-col gap-12 w-dvw h-200 text-center text-3xl overflow-y-scroll overflow-x-hidden pb-[50dvh] pt-[50dvh]">
      <TitleItem scrollRef={containerRef}>
        <NorgramTitle />
      </TitleItem>
      {Array.from({ length: 100 }).map((_, i) => (
        <TitleItem key={i} scrollRef={containerRef}>
          <DummyTitle />
        </TitleItem>
      ))}
    </motion.div>
  )
}
