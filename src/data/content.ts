/* ============================================================
   GEOFF & MAXIE — site content
   Sources: saintelmo.online (canon) · @bfloore_online YouTube
   playlists (latest song versions) · Notion workshop (script)
   ============================================================ */

export const LINKS = {
  channel: "https://www.youtube.com/@bfloore_online",
  playlistMain: "https://www.youtube.com/playlist?list=PL8YEyEu3hZoFQ_CTk2GhFMcAygJNKosQK",
  playlistLegacy: "https://www.youtube.com/playlist?list=PL8YEyEu3hZoFRG3kjtgHssGuTBiAkY-nA",
  embedMain: "https://www.youtube.com/embed/videoseries?list=PL8YEyEu3hZoFQ_CTk2GhFMcAygJNKosQK",
  embedLegacy: "https://www.youtube.com/embed/videoseries?list=PL8YEyEu3hZoFRG3kjtgHssGuTBiAkY-nA",
  notion: "https://purrfect-ocelot-0fa.notion.site/geoff-and-maxie",
  rainn: "https://donate.rainn.org",
  email: "barry@saintelmo.com",
  originalSite: "https://saintelmo.online",
};

export const watch = (id: string) => `https://www.youtube.com/watch?v=${id}`;

/* ---------- rotating themes ---------- */

export interface Theme {
  id: string;
  name: string;
  icon: string;
  mode: "light" | "dark";
  blurb: string;
}

export const THEMES: Theme[] = [
  { id: "paper", name: "Paper & Ink", icon: "◑", mode: "light", blurb: "warm editorial" },
  { id: "tabloid", name: "Tabloid Extra", icon: "▤", mode: "light", blurb: "newsprint shout" },
  { id: "island", name: "Island Night", icon: "☾", mode: "dark", blurb: "sea air after dark" },
  { id: "court", name: "Court & Quill", icon: "§", mode: "dark", blurb: "legal parchment" },
  { id: "dusk", name: "Lil' Elmo Dusk", icon: "✦", mode: "dark", blurb: "the orchid hour" },
];

/* ---------- rotating quotes ---------- */

export interface Quote {
  text: string;
  source: string;
}

export const QUOTES: Quote[] = [
  {
    text: "The people being ignored by the opposition in their — Socialist — Autocratic — Centralized federal — States' rights rhetorical — Mess.",
    source: "Cam & Ash · Act 1, Scene 7",
  },
  {
    text: "The question isn't what happened. It's whether anyone with power will be held accountable.",
    source: "About the Show",
  },
  {
    text: "Justice isn't blind. It's checking your wallet.",
    source: "Good for Us · Act 2",
  },
  {
    text: "She's a goddamn hero: Ginnie.",
    source: "Plot Explainer",
  },
  {
    text: "There are doors that are always open, if you know which one to knock.",
    source: "Act 1, Scene 2",
  },
  {
    text: "Put it in the record — I plead the fifth!",
    source: "Act 1, Scene 0",
  },
  {
    text: "I know what happened on that island.",
    source: "Ginnie · Act 1",
  },
  {
    text: "Some monsters live on islands. Others walk among us every day.",
    source: "About the Show",
  },
  {
    text: "Geoff got off. Gus got the street.",
    source: "Sweetheart Deal · Act 1, Scene 1",
  },
  {
    text: "These are not aspirations for a better day.",
    source: "We the People · Act 2, Scene 14",
  },
  {
    text: "The storm will be the story.",
    source: "Ronnie's White House · Act 2",
  },
  {
    text: "What I do is more expansive, more advisory, more distance.",
    source: "Act 2, Scene 8",
  },
  {
    text: "Because our silence will be held against us for far longer than our words.",
    source: "A Note on AI Collaboration",
  },
  {
    text: "They said it's just temporary.",
    source: "Sweetheart Deal · Act 1, Scene 1",
  },
];

/* ---------- characters ---------- */

