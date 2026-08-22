export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  github: string;
}

export const projects: Project[] = [
    {
      "id": "1",
      "name": "Simple Pomodoro App",
      "description": "A minimalistic pomodoro focus app built with react native + expo.",
      "tags": ["React", "TypeScript", "Expo", "React Native"],
      "github": "https://github.com/antondurov/pomodoro-app"
    },
    {
      "id": "2",
      "name": "Recipe Manager (In Progress)",
      "description": "A minimalistic recipe manager app built with react native + expo.",
      "tags": ["React", "Typescript", "Expo", "React Native"],
      "github": "https://github.com/antondurov/recipe-manager"
    },
    {
      "id": "3",
      "name": "Portfolio",
      "description": "The portfolio you are currently viewing, built with React + TypeScript + Vite.",
      "tags": ["React", "TypeScript", "Vite", "React Router", "i18next"],
      "github": "https://github.com/antondurov/portfolio-website"
    }
  ]
