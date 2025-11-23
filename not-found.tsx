import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/not-found')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div id="page" data-journey="pp-change-practical-driving-test-public:change-booking">

      <section aria-label="Header proposition">
        <div className="header-proposition-container">
          <span className="header-proposition-name">
            Change your driving test
          </span>
        </div>
      </section>


      <main id="main" role="main">


        <section id="confirm-booking-details" className="formatting">

          <header>
            <div className="onscreen-help">
              <p>Your application could not be found. Please try again.</p>
            </div>
          </header>




        </section>

      </main>

    </div>
  )
}
