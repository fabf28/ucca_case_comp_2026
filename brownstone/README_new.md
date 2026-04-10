# Brownstone Resources Website

A modern, responsive website for Brownstone Resources, a privately held land and mineral rights acquisition company based in Southern Saskatchewan, Western Canada.

## Overview

Brownstone Resources specializes in evaluating, purchasing, and managing farmland and subsurface mineral rights across Western Canada. This website serves as the company's digital presence, providing information about their services, company background, and tools for landowners to get evaluations or refer others.

## Features

- **Home Page**: Hero section, company overview, services, statistics, how it works, and call-to-action
- **Blog**: News and updates about the industry and company activities
- **Evaluation Form**: Tool for landowners to request free property evaluations
- **Referral Program**: Form for referring other landowners
- **Responsive Design**: Optimized for desktop and mobile devices
- **Custom Styling**: Hand-crafted CSS with a warm, earthy color palette

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Custom CSS-in-JS approach with global styles
- **Linting**: ESLint with TypeScript support
- **Deployment**: Cloudflare Pages

## Project Structure

```
brownstone/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components (Nav, Footer, etc.)
│   ├── pages/              # Page components (HomePage, BlogPage, etc.)
│   ├── data/               # Static data (blog posts, stats, etc.)
│   ├── styles/             # Global styles and CSS
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # App entry point
│   └── index.css           # Base styles
├── package.json            # Dependencies and scripts
├── tsconfig*.json          # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── wrangler.jsonc          # Cloudflare deployment config
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fabf28/ucca_case_comp_2026.git
   cd ucca_case_comp_2026/brownstone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

### Deployment

The project is configured for deployment to Cloudflare Pages:

```bash
npm run deploy
```

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to Cloudflare Pages
- `npm run lint` - Run ESLint

### Code Style

This project uses ESLint for code linting. The configuration includes TypeScript support and React-specific rules.

### TypeScript Configuration

The project uses strict TypeScript settings with separate configs for app and Node.js code.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is private and proprietary to Brownstone Resources.

## Contact

For questions or support, please contact the development team.