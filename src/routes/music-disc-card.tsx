import { MusicDiscCard } from '@/components/MusicDiscCard/MusicDiscCard'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/music-disc-card')({
  component: RouteComponent,
})

function RouteComponent() {
  const songDuration = 180000
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setTimeout(() => {
      console.log(progress.toFixed(2))
      if (progress < 1) {
        setProgress((prev) => prev + 0.01)
      } else {
        clearTimeout(interval)
      }
    }, songDuration / 100)
    return () => clearTimeout(interval)
  }, [progress])

  const albumCoverUrl =
    'https://media.pitchfork.com/photos/6614092742a7de97785c7a48/master/w_1280%2Cc_limit/Billie-Eilish-Hit-Me-Hard-and-Soft.jpg'
  return (
    <div className="flex justify-center md:items-center h-dvh w-dvw">
      <MusicDiscCard
        songDurationMs={songDuration}
        playing={true}
        artistName="Billie Eilish"
        songTitle="CHIHIRO"
        albumCoverUrl={albumCoverUrl}
        progress={progress}
      />
    </div>
  )
}
