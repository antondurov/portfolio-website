Implement a simple, responsive portfolio website front end using React to showcase personal projects, skills, and contact info.

Tech Stack

React 18+ (functional components + hooks)
Vite for build tooling and dev server
TypeScript
Sections

Home
About
Projects
Contact
CV
React-Specific Requirements

Use functional components only (no class components)
Manage local state with useState / useReducer
Side effects via useEffect
Extract reusable logic into custom hooks
Lazy-load route components with React.lazy + Suspense
Use prop-types or TypeScript interfaces for component props
Add TDD tests
Use bun
Acceptance Criteria


V App scaffolded with Vite + React

V Routing works for all 4 pages without full reloads

Project cards rendered from a single data source (projects.json)

Fully responsive (mobile, tablet, desktop)

No console errors or React key warnings

Lighthouse Performance + Accessibility ≥ 90

README with npm install / npm run dev / npm run build instructions