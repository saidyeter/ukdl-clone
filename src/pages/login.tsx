import { useEffect, useState } from "react";
import "../assets/login.css";
import { useLicenceStore } from "../lib/license-store";

export default function LoginPage() {
  const [licenceNumber, setLicenceNumberLocally] = useState<string>('');
  const [theoryTestPassNumber, setTheoryTestPassNumberLocally] = useState<string>('');
  const [referenceNumber, setReferenceNumberLocally] = useState<string>('');
  const [isRefNumber, setIsRefNumber] = useState<boolean>(true);
  const { setLicenceNumber, setTheoryTestPassNumber, setReferenceNumber } = useLicenceStore();
  useEffect(() => {
    setLicenceNumber(null);
    setTheoryTestPassNumber(null);
    setReferenceNumber(null);
  }, [])
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await new Promise(resolve => setTimeout(resolve, 1000));
    // console.log('waited ');
    setLicenceNumber(licenceNumber);
    setTheoryTestPassNumber(theoryTestPassNumber);
    setReferenceNumber(referenceNumber);
    window.location.href = '/manage';

  }

  return (
    <>

      <div id="page" data-journey="pp-change-practical-driving-test-public:access-your-booking">

        <section aria-label="Header proposition">
          <div className="header-proposition-container">
            <span className="header-proposition-name">
              Change your driving test
            </span>
          </div>
        </section>


        <main id="main" role="main">
          <header>
            <h1>Enter details below to access your booking</h1>
          </header>
          <section>
            <form onSubmit={handleSubmit} method="post" autoComplete="off" noValidate={true}>
              <fieldset>
                <legend></legend>

                <input id="password-type" type="hidden" name="passwordType" value="ALTERNATIVE" />

                <div className="form-block contextual-help example hidden-label">
                  <label htmlFor="driving-licence-number" className="contextual-help ">
                    <div className="formatting">
                      <span className="label">
                        Driving licence number
                      </span>
                    </div>

                    <a href="#/login#" id="dln-help-link" className="more"
                      data-journey-click="pp-change-practical-driving-test-public:access-your-booking:help:what-is-my-driving-licence-number"><span
                        className="visuallyhidden">Driving licence number</span> What is this?</a>

                    <div className="help formatting visuallyhidden" style={{ overflow: 'hidden' }}>
                      <img src="../assets/driving-licence-sample.jpg" width="268" alt="" />
                      <p>This is your provisional (or full) driving licence number which can be found in section 5 of your
                        photocard driving licence. For <abbr title="Great Britain">GB</abbr> licence holders, this is 16
                        characters long and usually starts with the first 5 letters of the surname. It will look something
                        like <strong>MORGA657054SM9IJ</strong>.</p>
                      <p>For Northern Ireland licence holders, it consists of 8 numbers. If you hold a European community
                        licence, please enter the number shown on your <abbr title="Great Britain">GB</abbr> counterpart
                        licence</p>
                    </div>

                    <small id="dln-hint" className="example">For example, MORGA657054SM9IJ</small>
                    <input type="text" pattern="[\w0-9\s]*" maxLength={16} name="username" id="driving-licence-number"
                      className="text upper-text username-errorTargetSuffix" aria-describedby="dln-hint" value={licenceNumber}
                      onChange={(e) => setLicenceNumberLocally(e.target.value)} />
                  </label>
                </div>

                {isRefNumber ? (
                  <div className="form-block contextual-help example ">
                    <label htmlFor="application-reference-number" className="contextual-help ">
                      <div className="formatting">
                        <span className="label">
                          Driving test reference number
                        </span>
                      </div>

                      <a id="arn-help-link" className="more" href="#/login#"
                        data-journey-click="pp-change-practical-driving-test-public:access-your-booking:help:what-is-my-application-reference-number"><span
                          className="visuallyhidden">Driving test reference number </span> What is this?</a>

                      <div className="help formatting visuallyhidden" style={{ overflow: 'hidden' }}>
                        <p>This number was given when you booked the test. It can be found on your confirmation. If you don’t
                          have it, try the ‘use theory test pass number’ link below.</p>
                      </div>

                      <input type="text" pattern="\d*" name="password" id="application-reference-number"
                        className="text password-errorTargetSuffix" value={referenceNumber}
                        onChange={(e) => setReferenceNumberLocally(e.target.value)} />
                    </label>

                    <p className="clear">Don’t have a driving test reference number with you?<br />
                      <a
                        onClick={() => setIsRefNumber(false)} id="use-theory-test-number">Use theory test pass number
                        <span className="visuallyhidden">, instead of driving test reference number</span>
                      </a>
                    </p>
                  </div>
                ) : (
                  <div className="form-block contextual-help example ">
                    <label htmlFor="theory-test-pass-number" className="contextual-help ">
                      <div className="formatting">
                        <span className="label">
                          Theory test pass number
                        </span>
                      </div>

                      <a href="#/login#" id="tpn-help-link" className="more"
                        data-journey-click="pp-change-practical-driving-test-public:access-your-booking:help:what-is-my-theory-test-pass-number"><span
                          className="visuallyhidden">Theory test pass number </span> What is this?</a>

                      <div className="help formatting visuallyhidden" style={{ overflow: 'hidden' }}>
                        <p>This number can be found on the written confirmation given to you after a theory test pass</p>
                      </div>

                      <input type="text" pattern="\d*" name="alternativePassword" id="theory-test-pass-number"
                        className="text alternativePassword-errorTargetSuffix" value={theoryTestPassNumber}
                        onChange={(e) => setTheoryTestPassNumberLocally(e.target.value)}
                      />
                    </label>
                    <p>Don’t have a theory test pass number with you?<br />
                      <a
                        onClick={() => setIsRefNumber(true)}
                        id="use-application-ref-number">Use driving test reference number
                        <span className="visuallyhidden">, instead of theory test pass number</span>
                      </a>
                    </p>
                  </div>
                )}

              </fieldset>
              <div id="continue-button-wrapper">
                <input type="submit" name="booking-login" id="booking-login" value="Continue" className="button cta" />
              </div>
            </form>
          </section>
        </main>
      </div>
    </>
  )
}