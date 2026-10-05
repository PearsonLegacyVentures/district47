import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronRight,
  ExternalLink,
  History,
  Mail,
  MapPin,
  Menu,
  Mic2,
  Search,
  ShieldCheck,
  Trophy,
  Users,
  X,
} from 'lucide-react'
import { clubs, alignmentAsOf } from './data/clubs'
import {
  areaLeaders,
  divisionLeaders,
  divisionMeta,
  executiveLeaders,
  formerDistrictDirectors,
  historyHighlights,
  keyDates,
  memberResources,
  newsItems,
} from './data/content'

const navItems = [
  ['About', '/about'],
  ['Find a Club', '/clubs'],
  ['Events', '/events'],
  ['Members', '/members'],
  ['Leadership', '/leadership'],
  ['Recognition', '/recognition'],
  ['News', '/news'],
]

function ExternalLinkButton({ href, children, className = '' }) {
  return (
    <a className={`button ${className}`} href={href} target="_blank" rel="noreferrer">
      {children} <ExternalLink size={16} />
    </a>
  )
}

function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Toastmasters District 47 home">
      <span className="brand-org">TOASTMASTERS INTERNATIONAL®</span>
      <span className="brand-district">DISTRICT 47</span>
      <span className="brand-region">South Florida · The Bahamas</span>
    </Link>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className="site-header">
      <div className="top-rule" />
      <div className="nav-wrap">
        <Brand />
        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map(([label, to]) => (
            <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'active' : ''}>
              {label}
            </NavLink>
          ))}
          <a className="nav-member" href="https://www.toastmasters.org/" target="_blank" rel="noreferrer">
            Toastmasters.org <ExternalLink size={14} />
          </a>
        </nav>
        <button className="menu-button" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Brand />
          <p className="footer-copy">Serving South Florida and The Islands of The Bahamas since 1955.</p>
        </div>
        <div>
          <h3>Start here</h3>
          <Link to="/clubs">Find a club</Link>
          <Link to="/events">District events</Link>
          <Link to="/leadership">District leaders</Link>
        </div>
        <div>
          <h3>Member links</h3>
          <a href="https://www.toastmasters.org/resources/resource-library" target="_blank" rel="noreferrer">Resource Library</a>
          <a href="https://www.toastmasters.org/find-a-club" target="_blank" rel="noreferrer">Official Club Finder</a>
          <a href="mailto:web@toastmastersd47.org">web@toastmastersd47.org</a>
        </div>
      </div>
      <div className="legal">
        <ShieldCheck size={18} />
        <p>
          Toastmasters International® owns all Toastmasters trademarks and copyrights, including “Toastmaster,”
          “Toastmasters,” “Toastmasters International,” and the official emblem. District 47 is authorized to use
          these marks in the form and manner prescribed by the Toastmasters International Board of Directors.
          Information, photos, and all other materials posted are for the sole use of Toastmasters’ members, for
          Toastmasters business only. They are not to be used for solicitation or distribution of non-Toastmasters
          material or information.
        </p>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Toastmasters District 47</span>
        <span>Where Leaders Are Made.</span>
      </div>
    </footer>
  )
}

function PageHero({ eyebrow, title, intro, action }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
        {action}
      </div>
    </section>
  )
}

