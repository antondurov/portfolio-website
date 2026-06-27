import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import Projects from './Projects'
import { projects } from "../data/projects.ts";

describe('Projects', () => {
    it('Projects renders one <li> per entry in projects.json', () => {
        render(<Projects projects={projects}/>)
        const items = screen.getAllByRole('listitem')
        expect(items).toHaveLength(projects.length) // Assuming there are 3 projects in projects.json
    })
});
