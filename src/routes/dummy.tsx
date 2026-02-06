import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dummy')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-xl text-center mt-50'>Nothing here, dummy!</p>
      <img className="w-full max-w-lg" src="https://i.pinimg.com/originals/e9/6b/2a/e96b2ae4c3e9e55bf0a571ca43751cd5.gif" />
    </div>
  )
}