export type Hair = "side" | "bob" | "bun" | "long" | "bald" | "messy" | "ponytail" | "beanie" | "cap" | "brim";
export type Extra = "tie" | "bow" | "badge" | "collar" | "none";

export interface Character {
  id: string;
  name: string;
  epithet: string;
  role: string;
  bio: string;
  // figure styling (stable across themes)
  outfit: string;
  hair: Hair;
  hairColor: string;
  skin: string;
  extra?: Extra;
}

export const CHARACTERS: (Character & { duo?: boolean })[] = [
  {
    id: "geoff",
    name: "Geoffrey Aaron “Geoff” Goldstein",
    epithet: "The Con Artist",
    role: "Convicted billionaire · under house arrest",
    bio: "A charismatic, Continental billionaire con artist whose charm and wit mask a predatory nature. Despite conviction and house arrest he keeps his flirtatious elegance — layering “truth with bullshit” effortlessly and seeing potential in everyone he can use.",
    outfit: "#26334e",
    hair: "side",
    hairColor: "#2a2118",
    skin: "#e9c8a8",
    extra: "tie",
  },
  {
    id: "maxie",
    name: "Isabella Maximillian “Maxie” Laurent",
    epithet: "The Architect",
    role: "Geoff's partner · operational mastermind",
    bio: "Not an accomplice — an architect. Maxie understands the machinery of power and manipulation. Patient, methodical, willing to do whatever it takes to protect the empire. Her relationship with Geoff is professional and romantic, built on mutual complicity.",
    outfit: "#6e2a4a",
    hair: "bun",
    hairColor: "#3a2415",
    skin: "#e5bd97",
    extra: "none",
  },
  {
    id: "gus",
    name: "Gus",
    epithet: "The Conscience",
    role: "Assistant · witness",
    bio: "A homeless man who becomes Geoff's personal assistant. He keeps his dignity, brutal honesty, dark humor — and a moral compass Geoff and Maxie abandoned long ago. When he finally hands over the phone, he isn't stepping into courage. He's stepping out of survival.",
    outfit: "#4e6e6a",
    hair: "beanie",
    hairColor: "#556b52",
    skin: "#caa27a",
    extra: "none",
  },
  {
    id: "ronnie",
    name: "President Ronnie",
    epithet: "The Figurehead",
    role: "Ronald Allen Kennedy Jr. · President",
    bio: "A buffoonish yet dangerous leader who operates through calculated pressure, strategic favors, and carefully maintained plausible deniability. Equal parts incompetent and complicit — institutional corruption with the veneer of respectability.",
    outfit: "#7c9fc4",
    hair: "side",
    hairColor: "#c9a15c",
    skin: "#ecc9a5",
    extra: "badge",
  },
  {
    id: "tammy",
    name: "Solicitor General Tammy",
    epithet: "The Bulldog",
    role: "Tammy Osiris Caldwell · U.S. Attorney",
    bio: "A brilliant, exacting U.S. Attorney who learned law while her mother cleaned the courthouse. Precise, restrained, and refusing to be bullied or manipulated — institutional integrity standing against corruption.",
    outfit: "#2e5941",
    hair: "bob",
    hairColor: "#1c1410",
    skin: "#8a5a3b",
    extra: "collar",
  },
  {
    id: "ginnie",
    name: "Ginnie",
    epithet: "The Hero",
    role: "Survivor · advocate for justice",
    bio: "A survivor of Goldstein's operation and a fierce advocate for justice. She has endured a decade of public disbelief and is described as “a goddamn hero” for her perseverance — leading the fight for accountability despite systemic obstacles.",
    outfit: "#b4433a",
    hair: "long",
    hairColor: "#7a3a1e",
    skin: "#f0cdb2",
    extra: "none",
  },
  {
    id: "marcus",
    name: "Marcus",
    epithet: "The Flack",
    role: "PR strategist · Act 2",
    bio: "Appears in Act 2 as the PR-minded foil to Ginnie's deeply felt advocacy. Notably, he floats the idea that additional related crimes involving predators may be “good for” the cause — which Ginnie does not agree with.",
    outfit: "#6b6b70",
    hair: "side",
    hairColor: "#3d3128",
    skin: "#d9b08c",
    extra: "none",
  },
  {
    id: "lesley",
    name: "Lesley",
    epithet: "The Counsel",
    role: "Legal side of the fight · Act 2",
    bio: "Appears in Act 2 in Ginnie's office as the legal side of the fight for justice. Lesley informs Gus he will be arrested for conspiracy when he goes to turn in his phone.",
    outfit: "#4a5b7a",
    hair: "bob",
    hairColor: "#54371f",
    skin: "#eed3b3",
    extra: "collar",
  },
  {
    id: "watson",
    name: "Officer Jeffrey Watson",
    epithet: "The Escort",
    role: "Geoff's assigned police escort",
    bio: "Geoff's assigned escort during house arrest. Observant, principled, and duty-bound — he sees through Geoff's lies but maintains professional boundaries. One of those who serve justice within a flawed system.",
    outfit: "#2b3a55",
    hair: "cap",
    hairColor: "#1e2c42",
    skin: "#d9a97e",
    extra: "badge",
  },
  {
    id: "buck",
    name: "Buck Jr.",
    epithet: "The Enabler",
    role: "Geoff's young defense lawyer",
    bio: "Geoff's young, informal defense lawyer, operating with casual boundary-testing and strategic recruitment. He represents the legal professionals who enable corruption through plausible deniability.",
    outfit: "#9db7d9",
    hair: "messy",
    hairColor: "#6b4a2a",
    skin: "#f2d4ae",
    extra: "tie",
  },
  {
    id: "ashcammie",
    name: "Ash & Cammie",
    epithet: "The Advisors",
    role: "President Ronnie's shadowy advisors",
    bio: "The President's shadowy advisors who speak in eerie unison and finish each other's sentences. They don't lie — they redefine. Bureaucratic double-speak that buries truth in plain sight.",
    outfit: "#3a3a40",
    hair: "bob",
    hairColor: "#241d18",
    skin: "#e8c49a",
    extra: "none",
    duo: true,
  } as Character & { duo?: boolean },
  {
    id: "jb",
    name: "Jean-Baptiste de la Cruz (JB)",
    epithet: "The Curator",
    role: "Head of all things on Lil'Elmo",
    bio: "The long-standing head of all things on Lil'Elmo, from Big Elmo. JB runs all hiring and onboarding — knows where everything is, how everything works, and where all the bodies are buried.",
    outfit: "#c9b98a",
    hair: "brim",
    hairColor: "#8a7a55",
    skin: "#b07f52",
    extra: "none",
  },
  {
    id: "stacy",
    name: "Stacy",
    epithet: "The Witness",
    role: "Observed Gus during incarceration",
    bio: "A witness who observed Gus's professionalism during Goldstein's incarceration. She represents those who notice character in small moments.",
    outfit: "#c78b93",
    hair: "ponytail",
    hairColor: "#4e3018",
    skin: "#f3d8bc",
    extra: "none",
  },
  {
    id: "lila",
    name: "Lila",
    epithet: "The Paralegal",
    role: "Tammy's young paralegal",
    bio: "Tammy's young, nervous paralegal — systematically manipulated into betrayal. She represents the naive who are exploited by those in power.",
    outfit: "#8e7cc3",
    hair: "ponytail",
    hairColor: "#2e1f3d",
    skin: "#f0d0b0",
    extra: "collar",
  },
];

