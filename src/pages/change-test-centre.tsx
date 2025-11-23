import "../assets/login.css";
import testCenters from "../assets/test-centres.json";
import testdata from "../assets/test-data.json";
import { useLicenceStore } from "../lib/license-store";

export default function ChangeTestCentrePage() {
  const {
    licenceNumber, theoryTestPassNumber, referenceNumber,
    // setLicenceNumber, setTheoryTestPassNumber, setReferenceNumber,
  } = useLicenceStore();
  console.log(licenceNumber, theoryTestPassNumber, referenceNumber);
  const booking = testdata.find(a => a.driverLicenceNumber === licenceNumber);
  const testCentre = testCenters.find(a => a.zipcode === booking?.testCentre);
  if (!licenceNumber || !booking || !testCentre) {
    console.log(licenceNumber, theoryTestPassNumber, referenceNumber);
    // return window.location.href = '/not-found';
    return null
  }

  // async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   await new Promise(resolve => setTimeout(resolve, 1000));
  // }

  const cancelled = booking.status.toLocaleLowerCase() === "cancelled";
  const closeDate = booking.isDateClose;

  if (cancelled || closeDate) {
    return window.location.href = '/manage';
  }

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


          <div id="progress-bar-wrapper">
            <div id="progress-bar" role="progressbar">
              <h1 className="visuallyhidden">Your progression through this transaction</h1>

              <strong className="mobile">Step <span id="progress-button" className="button" role="button">1 of 4</span></strong>

              <ol id="process-steps" className="mobilehidden">
                <li id="status" aria-controls="progress-bar">
                  Test centre</li>
                <li>
                  Test time</li>
                <li className="complete">
                  Card details</li>
                <li className="end-point">
                  Booking summary</li>
              </ol>
            </div>
          </div>
          <div className="page-header">
            <h1>Test centre <span className="visuallyhidden">search and results</span></h1>

          </div>
          <section>
            <form method="post" action="/manage?execution=e2s10&amp;_eventId=search" className="" autoComplete="on">
              <fieldset className="test-centres-find">
                <legend>
                  Search by your home postcode or by test centre name
                </legend>

                <div className="form-block search formatting example">

                  <label htmlFor="test-centres-input">
                    <span className="label hidden">
                      Search by your home postcode or by test centre name
                    </span>

                    <input type="text" name="testCentreName" id="test-centres-input" className="text" value="Barnsley"
                      maxLength={50} />
                    <small className="example">
                      Example: NG1 6LP <i>or</i> NG1 <i>or</i> Nottingham or Nott
                    </small>
                  </label>


                  <input type="submit" name="testCentreSubmit" id="test-centres-submit" value="Find test centres"
                    className="button cta" />


                </div>
              </fieldset>
            </form>

          </section>
        </main>

      </div>
    </>
  )
}