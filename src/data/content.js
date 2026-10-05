export const divisionMeta = [
  { id: 'A', region: 'South Broward / North Miami-Dade Counties' },
  { id: 'B', region: 'Central Broward County' },
  { id: 'C', region: 'Northern Broward / Southern Palm Beach Counties' },
  { id: 'D', region: 'Okeechobee, Indian River, Port St. Lucie, Martin & Northern Palm Beach Counties' },
  { id: 'E', region: 'Southern Miami-Dade & Monroe Counties' },
  { id: 'F', region: 'Abaco, Andros, Grand Bahama & New Providence, The Bahamas' },
  { id: 'G', region: 'Eleuthera & New Providence, The Bahamas' },
  { id: 'H', region: 'Southwest Florida: Manatee to Collier Counties' },
]

export const executiveLeaders = [
  { name: 'Dr. Susan Vineta, DTM', role: 'District Director', group: 'District Executive Team' },
  { name: 'Oris Martin, DTM', role: 'Program Quality Director', group: 'District Executive Team' },
  { name: 'Linda Clarke, DTM', role: 'Club Growth Director', group: 'District Executive Team' },
  { name: 'Giovanna Lester', role: 'Public Relations Manager', group: 'District Executive Team' },
  { name: 'Mushtaq Maxwell', role: 'Finance Manager', group: 'District Executive Team' },
  { name: 'Eleasha Knowles, DTM', role: 'Administration Manager', group: 'District Executive Team' },
  { name: 'Ancin Munnings, DTM, IPDD', role: 'Immediate Past District Director', group: 'District Executive Team' },
]

export const divisionLeaders = [
  { division: 'A', name: 'Berina E. Darbouze', role: 'Division A Director' },
  { division: 'B', name: 'Yvette Barr, DTM', role: 'Division B Director' },
  { division: 'C', name: 'Omario Allen', role: 'Division C Director' },
  { division: 'D', name: 'Marilyn Bieber', role: 'Division D Director' },
  { division: 'E', name: 'Betty Ortiz-Valdes, DTM', role: 'Division E Director' },
  { division: 'F', name: 'Charmaine Hanna, DTM', role: 'Division F Director' },
  { division: 'G', name: 'Berndera Hepburn', role: 'Division G Director' },
  { division: 'H', name: 'Gale West, DTM', role: 'Division H Director' },
]

export const areaLeaders = [
  ['10','Marilena De Matteis'],['11','Luis Mendoza'],['12','Garfield Webbe'],['13','Nicola Daniel-Symonette'],['14','Savannah Gardner'],
  ['20','Wanda Caliman'],['21','Eddie Toote, III'],['22','Carem Costa'],['23','Londell Albury'],
  ['30','Allison Turner'],['31','Ephraim Cabrale'],['32','Gary Martin, DTM'],['33','Shah Saint-Cyr'],['34','David Dimino'],
  ['40','Natasha Robinson'],['41','Barbara Strasdas, DTM, PDD'],['42','Nalla Tejera'],['43','Melissa Rowe'],
  ['50','Geo Gordon'],['51','Carlos Alvarez'],['52','John Lazar, DTM'],['53','Ramon Galiana'],['54','Alvaro Rodriguez Alvarez'],
  ['60','Sonia White-Woodside'],['61','Roslyn Miller'],['62','Kendelynn Pennerman'],['63','Khalyle Edwards'],
  ['70','Meltheo Wells'],['71','Everkell LaGuerre'],['72','Alfreda Gibson'],['73','Jamaal Cooper'],
  ['80','Cherie Haslup, DTM'],['81','Charlene Henderson'],['82','May Ghali, DTM'],['83','Cynthia Peterson'],['84','Debbie Wildrick'],
].map(([area,name]) => ({ area, name, role: `Area ${area} Director` }))

export const keyDates = [
  {
    date: 'Jan 15, 2027',
    title: 'Club contest target',
    description: 'Club contests should be completed by this date, or at least two weeks before the Area contest.',
    type: 'Speech Contests',
  },
  {
    date: 'Jan 15 – Feb 28, 2027',
    title: 'Area contest season',
    description: 'District 47 Area contests are scheduled within this window.',
    type: 'Speech Contests',
  },
  {
    date: 'Mar 1 – Apr 10, 2027',
    title: 'Division contest season',
    description: 'District 47 Division contests are scheduled within this window.',
    type: 'Speech Contests',
  },
  {
    date: 'Apr 30 – May 2, 2027',
    title: '2027 District 47 Annual Conference',
    description: 'The Annual Conference runs April 30–May 2 in Coral Springs, Florida. District speech contests are scheduled April 30–May 1.',
    type: 'Annual Conference',
  },
]

