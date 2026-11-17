
import { useState } from 'react'
import './App.css'

const projects = [
  {
    number: '01',
    title: 'A kitchen, renewed',
    type: 'KITCHEN REPAINT',
    image: 'photo-1600585154340-be6161a56a0c',
    alt: 'Bright modern kitchen',
  },
  {
    number: '02',
    title: 'A little more character',
    type: 'FEATURE WALL',
    image: 'photo-1616486338812-3dadae4b4ace',
    alt: 'Warm living room with a feature wall',
  },
  {
    number: '03',
    title: 'A fresh welcome home',
    type: 'EXTERIOR PAINTING',
    image: 'photo-1600047509807-ba8f99d2cdde',
    alt: 'Freshly painted home exterior',
  },
  {
    number: '04',
    title: 'Room to slow down',
    type: 'INTERIOR PAINTING',
    image: 'photo-1618221195710-dd6b41faaea6',
    alt: 'Calm and polished interior',
  },
  {
    number: '05',
    title: 'Made for gathering',
    type: 'LIVING ROOM',
    image: 'photo-1600210492486-724fe5c67fb0',
    alt: 'Comfortable living room',
  },
  {
    number: '06',
    title: 'The details make it',
    type: 'FINISHING TOUCHES',
    image: 'photo-1600607687939-ce8a6c25118c',
    alt: 'Contemporary home interior',
  },
]

const services = [
  {
    number: '01',
    title: 'Interior painting',
    description:
      'Thoughtful color and a clean finish for the rooms you live in every day.',
  },
  {
    number: '02',
    title: 'Exterior painting',
    description:
      'Weather-ready finishes that make coming home feel even better.',
  },
  {
    number: '03',
    title: 'Kitchens & cabinets',
    description:
      'Give your kitchen a fresh look with careful prep and painted details.',
  },
  {
    number: '04',
    title: 'Feature walls',
    description:
      'A considered color or finish that gives a room its own character.',
  },
  {
    number: '05',
    title: 'Color guidance',
    description:
      'Choose a palette that feels right in your home and its natural light.',
  },
  {
    number: '06',
    title: 'Small repairs',
    description:
      'We take care of the prep and little fixes behind a lovely finish.',
  },
]

function Brand({ light = false }) {
  return (
    <a
      className={`brand ${light ? 'brand-light' : ''}`}
      href="#home"
      aria-label="Oak & Brush Painting home"
    >
      <span className="brand-mark">
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M9 34 23 9l15 25H9Z" />
          <path d="M15 34c1-8 5-12 9-15 5 3 8 7 9 15M24 19v15M19 27h10" />
        </svg>
      </span>

      <span className="brand-name">
        OAK <i>&</i> BRUSH
        <small>PAINTING CO.</small>
      </span>
    </a>
  )
}