/* ---------- the numbers (canonical list, latest-version links) ---------- */

export interface Track {
  act: 1 | 2;
  scene: string;
  title: string;
  videoId?: string;
  version?: string;
  alt?: { label: string; videoId: string };
  note?: string;
}

export const TRACKS: Track[] = [
  { act: 1, scene: "Intro", title: "Allegedly", videoId: "ETAlIfgJZKY", version: "full" },
  { act: 1, scene: "Sc. 1", title: "Sweetheart Deal", videoId: "MOVXsre7m08", version: "latest edit", alt: { label: "album cut", videoId: "ysue5dEzxjI" }, note: "“Geoff got off, Gus got the street.”" },
  { act: 1, scene: "Sc. 2", title: "Who Was That? (Pre-prise)", videoId: "_lhwSoj4ilk", version: "pre-prise 1" },
  { act: 1, scene: "Sc. 3", title: "Only Boys", videoId: "Ktey6JsAyP4", version: "v2.01", alt: { label: "v2.0", videoId: "KMlSbNJIEgI" }, note: "“Came out of the womb in a blazer.”" },
  { act: 1, scene: "Sc. 4", title: "Reasonable Man", videoId: "Qg-SA255BA4" },
  { act: 1, scene: "Sc. 5", title: "Questions & Answers", videoId: "RcVaEHwWUyo", alt: { label: "“Accumulation” v3.0", videoId: "pnYIOY2r55k" } },
  { act: 1, scene: "Sc. 6", title: "A Billion Here" },
  { act: 1, scene: "Sc. 8", title: "Little Secrets", videoId: "8yOpukgj600" },
  { act: 1, scene: "Sc. 9", title: "Welcome to Lil' Elmo", videoId: "zT0aXnfWyIM" },
  { act: 1, scene: "Sc. 10", title: "What Happened", videoId: "CPnE16LWLkc", version: "latest", alt: { label: "original", videoId: "wnLDgj_xywo" }, note: "“I know what happened on that island.”" },
  { act: 1, scene: "Sc. 11", title: "Who Was That? (Part 2)", videoId: "qIVQvbwPohQ", alt: { label: "earlier cut", videoId: "Y35kzg4vQBQ" } },
  { act: 1, scene: "Sc. 12", title: "Tammy's Appointment" },
  { act: 1, scene: "Sc. 13", title: "The Waltz of Inevitability", videoId: "XZeok9OG-D0", version: "v2.0", note: "“Arrested!” — a waltz in 3/4 with no business being that graceful." },
  { act: 1, scene: "Finale", title: "Standard Procedure", videoId: "YBeARM-lNeo" },
  { act: 2, scene: "Intro", title: "Who Was That? (Part 3)", videoId: "YmZRKBgGhaw" },
  { act: 2, scene: "Sc. 4", title: "In Transit (Moving)", videoId: "4VD1OXasPsI", version: "v2.0", alt: { label: "original", videoId: "bdb6xQDCGZU" } },
  { act: 2, scene: "Sc. 5", title: "Witch Hunt & Snowstorm", videoId: "pnYIOY2r55k", version: "v3.0 · Ash & Cam", alt: { label: "v2.1", videoId: "1O7g--H0PCg" }, note: "“Accumulation.” Elegant structure, ugly content." },
  { act: 2, scene: "Sc. 8", title: "What Did You Do", videoId: "WX4Gv2Mx5vk", version: "v2.01 · official video", alt: { label: "v2.0", videoId: "0wZzA2SotGc" }, note: "The most regenerated number in the show — 180+ drafts." },
  { act: 2, scene: "Sc. 9", title: "Just Like Them, Just Like Me", videoId: "wdesqA9Er9c" },
  { act: 2, scene: "Sc. 11", title: "Good for Us", videoId: "QqsgRN2zKkM", version: "v2.0", alt: { label: "extended “good4us”", videoId: "bt9ho1q-ppE" } },
  { act: 2, scene: "Sc. 12", title: "I Need to Walk", videoId: "Jk3R5NF6eqs", note: "Gus & Tammy." },
  { act: 2, scene: "Sc. 13", title: "Not Unreasonable, Man", videoId: "j1lVwTeycPQ", note: "Ronnie." },
  { act: 2, scene: "Sc. 14", title: "We the People", videoId: "jn5eWZ_CzZM", version: "v1.5", alt: { label: "original", videoId: "cSVe6MhYpC0" }, note: "Tammy. “These are not aspirations for a better day.”" },
  { act: 2, scene: "Sc. 15", title: "A Reasonable Vice (President)", videoId: "GuEb_Erov3s", version: "instrumental v2.0" },
  { act: 2, scene: "Finale", title: "If You Only Knew", videoId: "8NaFydqCrDA", version: "v2.0.1 · full cast", alt: { label: "curtain call", videoId: "UR5l3MQjw2o" } },
];

