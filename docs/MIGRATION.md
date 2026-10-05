# District 47 Migration Map

## Migration principle

The existing District 47 website is the source inventory, not the design template. Public District information is reorganized into a smaller information architecture focused on the jobs visitors actually need to complete.

Toastmasters International remains the authoritative source for current club meeting times and locations. The District directory is a discovery layer and every club record links to its official Toastmasters listing.

## New top-level information architecture

| New route | Purpose | Primary legacy sources |
| --- | --- | --- |
| `/` | District orientation and fastest paths | Homepage, About, current news |
| `/about` | District history and geographic footprint | About District 47 |
| `/clubs` | Searchable District club alignment | District 47 Clubs |
| `/events` | Contest windows, conference and calendar | District Calendar, Contest Resources, Annual Conference |
| `/members` | Training, District business and official resources | Club Officer Training, District Council, TI Resource Library |
| `/leadership` | District, Division and Area leadership | Directory |
| `/recognition` | Incentives, DTM recognition and leadership record | Incentive Programs, DTM Roll Call, District history |
| `/news` | Current District notices and The Sunshiner | Homepage news, The Sunshiner |

## Legacy redirect map

- `/about-district-47/` → `/about`
- `/district-47-clubs/` → `/clubs`
- `/district-calendar/` → `/events`
- `/club-officer-training-and-tlis/` → `/members`
- `/contests-contest-resources/` → `/events`
- `/directory/` → `/leadership`
- `/2026-2027-district-47-incentive-programs/` → `/recognition`
- `/district-47-dtm-roll-call/` → `/recognition`
- `/district-conference/` → `/events`
- `/district-council-meetings/` → `/members`
- `/the-sunshiner/` → `/news`

## Data-quality findings

### Conflicting public totals
The current homepage and About page publish different member/club totals. The replacement does not promote either number as an official current statistic. Verified structural facts such as eight Divisions and the District's 1955 founding year are used instead.

### Club alignment anomalies
The source alignment contains location anomalies and incomplete rows. The migration preserves source records rather than silently rewriting official alignment data. Users are sent to Toastmasters International for authoritative club meeting information.

### Time-sensitive legacy pages
Some District Council and older contest/training content is tied to previous program-year dates. The replacement elevates current 2026–2027 information and links to official Toastmasters resources when material is controlled by Toastmasters International.

## Content ownership model

Recurring content is separated from presentation:

- `src/data/clubs.js` — club alignment and official club links
- `src/data/content.js` — leadership, District history, event milestones, news and resource links
- `src/App.jsx` — page structure and components
- `src/styles.css` — visual design system

This allows annual District teams to update names, dates and records without redesigning pages.

## Pre-launch content review

Before changing the production domain, District leadership should confirm:
1. 2026–2027 leader names and titles.
2. The current District club alignment.
3. Annual Conference dates and location.
4. Current District contact email(s).
5. Approved District photographs and approved Toastmasters brand assets.
6. Any historical or recognition records that should be migrated beyond the public records currently surfaced.
