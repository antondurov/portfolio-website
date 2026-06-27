import { render, screen } from '@testing-library/react'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Navbar from '@/components/Navbar'
import Projects from '@/pages/Projects'
import CV from '@/pages/CV'
import { MemoryRouter } from 'react-router-dom'
import { projects } from '@/data/projects'
import NotFound from '@/pages/NotFound'

describe('App', () => {

    it('renders Navbar', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )
        expect(screen.getByRole('navbar')).toBeInTheDocument()
    })

    it('renders all nav links', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(5)
        expect(links[0]).toHaveTextContent('Home')
        expect(links[1]).toHaveTextContent('About')
        expect(links[2]).toHaveTextContent('Contact')
        expect(links[3]).toHaveTextContent('Projects')
        expect(links[4]).toHaveTextContent('CV')
    })

    it('renders Home page', () => {
        render(<Home />)
        expect(screen.getByText("welcome")).toBeInTheDocument()
    })
    
    it('renders About page', () => {
        render(<About />)
        expect(screen.getByText("about")).toBeInTheDocument()
    })

    it('renders Contact page', () => {
        render(<Contact />)
        expect(screen.getByText("contact")).toBeInTheDocument()
    })

    it('renders Projects page', () => {
        render(<Projects projects={projects}/>)
        expect(screen.getByText("projects")).toBeInTheDocument()
    })

    it('renders CV page', () => {
        render(<CV />)
        expect(screen.getByText("cv")).toBeInTheDocument()
    })

    it('renders NotFound page', () => {
        render(<NotFound />)
        expect(screen.getByText("Page not found.")).toBeInTheDocument()
    })

    it('404 page is rendered for unknown routes', () => {
        render(
            <MemoryRouter initialEntries={['/unknown-route']}>
                <NotFound />
            </MemoryRouter>
        )
        expect(screen.getByText("Page not found.")).toBeInTheDocument()
    })
})