/* ---------- digital scenes ---------- */

export interface Scene {
  act: 1 | 2;
  code: string;
  title: string;
  blurb: string;
  trackTitle?: string;
  track?: Track;
  cast?: string[];
}

const t = (title: string): Track | undefined => TRACKS.find((x) => x.title === title);

export const SCENES_A1: Scene[] = [
  { act: 1, code: "A1·S0", title: "Allegedly", blurb: "The opening number: a media circus swarms the courthouse while the deal keeps Geoff out of jail — everything is “alleged,” nothing is answered.", trackTitle: "Allegedly", track: t("Allegedly"), cast: ["Reporters", "Geoff", "Maxie", "Ensemble"] },
  { act: 1, code: "A1·S1", title: "Sweetheart", blurb: "Convicted but comfortable: house arrest for the billionaire, a job offer for a homeless man. Gus gets a second chance he can't afford to question.", trackTitle: "Sweetheart Deal", track: t("Sweetheart Deal"), cast: ["Geoff", "Gus", "Maxie"] },
  { act: 1, code: "A1·S2", title: "Who Was That (1)", blurb: "First mention of the island — and the doors that are always open, if you know which one to knock.", trackTitle: "Who Was That? (Pre-prise)", track: t("Who Was That? (Pre-prise)"), cast: ["Gus", "Geoff"] },
  { act: 1, code: "A1·S3", title: "Paralegal", blurb: "Lila, Tammy's nervous paralegal, is sized up for manipulation. The naive make the best leverage.", cast: ["Lila", "Tammy"] },
  { act: 1, code: "A1·S4", title: "They Were Just Boys", blurb: "The island's recruitment pitch, sung like a lullaby: “they were just boys when the world got heavy.”", trackTitle: "Only Boys", track: t("Only Boys"), cast: ["Maxie", "JB", "Ensemble"] },
  { act: 1, code: "A1·S5", title: "Reasonable", blurb: "Geoff mounts his defense: the performance of the reasonable man — truth layered with something else.", trackTitle: "Reasonable Man", track: t("Reasonable Man"), cast: ["Geoff", "Buck Jr."] },
  { act: 1, code: "A1·S6", title: "Operator", blurb: "Maxie runs the machinery: the bookings, the schedules, the silence.", cast: ["Maxie"] },
  { act: 1, code: "A1·S7", title: "Questions", blurb: "Cam & Ash bury every direct question in bureaucratic fog — a states'-rights rhetorical mess.", cast: ["Cam & Ash", "Press"] },
  { act: 1, code: "A1·S8", title: "Little Secrets", blurb: "The staff know the pattern. Survival means not looking too closely at what you're part of.", trackTitle: "Little Secrets", track: t("Little Secrets"), cast: ["Gus", "Staff"] },
  { act: 1, code: "A1·S9", title: "Welcome to Little Elmo", blurb: "JB gives the tour: onboarding, etiquette, and where all the bodies are buried.", trackTitle: "Welcome to Lil' Elmo", track: t("Welcome to Lil' Elmo"), cast: ["JB", "Gus", "New Staff"] },
  { act: 1, code: "A1·S10", title: "What Happened", blurb: "Ginnie says it plain, under oath and over it: “I know what happened on that island.”", trackTitle: "What Happened", track: t("What Happened"), cast: ["Ginnie"] },
  { act: 1, code: "A1·S11", title: "Who Was That?", blurb: "The witness stand versus the witness: a decade of memory gets cross-examined into “doubt.”", trackTitle: "Who Was That? (Part 2)", track: t("Who Was That? (Part 2)"), cast: ["Ginnie", "Buck Jr."] },
  { act: 1, code: "A1·S12", title: "Tammy's Appointment", blurb: "The Solicitor General takes the case — and all the pressure that comes with it.", cast: ["Tammy", "Lila"] },
  { act: 1, code: "A1·S13", title: "The Waltz of Inevitability", blurb: "“Arrested!” — a waltz in 3/4 carrying language that has no business being that graceful. Elegant structure, ugly content.", trackTitle: "The Waltz of Inevitability", track: t("The Waltz of Inevitability"), cast: ["Geoff", "Maxie", "Ensemble"] },
  { act: 1, code: "A1·S14", title: "Standard Procedure", blurb: "Act One finale: federal charges land, and the system files it all under standard procedure.", trackTitle: "Standard Procedure", track: t("Standard Procedure"), cast: ["Full Company"] },
];

