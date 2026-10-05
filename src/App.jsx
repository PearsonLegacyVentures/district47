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

const siteImages = {
  logo: 'https://www.toastmastersd47.org/wp-content/uploads/2026/06/D47-Logo-Horizontal.jpeg',
  trio: 'https://www.toastmastersd47.org/wp-content/uploads/2026/06/TRIO-Banner.jpeg',
  convention: 'https://www.toastmastersd47.org/wp-content/uploads/2025/08/1000039244-1024x562.jpg',
  tli2026: 'https://www.toastmastersd47.org/wp-content/uploads/2026/07/TLI-7.png',
  internationalChampions: 'https://www.toastmastersd47.org/wp-content/uploads/2025/06/2026-D47-International-Champ-scaled.jpg',
  tliDivisionE: 'https://www.toastmastersd47.org/wp-content/uploads/2025/07/Division-E-TLI-2025-07-12-1024x683.jpg',
  hallOfFame: 'https://www.toastmastersd47.org/wp-content/uploads/2025/07/2025-05-17-Florida-Hall-of-Fame-1024x682.jpg',
  annualConference: 'https://www.toastmastersd47.org/wp-content/uploads/2025/07/2025-05-04-Annual-Conference.jpg',
  conferenceStage: 'https://www.toastmastersd47.org/wp-content/uploads/2025/07/2025-05-03-Annual-Conference-1024x682.jpg',
  conferenceDinner: 'https://www.toastmastersd47.org/wp-content/uploads/2025/07/2025-05-02-Annual-Conference.jpg',
  divisionDContest: 'https://www.toastmastersd47.org/wp-content/uploads/2025/07/2025-04-05-Division-D-Contests-1024x682.jpg',
  contestWinners: 'https://www.toastmastersd47.org/wp-content/uploads/2025/07/2025-03-29-Division-C-Contests-1024x682.jpg',
  area32Contest: 'https://www.toastmastersd47.org/wp-content/uploads/2025/07/2025-02-15-Area-32-Contests-1024x682.jpg',
  training: 'https://www.toastmastersd47.org/wp-content/uploads/2025/07/2025-01-18-Divisions-A-B-TLI.jpg',
  trainingCD: 'https://www.toastmastersd47.org/wp-content/uploads/2025/07/2024-07-27-Divisions-C-D-TLI-1024x682.jpg',
  conferenceWorkshop: 'https://www.toastmastersd47.org/wp-content/uploads/2025/07/2024-05-05-District-Conference-1024x682.jpg',
  conferenceRecognition: 'https://www.toastmastersd47.org/wp-content/uploads/2025/07/2024-05-04-District-Conference-1024x682.jpg',
  conferenceSession: 'https://www.toastmastersd47.org/wp-content/uploads/2025/07/2024-05-03-District-Conference-1024x682.jpg',
}

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
      <img src={siteImages.logo} alt="Toastmasters District 47 — South Florida and The Islands of The Bahamas" />
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
          “Toastmasters,” “Toastmasters International,” and the “official emblem.” All club, Area, Division, District,
          and region websites and social media channels are authorized to use these marks in the form and manner
          prescribed by the Toastmasters International Board of Directors. Information, photos, and all other materials
          posted are for the sole use of Toastmasters’ members, for Toastmasters business only. It is not to be used
          for solicitation or distribution of non-Toastmasters material or information.
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
  const trio = executiveLeaders.slice(0, 3)

  return (
    <>
      <section className="hero hero-polished">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-47">47</div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow light">TOASTMASTERS DISTRICT 47</span>
            <h1>South Florida.<br />The Bahamas.<br /><span>One district.</span></h1>
            <p>
              Over 3,000 members across 170+ clubs, building stronger communicators and leaders through real practice,
              real service and a community that crosses borders.
            </p>
            <div className="hero-actions">
              <Link className="button button-yellow" to="/clubs">Find a Club <ArrowRight size={17} /></Link>
              <Link className="button button-ghost" to="/events">Upcoming Events</Link>
            </div>
            <div className="hero-proof-line">
              <span><strong>1955</strong> District established</span>
              <span><strong>8</strong> Divisions</span>
              <span><strong>2</strong> countries</span>
            </div>
          </div>
          <div className="hero-media hero-media-polished">
            <img src={siteImages.convention} alt="District 47 members celebrating together at a Toastmasters event" />
            <div className="hero-media-wash" />
            <div className="hero-stat-card">
              <span className="panel-label">DISTRICT 47 · SOUTH FLORIDA + THE BAHAMAS</span>
              <div className="region-row">
                <div className="region-stat"><strong>3,000+</strong><span>members</span></div>
                <div className="region-stat"><strong>170+</strong><span>clubs</span></div>
              </div>
              <Link to="/clubs" className="text-link light-link">Explore the District <ChevronRight size={16} /></Link>
            </div>
          </div>
        </div>
        <div className="hero-bottom-fade" />
      </section>

      <section className="leadership-spotlight">
        <div className="container leadership-spotlight-shell">
          <div className="leadership-visual">
            <img src={siteImages.trio} alt="District 47 2026–2027 leadership trio" />
            <div className="leadership-visual-label">
              <span>2026–2027</span>
              <strong>Meet the Trio</strong>
            </div>
          </div>
          <div className="leadership-copy">
            <span className="eyebrow">DISTRICT LEADERSHIP</span>
            <h2>Leadership with a face, not just a title.</h2>
            <p>
              District 47 is led by members who have grown through the same clubs, contests, training rooms and service
              roles as the people they now support.
            </p>
            <div className="trio-list">
              {trio.map((leader, index) => (
                <div className="trio-person" key={leader.name}>
                  <span className="trio-index">0{index + 1}</span>
                  <div>
                    <strong>{leader.name}</strong>
                    <span>{leader.role}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link className="text-link" to="/leadership">Meet the full District team <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="quick-paths section soft-flow">
        <div className="container">
          <div className="split-heading">
            <div>
              <span className="eyebrow">START HERE</span>
              <h2>Everything important, without digging.</h2>
            </div>
            <p className="heading-note">The fastest routes for visitors, members and club officers.</p>
          </div>
          <div className="quick-grid quick-grid-soft">
            {[
              [MapPin, 'Find a club', 'Search District 47 by place, Division, Area or meeting format.', '/clubs'],
              [CalendarDays, 'What’s next', 'Conference, contests, training and District dates.', '/events'],
              [BookOpen, 'Member resources', 'Training, District business and official Toastmasters resources.', '/members'],
              [Users, 'Find a leader', 'District, Division and Area leadership in one place.', '/leadership'],
            ].map(([Icon, title, copy, to]) => (
              <Link to={to} className="quick-card quick-card-soft" key={title}>
                <div className="quick-icon"><Icon size={23} /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <span>Explore <ArrowRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="motion-section">
        <div className="container motion-heading">
          <span className="eyebrow light">DISTRICT 47 IN MOTION</span>
          <h2>Training rooms. Contest stages. Recognition nights. Real people doing the work.</h2>
          <p>Approved District photography from events across the District.</p>
        </div>
        <div className="container motion-collage">
          <figure className="motion-photo motion-photo-a">
            <img src={siteImages.tliDivisionE} alt="District 47 members at Toastmasters leadership training" />
            <figcaption><span>TRAINING</span><strong>Building capable club leaders</strong></figcaption>
          </figure>
          <figure className="motion-photo motion-photo-b">
            <img src={siteImages.conferenceStage} alt="District 47 members receiving recognition on stage" />
            <figcaption><span>RECOGNITION</span><strong>Celebrating the people who serve</strong></figcaption>
          </figure>
          <figure className="motion-photo motion-photo-c">
            <img src={siteImages.contestWinners} alt="District 47 speech contest winners" />
            <figcaption><span>CONTESTS</span><strong>Confidence under pressure</strong></figcaption>
          </figure>
          <figure className="motion-photo motion-photo-d">
            <img src={siteImages.conferenceDinner} alt="District 47 annual conference gathering" />
            <figcaption><span>CONFERENCE</span><strong>One District in the same room</strong></figcaption>
          </figure>
          <figure className="motion-photo motion-photo-e">
            <img src={siteImages.trainingCD} alt="District 47 Toastmasters at training" />
          </figure>
        </div>
      </section>

      <section className="pulse-section">
        <div className="container">
          <div className="split-heading pulse-heading">
            <div>
              <span className="eyebrow">NOW IN DISTRICT 47</span>
              <h2>What members should know right now.</h2>
            </div>
            <Link className="text-link" to="/news">All District news <ArrowRight size={16} /></Link>
          </div>
          <div className="pulse-grid">
            <a className="pulse-feature" href="https://www.toastmastersd47.org/the-sunshiner-issue-2-october-2026/" target="_blank" rel="noreferrer">
              <img src={siteImages.training} alt="District 47 members together at training" />
              <div className="pulse-overlay">
                <span className="small-label light">THE SUNSHINER · OCTOBER 2026</span>
                <h3>The Sunshiner Issue 2</h3>
                <p>The latest District publication, current news and member stories.</p>
                <span className="story-link">Read the issue <ArrowRight size={15} /></span>
              </div>
            </a>
            <div className="pulse-stack">
              <a className="pulse-story" href="https://www.toastmastersd47.org/district-47-celebrating-excellence/" target="_blank" rel="noreferrer">
                <img src={siteImages.hallOfFame} alt="District 47 recognition event" />
                <div><span>RECOGNITION</span><strong>District 47: Celebrating Excellence</strong></div>
              </a>
              <a className="pulse-story" href="https://www.toastmastersd47.org/vision-d47-tune-in-2026-2027-toastmasters-year/" target="_blank" rel="noreferrer">
                <img src={siteImages.conferenceWorkshop} alt="District 47 leadership development session" />
                <div><span>LEADERSHIP</span><strong>Vision D47: Tune In 2026–2027</strong></div>
              </a>
              <a className="pulse-story" href="https://www.toastmastersd47.org/d47-photo-gallery/" target="_blank" rel="noreferrer">
                <img src={siteImages.internationalChampions} alt="District 47 speech contest champions" />
                <div><span>PHOTO GALLERY</span><strong>See District 47 in action</strong></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section events-preview flow-bridge">
        <div className="container split-heading">
          <div>
            <span className="eyebrow">COMING UP</span>
            <h2>Dates members need.</h2>
          </div>
          <Link className="text-link" to="/events">View all events <ArrowRight size={16} /></Link>
        </div>
        <div className="container date-list date-list-soft">
          {keyDates.slice(0, 4).map(item => (
            <article className="date-card date-card-soft" key={item.title}>
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

      <section className="home-resources">
        <div className="container home-resources-shell">
          <div className="home-resources-copy">
            <span className="eyebrow light">MEMBER HUB</span>
            <h2>The things members return for.</h2>
            <p>Training, contest support, District business, video archives, recognition and the current calendar.</p>
            <Link className="button button-yellow" to="/members">Open member resources <ArrowRight size={16} /></Link>
          </div>
          <div className="home-resource-links">
            {[
              ['Club Officer Training / TLI', 'https://www.toastmastersd47.org/club-officer-training-and-tlis/'],
              ['District Calendar', 'https://www.toastmastersd47.org/district-calendar/'],
              ['Contests & Resources', 'https://www.toastmastersd47.org/contests-contest-resources/'],
              ['District Business', 'https://www.toastmastersd47.org/district-council-meetings/'],
              ['Video Archives', 'https://www.youtube.com/@District47Toastmasters'],
              ['The Sunshiner', 'https://www.toastmastersd47.org/the-sunshiner-archive/'],
            ].map(([label, href], i) => (
              <a href={href} target="_blank" rel="noreferrer" key={label}>
                <span>0{i + 1}</span><strong>{label}</strong><ArrowRight size={16} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="recognition-home">
        <div className="container recognition-home-grid">
          <div className="recognition-home-copy">
            <span className="eyebrow">RECOGNITION & HISTORY</span>
            <h2>Progress deserves a record.</h2>
            <p>
              From Distinguished Toastmasters and club growth to decades of District history, the work should remain
              visible long after the applause ends.
            </p>
            <div className="recognition-actions">
              <Link className="text-link" to="/recognition">Recognition & awards <ArrowRight size={16} /></Link>
              <Link className="text-link" to="/about">District history <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="recognition-home-photos">
            <img className="recognition-back" src={siteImages.conferenceRecognition} alt="District 47 recognition ceremony" />
            <img className="recognition-front" src={siteImages.divisionDContest} alt="District 47 contest winners with trophies" />
          </div>
        </div>
      </section>

      <section className="cta-band cta-band-polished">
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
      <section className="section visual-intro-section">
        <div className="container visual-intro">
          <img src={siteImages.annualConference} alt="District 47 annual conference gathering" />
          <div>
            <span className="eyebrow">DISTRICT EVENTS</span>
            <h2>Show up. Compete. Learn. Connect.</h2>
            <p>District 47 events bring together members from across South Florida and The Bahamas for training, contests, recognition and the annual conference.</p>
          </div>
        </div>
      </section>
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
        <div className="container leadership-banner">
          <img src={siteImages.trio} alt="District 47 2026–2027 Trio" />
        </div>
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
        intro="District 47 was established in 1955 and serves South Florida and The Islands of The Bahamas. The District supports over 3,000 members in 170+ clubs, along with several fully online clubs with international members."
      />
      <section className="section district-photo-lead">
        <div className="container district-photo-card">
          <img src={siteImages.convention} alt="District 47 members together at a Toastmasters event" />
          <div>
            <span className="eyebrow">DISTRICT 47 TODAY</span>
            <h2>Over 3,000 members. 170+ clubs.</h2>
            <p>South Florida, The Islands of The Bahamas and online communities connected through the same Toastmasters mission.</p>
          </div>
        </div>
      </section>
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
      <section className="section recognition-photo-strip">
        <div className="container recognition-photo">
          <img src={siteImages.contestWinners} alt="District 47 members receiving contest recognition" />
          <div>
            <span className="eyebrow light">RECOGNITION</span>
            <h2>Celebrate the work.</h2>
            <p>District 47 recognizes members and clubs for growth, service, speaking, leadership and sustained excellence.</p>
          </div>
        </div>
      </section>
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