function Photo({ id, alt, className = '' }) {
  const imageUrl = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1100&q=85`

  return (
    <img
      className={className}
      src={imageUrl}
      alt={alt}
      loading="lazy"
    />
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [selectedServices, setSelectedServices] = useState([])
  const [servicesOpen, setServicesOpen] = useState(false)
  const [reviewSent, setReviewSent] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  function submitProject(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const message = [...formData.entries()]
      .map(([name, value]) => `${name}: ${value}`)
      .join('\n')

    const email = 'hello@oakandbrush.com'
    const subject = 'Project enquiry — Oak & Brush Painting'

    window.location.href =
      `mailto:${email}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(message)}`

    setSent(true)
  }

  function submitReview(event) {
    event.preventDefault()
    setReviewSent(true)
    event.currentTarget.reset()
  }

  function handleServiceChange(event, serviceTitle) {
    const updatedServices = event.target.checked
      ? [...selectedServices, serviceTitle]
      : selectedServices.filter((service) => service !== serviceTitle)

    setSelectedServices(updatedServices)
  }

  function clearProjectForm() {
    setSent(false)
    setSelectedServices([])
    setServicesOpen(false)
  }

  return (
    <>
      <header className="site-header">
        <div className="nav-wrap">
          <Brand />

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? 'CLOSE' : 'MENU'} <span>☰</span>
          </button>

          <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#work" onClick={closeMenu}>Recent work</a>
            <a href="#services" onClick={closeMenu}>What we do</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              LET'S TALK <span>↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section-pad" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              THOUGHTFUL PAINTING FOR THE PLACE YOU CALL HOME
            </p>

            <h1>
              The room feels
              <br />
              made for <em>you.</em>
            </h1>

            <p className="hero-text">
              A good coat of paint can change the whole feeling of a room.
              We bring care, calm and a considered eye to every wall, corner
              and finishing touch.
            </p>

            <p className="hero-text hero-text-small">
              From the first color conversation to the last clean brushstroke,
              Oak & Brush makes decorating feel easy—and your home feel more
              like yours.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="#contact">
                REQUEST A FREE QUOTE <span>↗</span>
              </a>

              <a className="text-link" href="#work">
                SEE OUR WORK <span>↓</span>
              </a>
            </div>

            <div className="hero-note">
              <span className="note-star">✳</span>
              LOCAL PEOPLE. LOVELY FINISHES. NO FUSS.
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-photo-main">
              <Photo
                id="photo-1600210492486-724fe5c67fb0"
                alt="Sunlit living room with soft natural colors"
              />
            </div>

            <div className="hero-photo-small">
              <Photo
                id="photo-1600607687920-4e2a09cf159d"
                alt="Quiet detail in a freshly decorated room"
              />
            </div>

            <div className="photo-caption">
              <span>01 / A HOME, REFRESHED</span>
              <span>MADE WITH CARE ✳</span>
            </div>

            <div className="round-stamp">
              GOOD
              <br />
              ROOMS
              <br />
              <b>GOOD</b>
              <br />
              FEELINGS <span>✳</span>
            </div>
          </div>
        </section>

        <section className="promise section-pad">
          <div className="promise-intro">
            <p className="eyebrow">A LITTLE ABOUT US</p>
            <h2>
              Paint changes more
              <br />
              than <em>the walls.</em>
            </h2>
          </div>

          <p className="promise-copy">
            It changes how a room welcomes you, how a morning starts, and how
            at home you feel. We make the process straightforward and the
            result something you’ll love living with.
          </p>

          <div className="promise-stat">
            <strong>01—06</strong>
            <span>
              CARE IN EVERY
              <br />
              DETAIL
            </span>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A FEW RECENT FAVOURITES</p>
              <h2>
                Good work.
                <br />
                <em>Good feeling.</em>
              </h2>
            </div>

            <a className="text-link" href="#contact">
              HAVE A PROJECT IN MIND? <span>↗</span>
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-image">
                  <Photo id={project.image} alt={project.alt} />
                  <span className="project-number">{project.number}</span>
                </div>

                <div className="project-meta">
                  <span>{project.type}</span>
                  <span>↗</span>
                </div>

                <h3>{project.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="services-top">
            <p className="eyebrow">WHAT WE DO</p>
            <h2>
              From one lovely wall
              <br />
              to a <em>whole home.</em>
            </h2>
            <p>
              Big refresh or a small change, we bring the same thoughtful prep
              and tidy finish to every project.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number} / 06</span>
                <div className="service-icon">✳</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" aria-label={`Ask about ${service.title}`}>
                  ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="why-section">
          <div className="why-image">
            <Photo
              id="photo-1600607687939-ce8a6c25118c"
              alt="Beautifully finished, light-filled home interior"
            />
          </div>

          <div className="why-copy">
            <p className="eyebrow">THE OAK & BRUSH WAY</p>
            <h2>
              Good people.
              <br />
              Good prep.
              <br />
              <em>Great finish.</em>
            </h2>

            <p>
              We keep things clear, turn up when we say we will, and treat your
              home with respect. The quote is honest, the work is careful, and
              everything is left clean and ready to enjoy.
            </p>

            <div className="why-points">
              <span>01 &nbsp; FAIR, CLEAR QUOTES</span>
              <span>02 &nbsp; LOCAL & RELIABLE</span>
              <span>03 &nbsp; TIDY, THOUGHTFUL WORK</span>
            </div>

            <a className="button button-light" href="#contact">
              GET TO KNOW US <span>↗</span>
            </a>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-intro">
            <p className="eyebrow">LET'S MAKE YOUR PLACE FEEL RIGHT</p>
            <h2>
              A fresh coat.
              <br />
              <em>A fresh start.</em>
            </h2>

            <p>
              Tell us a little about your project. We’ll get back to you to
              talk through the details and arrange a free quote.
            </p>

            <blockquote>
              “Great price, honest, timely work, and the colors came out
              exactly right.”
              <cite>— Adnan Hassan, Google review</cite>
            </blockquote>

            <div className="contact-phone">
              <span>RATHER TALK IT THROUGH?</span>
              <a href="tel:0470353282">CALL US &nbsp; ↗</a>
              <small>0470 353 282</small>
            </div>
          </div>

          <form className="contact-form" onSubmit={submitProject}>
            <div className="form-heading">
              <span>01 / YOUR PROJECT</span>
              <h3>Tell us what you have in mind.</h3>
            </div>

            <label>
              Your name
              <input required name="Name" placeholder="Your name" autoComplete="name" />
            </label>

            <div className="form-row">
              <label>
                Phone number
                <input
                  required
                  type="tel"
                  name="Phone"
                  placeholder="Your phone number"
                  autoComplete="tel"
                />
              </label>
            <label>
              Email address
              <input
                type="email"
                name="Email"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </label>
          </div>

          <label>
            Where is the project?
            <input
              name="Address"
              placeholder="Town or project address"
              autoComplete="street-address"
            />
          </label>

            <div className="service-picker">
              <p className="service-picker-label">Services</p>

              <div className="service-picker-control">
                <button
                  className="service-picker-trigger"
                  type="button"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <span>
                    {selectedServices.length > 0
                      ? `${selectedServices.length} service${selectedServices.length === 1 ? '' : 's'} selected`
                      : 'Select services'}
                  </span>
                  <span className="service-picker-arrow">
                    {servicesOpen ? '⌃' : '⌄'}
                  </span>
                </button>

                {servicesOpen && (
                  <div className="service-dropdown">
                    {services.map((service) => (
                      <label className="service-option" key={service.number}>
                        <input
                          type="checkbox"
                          name="Service"
                          value={service.title}
                          checked={selectedServices.includes(service.title)}
                          onChange={(event) =>
                            handleServiceChange(event, service.title)
                          }
                        />
                        <span>{service.title}</span>
                      </label>
                    ))}

                    <button
                      className="service-done"
                      type="button"
                      onClick={() => setServicesOpen(false)}
                    >
                      DONE
                    </button>
                  </div>
                )}
              </div>

            </div>

          <label>
            Tell us about the project
            <textarea
              name="Project details"
              rows="4"
              placeholder="Rooms, timing, colors, or anything else that would help…"
            />
          </label>

          <div className="form-actions">
            <button className="button button-dark" type="submit">
              SEND ENQUIRY <span>↗</span>
            </button>

            <button
              className="reset-button"
              type="reset"
              onClick={clearProjectForm}
            >
              CLEAR FORM
            </button>
          </div>

          {sent && (
            <p className="form-note">
              Your email app should open with the enquiry ready to send.
              Update the example email address in App.jsx before launch.
            </p>
          )}

          <p className="form-privacy">
            We’ll only use these details to get back to you about your project.
          </p>
        </form>
      </section>

      <section className="review-section section-pad">
        <div>
          <p className="eyebrow">A KIND WORD GOES A LONG WAY</p>
          <h2>
            How did we <em>do?</em>
          </h2>
          <p>Had work done by Oak & Brush? We’d love to hear how it went.</p>
        </div>

        <form
          className="review-form"
          onSubmit={(event) => {
            event.preventDefault()
            setReviewSent(true)
            event.currentTarget.reset()
          }}
        >
          <label className="visually-hidden" htmlFor="review">
            Your review
          </label>

          <textarea
            id="review"
            required
            placeholder="Write a few words about your experience…"
            rows="3"
          />

          <div className="review-form-bottom">
            <label>
              Your name
              <input required name="reviewer" placeholder="Your name" />
            </label>

            <button className="text-link" type="submit">
              SHARE YOUR REVIEW <span>↗</span>
            </button>
          </div>

          {reviewSent && (
            <p className="form-note">Thanks for sharing your kind words.</p>
          )}

          <p className="form-privacy">
            Reviews are not saved yet. Connect a form service to collect them.
          </p>
        </form>
      </section>
    </main>

    <footer className="site-footer">
      <div className="footer-top">
        <Brand light />

        <p>
          Thoughtful painting for
          <br />
          the place you call home.
        </p>

        <a href="#contact">
          LET&apos;S TALK <span>↗</span>
        </a>
      </div>

      <div className="footer-bottom">
        <span>© 2026 OAK & BRUSH PAINTING CO.</span>
        <span>MADE WITH CARE, AND A CLEAN BRUSH ✳</span>
        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  </>
  )
}

export default App