export const SCENES_A2: Scene[] = [
  { act: 2, code: "A2·S0", title: "Who Was That? (Part 3)", blurb: "The question comes back louder. The island is closed; the island is everywhere.", trackTitle: "Who Was That? (Part 3)", track: t("Who Was That? (Part 3)"), cast: ["Ensemble"] },
  { act: 2, code: "A2·S4", title: "In Transit", blurb: "Moving: Geoff, Ginnie, Tammy — three passengers, one direction, none of them free.", trackTitle: "In Transit (Moving)", track: t("In Transit (Moving)"), cast: ["Geoff", "Ginnie", "Tammy"] },
  { act: 2, code: "A2·S5", title: "Witch Hunt & Snowstorm", blurb: "Cam & Ash redefine the weather itself. Accumulation, in every sense — the snowstorm is the story.", trackTitle: "Witch Hunt & Snowstorm", track: t("Witch Hunt & Snowstorm"), cast: ["Cam & Ash"] },
  { act: 2, code: "A2·S8", title: "What Did You Do", blurb: "A presidential interrogation. The performance can't hold anymore.", trackTitle: "What Did You Do", track: t("What Did You Do"), cast: ["Tammy", "Ronnie"] },
  { act: 2, code: "A2·S9", title: "Just Like Them, Just Like Me", blurb: "Gus sees the shape of the thing he's been part of — and what it will cost to leave.", trackTitle: "Just Like Them, Just Like Me", track: t("Just Like Them, Just Like Me"), cast: ["Gus"] },
  { act: 2, code: "A2·S11", title: "Good for Us", blurb: "Marcus pitches that more predators might be “good for” the cause. Ginnie doesn't agree. Justice isn't blind — it's checking your wallet.", trackTitle: "Good for Us", track: t("Good for Us"), cast: ["Ginnie", "Marcus", "Lesley"] },
  { act: 2, code: "A2·S12", title: "I Need to Walk", blurb: "Gus hands over the phone, knowing exactly what it costs him. He does it anyway.", trackTitle: "I Need to Walk", track: t("I Need to Walk"), cast: ["Gus", "Tammy"] },
  { act: 2, code: "A2·S13", title: "Not Unreasonable, Man", blurb: "Ronnie's defense of the indefensible, in his own reasonable words.", trackTitle: "Not Unreasonable, Man", track: t("Not Unreasonable, Man"), cast: ["Ronnie"] },
  { act:2, code: "A2·S14", title: "We the People", blurb: "Tammy's closing argument: “These are not aspirations for a better day.”", trackTitle: "We the People", track: t("We the People"), cast: ["Tammy"] },
  { act: 2, code: "A2·S15", title: "A Reasonable Vice (President)", blurb: "The instrumental interlude: power changes hands; the tempo stays the same.", trackTitle: "A Reasonable Vice (President)", track: t("A Reasonable Vice (President)"), cast: ["Instrumental"] },
  { act: 2, code: "A2·F", title: "If You Only Knew", blurb: "Full-cast finale — the billionaire's lament, and the curtain call.", trackTitle: "If You Only Knew", track: t("If You Only Knew"), cast: ["Full Company"] },
];

