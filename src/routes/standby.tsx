import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/standby')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div id="standby">
      <span style={{ fontSize: 64, fontWeight: 600 }}>Please stand by</span>
      <span>
        We are getting everything ready for you. The page is loading, and you will be on your way in just a few moments.
      </span>
      <span>Thank you for your patience</span>
    </div>
  )
}
