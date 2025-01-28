import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/coffee')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/auth/coffee"!</div>
}