/* ---------- behind the scenes stats ---------- */

export const STATS: { label: string; value: string; hint?: string }[] = [
  { label: "Words", value: "298,896" },
  { label: "Sentences", value: "35,021" },
  { label: "Dialogue turns", value: "759", hint: "conversational only" },
  { label: "Total exchanges", value: "10,000+", hint: "incl. missing" },
  { label: "Planned songs", value: "24", hint: "V1.0 completed" },
  { label: "Active processing", value: "1,495 min" },
  { label: "Peak retention (YT)", value: "60%" },
  { label: "Readability (Flesch-Kincaid)", value: "5.9", hint: "≈ the level of Chicago" },
  { label: "Regenerations, “What Did You Do”", value: "180+" },
];

export const BLOG_SECTIONS = [
  {
    heading: "The Assembly Line",
    body: "We didn't write a show. We processed one. Ten thousand exchanges across six models. Thousands of drafts. Not collaboration — extraction. I pushed until the language stopped being soft. Until anything vague enough to hide behind got replaced with something that had to mean what it said. The result wasn't elegance. It was precision earned through excess, which is a different thing entirely.",
  },
  {
    heading: "The Architecture of Complicity",
    body: "I wasn't interested in monsters. Monsters resolve too quickly. What I wanted was the people who hold their coats. Who hand them their drinks. Who file the paperwork and keep the calendar — and know exactly what the calendar is for. Maxie isn't an accomplice. She's an architect. Cammie and Ash don't lie. They redefine. And then there's Gus. He has nowhere to go, knows enough to be dangerous, and takes the job anyway. When he finally hands over the phone, he isn't stepping into courage. He's stepping out of survival. Not heroic. Just honest. There's a difference.",
  },
  {
    heading: "The Music as a Lie",
    body: "The music does what the system does. It distracts. Act 1 is spectacle — big, polished, airtight. The sound of power presenting itself as orderly. “The Arrest Waltz” is a 3/4 time signature carrying language that has no business being that graceful. By Act 2, the performance can't hold. The orchestration collapses inward. Piano. Guitar. Two people and the thing that can't be cleaned up anymore. No insulation. No gloss. Just what it is.",
  },
  {
    heading: "The Aftermath",
    body: "I built this as a test, finished it, and the test passed. I have a completed show, a functioning production system, an audience that proved the concept works at scale — and no clear map for what comes next. Which, if I'm being honest, is exactly what the show is about. A system full of information, very little clarity, and constant pressure to perform certainty. The test is over. The problem isn't.",
  },
];