function Home() {
  const bahamasClubs = clubs.filter(c => c.country === 'The Bahamas').length
  const usClubs = clubs.filter(c => c.country === 'United States').length

  return (
    <>
      <section className="hero">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-47">47</div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow light">TOASTMASTERS DISTRICT 47</span>
            <h1>South Florida.<br />The Bahamas.<br /><span>One district.</span></h1>
            <p>
              A community of clubs helping people strengthen communication, practice leadership and build confidence
              through experience.
            </p>
            <div className="hero-actions">
              <Link className="button button-yellow" to="/clubs">Find a Club <ArrowRight size={17} /></Link>
              <Link className="button button-ghost" to="/events">Upcoming Events</Link>
            </div>
          </div>
          <div className="hero-panel">
            <span className="panel-label">DISTRICT 47 · EST. 1955</span>
            <div className="region-row">
              <div className="region-stat"><strong>{usClubs}</strong><span>listed U.S. clubs</span></div>
              <div className="region-stat"><strong>{bahamasClubs}</strong><span>listed Bahamas clubs</span></div>
            </div>
            <p>
              Current directory data is based on the District alignment published July 6, 2026. Official club meeting
              details remain on Toastmasters International.
            </p>
            <Link to="/clubs" className="text-link light-link">Explore the directory <ChevronRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="quick-paths section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WHERE DO YOU WANT TO GO?</span>
            <h2>District 47, without the scavenger hunt.</h2>
          </div>
          <div className="quick-grid">
            {[
              [MapPin, 'Find a club', 'Search by place, Division, Area or meeting format.', '/clubs'],
              [CalendarDays, 'What’s next', 'See contest windows, conference dates and District events.', '/events'],
              [BookOpen, 'Member resources', 'Training, contests, District business and official resources.', '/members'],
              [Users, 'Find a leader', 'District, Division and Area leadership in one directory.', '/leadership'],
            ].map(([Icon, title, copy, to]) => (
              <Link to={to} className="quick-card" key={title}>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{copy}</p>
                <span>Open <ArrowRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section events-preview">
        <div className="container split-heading">
          <div>
            <span className="eyebrow">COMING UP</span>
            <h2>Dates members need.</h2>
          </div>
          <Link className="text-link" to="/events">View all events <ArrowRight size={16} /></Link>
        </div>
        <div className="container date-list">
          {keyDates.slice(0, 3).map(item => (
            <article className="date-card" key={item.title}>
              <div className="date-chip">{item.date}</div>
              <div>
                <span className="small-label">{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <ArrowRight className="date-arrow" />
            </article>
          ))}
        </div>
      </section>

      <section className="section district-story">
        <div className="container story-grid">
          <div className="story-block blue">
            <span className="eyebrow light">SINCE 1955</span>
            <h2>Built across borders. Connected by the same practice.</h2>
            <p>
              The Bahamas joined District 47 in 1973. Today, clubs span South Florida, multiple Bahamian islands and
              online communities.
            </p>
            <Link className="button button-ghost" to="/about">Explore our history</Link>
          </div>
          <div className="story-block maroon">
            <span className="eyebrow light">2026–2027</span>
            <h2>Meet the people serving the District this year.</h2>
            <p>
              District Director Dr. Susan Vineta, DTM leads the 2026–2027 team with leaders across eight Divisions.
            </p>
            <Link className="button button-ghost" to="/leadership">Leadership directory</Link>
          </div>
        </div>
      </section>

      <section className="section latest">
        <div className="container split-heading">
          <div>
            <span className="eyebrow">DISTRICT NEWS</span>
            <h2>Latest from District 47.</h2>
          </div>
          <Link className="text-link" to="/news">See all news <ArrowRight size={16} /></Link>
        </div>
        <div className="container news-grid">
          {newsItems.slice(0, 3).map(item => (
            <article className="news-card" key={item.title}>
              <span className="small-label">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.date}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-grid">
          <div>
            <span className="eyebrow light">NEW TO TOASTMASTERS?</span>
            <h2>Your first meeting is the easiest place to start.</h2>
          </div>
          <ExternalLinkButton href="https://www.toastmasters.org/find-a-club" className="button-yellow">
            Find an official club
          </ExternalLinkButton>
        </div>
      </section>
    </>
  )
}

function Clubs() {
  const [query, setQuery] = useState('')
  const [division, setDivision] = useState('All')
  const [format, setFormat] = useState('All')
  const [country, setCountry] = useState('All')

  const filtered = useMemo(() => clubs.filter(club => {
    const haystack = `${club.name} ${club.location} ${club.area} ${club.division}`.toLowerCase()
    return (!query || haystack.includes(query.toLowerCase()))
      && (division === 'All' || club.division === division)
      && (format === 'All' || club.meetingType === format)
      && (country === 'All' || club.country === country)
  }), [query, division, format, country])

  return (
    <>
      <PageHero
        eyebrow="FIND A CLUB"
        title="Find your room."
        intro="Search the District 47 alignment by location, Division, Area or meeting format. Always confirm current meeting details on the official Toastmasters listing before visiting."
      />
      <section className="section club-section">
        <div className="container">
          <div className="filter-bar">
            <label className="search-box">
              <Search size={19} />
              <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search Nassau, Miami, club name..." />
            </label>
            <select value={country} onChange={e => setCountry(e.target.value)} aria-label="Filter by country">
              <option>All</option><option>The Bahamas</option><option>United States</option>
            </select>
            <select value={division} onChange={e => setDivision(e.target.value)} aria-label="Filter by division">
              <option>All</option>{divisionMeta.map(d => <option key={d.id}>{d.id}</option>)}
            </select>
            <select value={format} onChange={e => setFormat(e.target.value)} aria-label="Filter by meeting format">
              <option>All</option><option>In Person</option><option>Hybrid</option><option>Online</option>
            </select>
          </div>
          <div className="results-line">
            <strong>{filtered.length}</strong> clubs shown
            <span>Alignment source: {alignmentAsOf}</span>
          </div>
          <div className="club-grid">
            {filtered.map(club => (
              <article className="club-card" key={`${club.number}-${club.division}`}>
                <div className="club-meta">
                  <span>Division {club.division}</span>
                  <span>Area {club.area}</span>
                </div>
                <h3>{club.name}</h3>
                <p><MapPin size={16} /> {club.location}</p>
                <div className="tag-row">
                  <span className="tag">{club.meetingType}</span>
                  {club.clubType === 'Restricted' && <span className="tag muted">Restricted</span>}
                </div>
                <a href={club.url} target="_blank" rel="noreferrer" className="text-link">
                  Official club details <ExternalLink size={15} />
                </a>
              </article>
            ))}
          </div>
          {!filtered.length && <div className="empty-state">No clubs match those filters. Try a broader search.</div>}
        </div>
      </section>
    </>
  )
}

function Events() {
  return (
    <>
      <PageHero
        eyebrow="EVENTS & CONTESTS"
        title="Know what’s next."
        intro="Clear dates for District events, contest progression, training and the 2027 Annual Conference."
        action={<ExternalLinkButton href="https://www.toastmastersd47.org/district-calendar/">Open District calendar</ExternalLinkButton>}
      />
      <section className="section">
        <div className="container">
          <div className="timeline">
            {keyDates.map((item, i) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-number">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <span className="small-label">{item.type}</span>
                  <h2>{item.title}</h2>
                  <div className="timeline-date">{item.date}</div>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">2026–2027 CONTEST FORMAT</span>
            <h2>Three contests. One season.</h2>
          </div>
          <div className="bullet-panel">
            <p><strong>Table Topics</strong></p>
            <p><strong>Evaluation</strong></p>
            <p><strong>International Speech</strong></p>
            <p>Area, Division and District-level contests are scheduled in person for the 2026–2027 program year.</p>
            <ExternalLinkButton href="https://www.toastmastersd47.org/contests-contest-resources/">
              Contest resources
            </ExternalLinkButton>
          </div>
        </div>
      </section>
    </>
  )
}

function Members() {
  return (
    <>
      <PageHero
        eyebrow="MEMBER RESOURCES"
        title="Less hunting. More doing."
        intro="The recurring District resources members and club officers need most, organized around the job you’re trying to get done."
      />
      <section className="section">
        <div className="container resource-grid">
          {memberResources.map(({ title, description, url, label }) => (
            <article className="resource-card" key={title}>
              <BookOpen size={22} />
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={url} target="_blank" rel="noreferrer" className="text-link">{label} <ExternalLink size={15} /></a>
            </article>
          ))}
        </div>
      </section>
      <section className="cta-band maroon-band">
        <div className="container cta-grid">
          <div>
            <span className="eyebrow light">OFFICIAL MATERIALS</span>
            <h2>Use the current Toastmasters Resource Library.</h2>
          </div>
          <ExternalLinkButton href="https://www.toastmasters.org/resources/resource-library" className="button-yellow">
            Open Resource Library
          </ExternalLinkButton>
        </div>
      </section>
    </>
  )
}

function Leadership() {
  const areaByDivision = (division) => areaLeaders.filter(a => a.area.startsWith(
    ({ A:'1', B:'2', C:'3', D:'4', E:'5', F:'6', G:'7', H:'8' })[division]
  ))

  return (
    <>
      <PageHero
        eyebrow="2026–2027 LEADERSHIP"
        title="District leadership, clearly organized."
        intro="District, Division and Area leaders serving the current Toastmasters year."
      />
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">DISTRICT EXECUTIVE TEAM</span>
            <h2>District leadership.</h2>
          </div>
          <div className="leader-grid executive-grid">
            {executiveLeaders.map((leader, i) => (
              <article className={i < 3 ? 'leader-card primary-leader' : 'leader-card'} key={leader.name}>
                <div className="avatar">{leader.name.split(' ').filter(w => !w.includes('DTM')).slice(0,2).map(w => w[0]).join('')}</div>
                <h3>{leader.name}</h3>
                <p>{leader.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">DIVISIONS A–H</span>
            <h2>Leadership across the District.</h2>
          </div>
          <div className="division-grid">
            {divisionLeaders.map(leader => {
              const meta = divisionMeta.find(d => d.id === leader.division)
              return (
                <article className="division-card" key={leader.division}>
                  <div className="division-letter">{leader.division}</div>
                  <span className="small-label">Division Director</span>
                  <h3>{leader.name}</h3>
                  <p>{meta?.region}</p>
                  <div className="area-stack">
                    {areaByDivision(leader.division).map(area => (
                      <div key={area.area}><span>Area {area.area}</span><strong>{area.name}</strong></div>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
      <section className="section contact-strip">
        <div className="container cta-grid">
          <div>
            <span className="eyebrow">CONTACT</span>
            <h2>Need the right District contact?</h2>
            <p>The District website team can route general website inquiries.</p>
          </div>
          <a className="button" href="mailto:web@toastmastersd47.org"><Mail size={17} /> web@toastmastersd47.org</a>
        </div>
      </section>
    </>
  )
}

function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT DISTRICT 47"
        title="A District with a long memory and a wide map."
        intro="District 47 was established in 1955. The Bahamas joined in 1973. Today the District connects clubs across South Florida, The Bahamas and online communities."
      />
      <section className="section">
        <div className="container history-layout">
          <div className="history-intro">
            <History size={28} />
            <h2>District 47 through the years</h2>
            <p>A condensed history based on the District’s published historical record.</p>
          </div>
          <div className="history-list">
            {historyHighlights.map(item => (
              <article key={item.year}>
                <strong>{item.year}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">REGION 7</span>
            <h2>Part of a larger Toastmasters region.</h2>
          </div>
          <div>
            <p>
              District 47 belongs to Region 7. Its current footprint includes Southeastern Florida, The Commonwealth
              of The Bahamas and fully online clubs with international members.
            </p>
            <ExternalLinkButton href="https://www.toastmasters.org/">Learn about Toastmasters</ExternalLinkButton>
          </div>
        </div>
      </section>
    </>
  )
}

function Recognition() {
  return (
    <>
      <PageHero
        eyebrow="RECOGNITION & HISTORY"
        title="Celebrate progress. Preserve the record."
        intro="District recognition should be easy to find, easy to update and separate from time-sensitive news."
      />
      <section className="section">
        <div className="container recognition-grid">
          <article className="feature-card">
            <Trophy size={28} />
            <span className="small-label">DISTRICT RECOGNITION</span>
            <h2>2026–2027 awards and incentives</h2>
            <p>Recognition programs for clubs and members live in the District’s current-year resources.</p>
            <ExternalLinkButton href="https://www.toastmastersd47.org/2026-2027-district-47-incentive-programs/">
              View current incentives
            </ExternalLinkButton>
          </article>
          <article className="feature-card">
            <Mic2 size={28} />
            <span className="small-label">DISTINGUISHED TOASTMASTERS</span>
            <h2>DTM Roll Call</h2>
            <p>The District maintains a historical roster recognizing members who have earned the Distinguished Toastmaster designation.</p>
            <ExternalLinkButton href="https://www.toastmastersd47.org/district-47-dtm-roll-call/">
              View DTM roster
            </ExternalLinkButton>
          </article>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">RECENT DISTRICT LEADERSHIP</span>
            <h2>The record continues.</h2>
          </div>
          <div className="director-list">
            {formerDistrictDirectors.map(d => (
              <div key={d.year}><span>{d.year}</span><strong>{d.name}</strong></div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function News() {
  return (
    <>
      <PageHero
        eyebrow="DISTRICT NEWS"
        title="Current District 47 updates."
        intro="Leadership news, recognition, The Sunshiner and important member notices in one place."
      />
      <section className="section">
        <div className="container news-list">
          {newsItems.map(item => (
            <article key={item.title}>
              <div>
                <span className="small-label">{item.category}</span>
                <h2>{item.title}</h2>
                <p>{item.date}</p>
              </div>
              <a href={item.url} target="_blank" rel="noreferrer" className="icon-link" aria-label={`Open ${item.title}`}>
                <ArrowRight />
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title="That page isn’t here."
      intro="Use the main navigation or return to the District 47 homepage."
      action={<Link className="button" to="/">Back to home</Link>}
    />
  )
}

function App() {
  const location = useLocation()
  useEffect(() => window.scrollTo(0, 0), [location.pathname])

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/members" element={<Members />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/recognition" element={<Recognition />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
