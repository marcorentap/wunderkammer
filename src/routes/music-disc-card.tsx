import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/music-disc-card')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/music-disc-card"!</div>
}