export const BLOG_INTRO =
  "The first lie was that I didn't care about it. I told myself Geoff & Maxie was a sandbox. A sacrificial project. I was too afraid to risk Calliope Spun — that one's blood and bone — so I needed somewhere to fail where failure wouldn't cost me anything. I chose the Epstein fallout because I believed I had no skin in it. That was the lie. You don't get to satirize a system without finding yourself inside it. I found myself inside it by page twelve.";

export const BLOG_DATE = "20 Apr 2026";

export const AI_CREDITS: { tool: string; role: string }[] = [
  { tool: "Claude.ai", role: "Structural editing, dialogue refinement, long-form continuity" },
  { tool: "ChatGPT", role: "Lyrical construction, brainstorming, redrafting, pre-production" },
  { tool: "Gemini", role: "Quality auditing, ideation, secondary editorial review" },
  { tool: "Grok", role: "Cold-read beta feedback and adversarial review" },
  { tool: "NotebookLM", role: "Infographics, blogging assistance, promotional content" },
  { tool: "Suno AI", role: "Musical generation, instrumentation, vocal prototyping" },
  { tool: "ElevenLabs", role: "Voiceover and dialogue vocal generation (non-musical)" },
  { tool: "Veed.io", role: "Video construction, subtitles, stock media integration" },
  { tool: "Canva", role: "Graphic design, video assembly, visual assets (non-AI use)" },
  { tool: "Notion AI", role: "Workflow management, summarization, meta-text structuring" },
  { tool: "Pexels / Pixabay", role: "Stock video and image sourcing" },
  { tool: "AI Studio / Firebase", role: "Website architecture, development, and deployment" },
];

