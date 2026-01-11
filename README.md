# MySite

A modern personal portfolio and blog site built with React, TypeScript, Tailwind CSS, and Vite. Features a markdown-based blog system, responsive design, and GitHub Pages deployment.

## 🚀 Features

- **Modern Tech Stack**: React 18 with TypeScript for type-safe development
- **Fast Development**: Vite for lightning-fast HMR and optimized builds
- **Beautiful Styling**: Tailwind CSS for utility-first, responsive design
- **Markdown Blog**: Simple markdown file-based blog with automatic post loading
- **TypeScript**: Full type safety across the entire application
- **React Router**: Client-side routing for smooth navigation
- **GitHub Pages**: Automated deployment via GitHub Actions
- **Dev Container**: Ready-to-use development environment

## 📋 Prerequisites

- Node.js 18+ or 20+
- npm, yarn, or pnpm

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

## 🏃 Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173`

Hot Module Replacement (HMR) is enabled for fast development.

## 🏗️ Building

Build for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This will:
- Run TypeScript compilation
- Create an optimized production build in the `dist/` directory
- Generate minified CSS and JS bundles
- Create asset hashes for optimal caching

## 🧪 Preview Production Build

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

This serves the production build from the `dist/` directory.

## 📝 Adding Blog Posts

Blog posts are stored as markdown files in `src/content/posts/`. Each post must include frontmatter:

```markdown
---
title: "Your Post Title"
date: "2025-01-09"
description: "A brief description of your post"
---

# Your Post Content

Write your markdown content here...
```

The filename becomes the post slug (e.g., `my-post.md` → `/blog/my-post`).

## 🧹 Code Quality

### ESLint
Run ESLint to check code quality:
```bash
npm run lint
```

### Prettier
Format code with Prettier:
```bash
npm run format
```

## 🚀 Deployment

### GitHub Pages Setup

This project is configured for GitHub Pages deployment using GitHub Actions.

1. **Repository Setup**:
   - Create a repository named `yourusername.github.io` (for root domain)
   - Or create any repository and use GitHub Pages settings

 2. **Deployment Workflow**:
    - Make changes on any local branch
    - Test locally with `npm run dev`
    - Push commits to GitHub `main` branch when ready
    - In GitHub web UI, navigate to `deploy` branch
    - Click "Update branch" button to sync `deploy` with `main`
    - GitHub Actions will automatically deploy to GitHub Pages on `deploy` branch push

 3. **Enable GitHub Pages**:
    - Go to repository Settings → Pages
    - Source: GitHub Actions
    - Your site will be available at `https://yourusername.github.io`

## 📁 Project Structure

```
MySite/
├── .devcontainer/          # Dev container configuration
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment workflow
├── public/                # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── MarkdownRenderer.tsx
│   ├── content/
│   │   └── posts/        # Markdown blog posts
│   ├── lib/              # Utility functions
│   │   ├── posts.ts      # Blog post loading utilities
│   │   └── utils.ts      # Common utilities
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogPost.tsx
│   │   └── Contact.tsx
│   ├── App.tsx          # Main app with routing
│   ├── main.tsx         # Entry point
│   ├── index.css        # Global styles (Tailwind)
│   └── vite-env.d.ts    # Vite type definitions
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── README.md          # This file
```

## 🔧 Configuration

### Vite Configuration

`vite.config.ts` contains Vite settings including:
- Path aliases (`@/*` maps to `./src/*`)
- Build output directory (`dist/`)
- Base path for GitHub Pages deployment

### TypeScript Configuration

`tsconfig.json` contains TypeScript settings:
- Target: ES2020
- Strict mode enabled
- Path aliases configured
- JSX support for React

### Tailwind Configuration

`tailwind.config.js` contains Tailwind settings:
- Content paths for Tailwind classes
- Custom theme colors and styles
- Dark mode support

## 🐳 Dev Container

This project includes a dev container configuration for consistent development environments.

**Using with VS Code / Zed**:
1. Install the Dev Containers extension (VS Code)
2. Press `F1` and select "Dev Containers: Reopen in Container"
3. The container will install Node.js and dependencies automatically

**Container Features**:
- Node.js 20 LTS
- ESLint and Prettier extensions pre-installed
- Port 5173 forwarded for Vite dev server
- Automatic dependency installation on container creation

## 🌐 Pages

### Home (`/`)
- Hero section with call-to-action
- Featured projects grid
- Recent blog posts preview

### About (`/about`)
- Personal introduction
- Skills and technologies
- Services offered

### Blog (`/blog`)
- List of all blog posts
- Posts sorted by date
- Automatic post loading from markdown files

### Blog Post (`/blog/:slug`)
- Individual blog post display
- Markdown rendering with styling
- Back to blog navigation

### Contact (`/contact`)
- Contact information
- Social media links
- Hiring/inquiry details

## 📦 Key Dependencies

- **react**: ^18.3.1 - UI library
- **react-dom**: ^18.3.1 - React DOM renderer
- **react-router-dom**: ^6.23.1 - Client-side routing
- **react-markdown**: ^9.0.1 - Markdown rendering
- **tailwindcss**: ^3.4.3 - Utility-first CSS framework
- **typescript**: ^5.4.5 - Type safety
- **vite**: ^5.2.11 - Build tool and dev server

## 🎨 Customization

### Styling
- Modify colors in `tailwind.config.js`
- Update styles in `src/index.css`
- Customize component styles in individual files

### Content
- Edit pages in `src/pages/`
- Add blog posts in `src/content/posts/`
- Update components in `src/components/`

### Configuration
- Adjust build settings in `vite.config.ts`
- Modify TypeScript rules in `tsconfig.json`
- Update deployment workflow in `.github/workflows/deploy.yml`

## 🤝 Contributing

This is a personal project, but feel free to fork and customize it for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Built with:
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

## 📞 Support

For questions or issues, please open an issue on GitHub or reach out through the contact page on the deployed site.
