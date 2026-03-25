import { MusicDiscCard } from '@/components/MusicDiscCard/MusicDiscCard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/music-disc-card')({
  component: RouteComponent,
})

function RouteComponent() {
  const albumCoverUrl =
    'https://media.pitchfork.com/photos/6614092742a7de97785c7a48/master/w_1280%2Cc_limit/Billie-Eilish-Hit-Me-Hard-and-Soft.jpg'
  return (
    <div className="flex justify-center md:items-center h-dvh w-dvw">
      <MusicDiscCard
        songDurationMs={180000}
        playing={true}
        artistName="Billie Eilish"
        songTitle="CHIHIRO"
        albumCoverUrl={albumCoverUrl}
      />
    </div>
  )
}