export const PARODY_NOTE = [
  "This musical is a parody. It is a parody of the spectacle, the political theater, the media circus, the justice system failures, and the cultural obsession that have defined how powerful people evade accountability.",
  "The musical is not about the victims. It does not speak for them, to them, or on their behalf. We make no claim to represent their experiences, their pain, or their truth. A single victim is portrayed prominently because to extract that aspect of the atrocity would be disingenuous and castrate the purpose of parody. However, the views in this show do not represent the point of view of the individuals who experienced similar traumas at the hands of real monsters.",
  "The musical is also not an excuse for alleged perpetrators. It is not a platform for rehabilitation or sympathy toward the powerful. Our purpose is not to seek understanding or acceptance of their crimes, nor justify their behavior until it becomes socially acceptable. GEOFF & MAXIE was created explicitly to combat the normalization of Lil'Elmo and similar places in the real world.",
  "The purpose is to satirize the monsters in all of us that allowed such things to take root, to grow and thrive, and to be covered up once exposed. No monsters lived on Lil'Elmo — they only visited, and came home. Whither then their monstrosity?",
  "GEOFF & MAXIE is a mirror held up to everyone who watched, everyone who politicked, everyone who hedged, everyone who knew, and everyone who looked away. It is about what we as a society have tolerated, celebrated, and protected when money and influence are involved.",
];

export const ABOUT_PARAS = [
  "What happens when a charismatic billionaire con artist walks free while justice watches from the sidelines? Geoff & Maxie plunges you into a glittering world of power, privilege, and the secrets that bind them together.",
  "Geoffrey Aaron “Geoff” Goldstein — charming, Continental, convicted — receives a sweetheart deal that keeps him under house arrest while his empire thrives. Alongside his brilliant partner Isabella Maximillian “Maxie” Laurent, he operates a private island playground for the wealthy and powerful, where favors are currency and silence is survival. When Geoff offers a second chance to Gus, a homeless man with nothing to lose, he inadvertently invites a conscience into a world that abandoned morality long ago.",
  "As the island's secrets begin to surface, a web of complicity emerges: a buffoonish President who operates through plausible deniability, a principled Solicitor General who refuses to be manipulated, survivors demanding justice, and institutional forces working overtime to contain the scandal. When federal charges finally land, Geoff mysteriously vanishes from custody while Maxie enjoys comfortable confinement — exposing a justice system with two very different sets of rules.",
  "Through darkly comic musical numbers, sharp dialogue, and a cast of characters ranging from predators to survivors, Geoff & Maxie explores how “standard procedure” protects the powerful while punishing the vulnerable, how documentation becomes weaponized, and whether redemption is possible for those who've chosen silence over truth.",
  "Will Gus's testimony matter when the news cycle moves on? Can Tammy build a case when evidence keeps disappearing? What happens when a canary yellow phone holds secrets the world isn't ready to hear?",
];

export const AI_NOTE =
  "This musical proudly leverages AI technology to amplify a voice that demands to be heard. While the storyline, lyrics, and dialogue are entirely original creations by B. Floore, the editing, workshopping, and musical generation were developed in collaboration with AI partners including Claude.ai (Anthropic), ChatGPT (OpenAI), Gemini (Google), Notion AI, Suno AI, and Veed.io. The result is a complete theatrical package — a parody designed to entertain, provoke, and one day grace the stage.";
