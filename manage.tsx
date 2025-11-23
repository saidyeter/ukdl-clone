import testCenters from '@/assets/test-centres.json';
import testData from '@/assets/test-data.json';
import { useLicenceStore } from '@/lib/license-store';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/manage')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate();

  const {
    licenceNumber, //theoryTestPassNumber, referenceNumber,
    // setLicenceNumber, setTheoryTestPassNumber, setReferenceNumber,
  } = useLicenceStore();
  // console.log(licenceNumber, theoryTestPassNumber, referenceNumber);
  const booking = testData.find(a => a.driverLicenceNumber === licenceNumber);
  const testCentre = testCenters.find(a => a.zipcode === booking?.testCentre);
  if (!licenceNumber || !booking || !testCentre) {
    navigate({ to: '/not-found' });
    return
  }

  async function handleSignout(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    await new Promise(resolve => setTimeout(resolve, 1000));
    navigate({ to: '/' });
    return
  }

  const cancelled = booking.status.toLocaleLowerCase() === "cancelled";
  const closeDate = booking.isDateClose;

  return (
    <>

      <div id="page" data-journey="pp-change-practical-driving-test-public:change-booking">


        <section aria-label="Header proposition">
          <div className="header-proposition-container">
            <span className="header-proposition-name">
              Change your driving test
            </span>
          </div>
        </section>


        <main id="main" role="main">
          <header className="booking-change-incomplete">
            <div id="header-title">
              <h1>View booking</h1>
              <dl>
                <dt>Driving licence number:</dt>
                <dd>{licenceNumber}</dd>
              </dl>
            </div>
            <div id="header-buttons">
              <div id="header-button-container">
                <a onClick={handleSignout} className="button">Sign out</a>
              </div>
            </div>
          </header>

          <section id="confirm-booking-details" className="formatting">

            {
              cancelled ? (
                <header>
                  <div className="onscreen-help">
                    <p>Your booking has been cancelled. You’ll need to either re-book your test or call the <abbr title="Driver and Vehicle Standards Agency">DVSA</abbr> on 0300 200 1122. </p>
                  </div>
                </header>

              ) : (closeDate ? (

                <header>
                  <div className="onscreen-help">
                    <p>You’ll need to call the <abbr title="Driver and Vehicle Standards Agency">DVSA</abbr> on 0300 200 1122 if you want to make any changes to this application.</p>
                  </div>
                </header>
              ) : null)}
            {!cancelled ? (
              <>
                <section>
                  <header>
                    <h2>Date and time of test</h2>
                    {!closeDate ? (
                      <a href="#" className="button">Change</a>
                    ) : null}
                    {!closeDate ? (
                      <a href="#" className="button">Find tests within 3 days</a>
                    ) : null}
                  </header>

                  <div className="contents">
                    <dl>
                      <dd>{new Date(booking.date).toLocaleString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} {new Date(booking.date).toLocaleString('en-GB', { hour: 'numeric', minute: 'numeric' })}pm</dd>

                      <dd>This test slot is non-refundable</dd>

                    </dl>
                  </div>
                </section>

                <section>
                  <header>
                    <h2>Test centre</h2>

                    {!closeDate ? (
                      <a href="/change-test-centre" className="button">Change</a>
                    ) : null}
                  </header>

                  <div className="contents">
                    <dl>
                      <dd>{testCentre?.name}</dd>
                    </dl>
                    <span className="clear"></span>
                    <span className="google-map-link"><a href={testCentre?.google_maps_link} title="Opens in a new window" rel="external"
                      target="_blank">Google map</a></span>


                    <div id="centre-facilities-info" className="formatting clear visuallyhidden reveal"
                      style={{ overflow: 'hidden', display: 'block' }}
                    >
                      <h3> Facilities </h3>

                      <dl>
                        <dt>Toilet:</dt>
                        <dd>Disabled toilets are available</dd>

                        <dt>Disabled access:</dt>
                        <dd>Disabled parking and wheelchair access</dd>

                        <dt>Parking:</dt>
                        <dd>A car park is available at the test centre</dd>

                      </dl>

                      <p className="clear"></p>
                    </div>
                  </div>
                </section>
              </>
            ) : null}
            <section>
              <header>
                <h2>Type of test</h2>

                {!closeDate ? (
                  <a href="#" className="button">Change</a>
                ) : null}
              </header>

              <div className="contents">
                <dl>
                  <dd>Car</dd>

                  <dt>Fee</dt>
                  <dd>£62.00</dd>

                  <dt>Test status</dt>
                  <dd>Booked</dd>
                  <dt>Extended test</dt>
                  <dd>
                    No
                  </dd>
                </dl>
              </div>
            </section>


            <section>
              <header>
                <h2>Instructor’s reference number</h2>

                {!closeDate ? (
                  <a href="#" className="button">Change</a>
                ) : null}
              </header>

              <div className="contents">
                <dl>
                  <dt className="visuallyhidden"></dt>
                  <dd>
                    Not entered
                  </dd>
                </dl>
              </div>
            </section>

          </section>

        </main>

      </div>
    </>
  )
}
