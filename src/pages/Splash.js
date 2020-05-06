import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <>
    <h1>
      we install and operate standardized aquaponics systems for suburban
      backyards so that middle-class families can get more passive income and
      the local community (families, groceries, restaurants) can have cheap,
      fresh, organic, low-carbon-footprint food year-round
    </h1>
    <p>
      Think of what solar panels do: they take some latent real estate and turn
      an annoying bill (electricity) into an enduring source of small-scale
      passive income. Our aquaponic "solar farms" will do the same thing for
      vegetables and fish: where once there was an incentive to eat unhealthily
      to save money and spare inconvenience, now each and every household will
      have so much healthy food that they eat <em>super</em> healthy by default
      AND make money (we'll help sell their excess produce to local grocery
      stores and restaurants!)!
    </p>

    <hr></hr>

    <h2>Prototype 0.1: NFT Growing Unit (#1)</h2>
    <img src="/images/p0.1.jpeg" alt="prototype 0.1"></img>
    <p>
      Our first prototype was a geometrical and economic proof of concept for an
      aquaponics layout style known as NFT ("Nutrient Film Technique"). We
      designed and built a plywood holder for 40' of 3" PVC tubing, measuring
      water flow quantity and rate while assessing ways to lower build
      complexity for streamlining production (either for in-house manufacturing
      speed, or designing "kits" to sell). Its construction came out
      significantly under time <em>and</em> budget!
    </p>
    <p>
      This also gave us a sense for placement and aesthetic concerns: How big{' '}
      <em>does</em> our design turn out to be? What does it look like when
      installed? Where could it be placed? How heavy is it? With this
      information, we've been able to refine our value hypothesis, namely that
      most middle class suburbanites have sufficient unused space on their
      property to install a non-intrusive aquaponics system. We came away with
      even more questions than we went in with, marking the experiment a solid
      success!
    </p>

    <hr></hr>

    <h2>Prototype 1.1: Functioning NFT system (#1)</h2>
    <img src="/images/p1.1.jpeg" alt="prototype 1.1"></img>
    <p>
      In our second prototype, we are looking to connect Prototype 0.1 (and/or
      0.2, depending on timing) with a large (500 liter) fish tank and
      filtration system for the purpose of a full-scale functional demonstration
      (and grounds for learning). Design is complete, but construction is
      forthcoming (due to being shut down as a "nonessential" business during
      the COVID-19 pandemic).
    </p>
    <p>
      In theory, each such 500L tank will be able to support 2-3 growing units
      at a time (depending on the fish inside). The most important learnings
      from this experiment should center around the startup time: how long does
      it take sufficient bacteria to grow? To what extent can various types of
      fish survive outdoors in the PNW? How easy is maitenance—do we need to
      hire technicians, or can each system-owner maintain their solar farm
      without much training or potential for catastropic errors? What software /
      subsystems could be useful to streamline the process?
    </p>

    <h2>Prototype 0.2: NFT Growing Unit (#2)</h2>
    <img src="/images/p0.2.png" alt="prototype 0.2"></img>
    <p>
      P0.2 will be a second-iteration NFT plant holder improved with knowledge
      gained from P0.1. Among other things, we will eliminate an alternating ~1%
      slant on each tube which took an absurd proportion of P0.1's manufacturing
      time to measure and make specific, and was proved functionally irrelevant
      by water flow testing on P0.1 after assembly. By removing this misguided
      design feature, all similarly-looking parts will be made interchangeable
      throughout the process; this should speed up assembly significantly!
    </p>
    <p>
      Another gigantic time (and money) sink was the transition of water between
      each tube; the options were to pay $12 per PVC U-bend, or drill holes and
      cement our own small pipes. We did the latter, but it was painful (and the
      pipes didn't have end-caps at the end). Instead, we've designed a
      3D-printable end-cap-with-channel piece for this role!
    </p>
    <p>
      P0.1 was slow to design and measure, being engineered in a composition
      book while sitting on a recliner (with power tools running in the
      background). Transitioning design to CAD has already slashed that time
      overhead significantly!
    </p>
    <p>
      Like P1.1, P0.2 is fully designed but production is currently in limbo due
      to the WA state stay-at-home order.
    </p>

    <hr></hr>

    <p>
      If you are interested in an installation, buying produce/fish, or
      investing in our company, please <Link to="/contact">contact us!</Link>
    </p>
  </>
)