export const newsItems = [
  { date: 'October 1, 2026', title: 'The Sunshiner — Issue 2', category: 'The Sunshiner', url: 'https://www.toastmastersd47.org/' },
  { date: 'September 26, 2026', title: 'District 47: Celebrating Excellence', category: 'Recognition', url: 'https://www.toastmastersd47.org/' },
  { date: 'August 1, 2026', title: 'Welcome uVoices of Choice & The Leadership Lounge at Baha Mar', category: 'Recognition', url: 'https://www.toastmastersd47.org/' },
  { date: 'May 18, 2026', title: 'Vision D47: Tune In — 2026–2027 Toastmasters Year', category: 'Leadership', url: 'https://www.toastmastersd47.org/' },
]

export const memberResources = [
  {
    title: 'Find a Club',
    description: 'Use Toastmasters International for the authoritative source of club meeting times and locations.',
    url: 'https://www.toastmasters.org/find-a-club',
    label: 'Open official club finder',
  },
  {
    title: 'Club Officer Training',
    description: 'Officer training takes place in the June–August and December–February training windows.',
    url: 'https://www.toastmastersd47.org/club-officer-training-and-tlis/',
    label: 'Training information',
  },
  {
    title: 'Speech Contest Resources',
    description: 'District 47 contest timelines, planning resources and links to the current official rulebook.',
    url: 'https://www.toastmastersd47.org/contests-contest-resources/',
    label: 'Contest resources',
  },
  {
    title: 'District Calendar',
    description: 'Subscribe to the District calendar and track training, contests, council meetings and special events.',
    url: 'https://www.toastmastersd47.org/district-calendar/',
    label: 'Open calendar',
  },
  {
    title: 'District Council',
    description: 'Information for District Executive Committee members, Club Presidents and Vice Presidents Education.',
    url: 'https://www.toastmastersd47.org/district-council-meetings/',
    label: 'District business',
  },
  {
    title: 'Start a New Club',
    description: 'Official steps, support and charter guidance for launching a new Toastmasters club.',
    url: 'https://www.toastmasters.org/start-a-club',
    label: 'Start a club',
  },
  {
    title: 'Club Quality & Growth',
    description: 'Official resources for engaging meetings, membership growth, education and club revitalization.',
    url: 'https://www.toastmasters.org/Membership/Leadership/Club-Quality',
    label: 'Growth resources',
  },
  {
    title: 'Toastmasters Resource Library',
    description: 'Current official handbooks, forms, training material and member resources.',
    url: 'https://www.toastmasters.org/resources/resource-library',
    label: 'Open resource library',
  },
]

export const historyHighlights = [
  { year: '1955', text: 'District 47 was created, originally serving clubs throughout Florida.' },
  { year: '1973', text: 'The Commonwealth of The Bahamas joined District 47.' },
  { year: '2008', text: 'District 47 had grown to become the largest district in Toastmasters International and was later realigned.' },
  { year: '2015', text: 'Toastmasters changed the district leadership title from District Governor to District Director.' },
  { year: '2023', text: 'The Toastmasters International Convention was held in Nassau, The Bahamas.' },
  { year: '2026–27', text: 'District 47 serves South Florida, The Bahamas and fully online clubs with international members.' },
]

export const formerDistrictDirectors = [
  ['2018–2019','Maurice Fuller, DTM'],
  ['2019–2020','Leonardo Burrows, DTM'],
  ['2020–2021','Barbara Strasdas, DTM'],
  ['2021–2022','Shakira Taylor, DTM'],
  ['2022–2023','Austen Canonica, DTM'],
  ['2023–2024','Lois Margolin, DTM'],
  ['2024–2025','Price Polynice, DTM'],
  ['2025–2026','Ancin Munnings, DTM'],
  ['2026–2027','Dr. Susan Vineta, DTM'],
].map(([year,name]) => ({year,name}))
