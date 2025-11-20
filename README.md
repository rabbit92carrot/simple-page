# NEO Dr. INC. Landing Page

A modern, Supabase-inspired landing page for NEO Dr. INC. (jamber.kr), showcasing innovative acupuncture medical devices and smart healthcare solutions.

## Features

- **Modern UI Design**: Supabase-inspired dark theme with gradient effects
- **Multi-Page Navigation**: Home (Products), Company, PR, and Contact pages
- **Responsive Layout**: Mobile-friendly design with smooth transitions
- **E2E Testing**: Comprehensive Playwright test suite with 22 test cases
- **Docker Support**: Containerized testing environment

## Tech Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router DOM v7
- **Testing**: Playwright
- **Containerization**: Docker & Docker Compose

## Project Structure

```
├── src/
│   ├── components/         # Reusable components (Navbar, Footer, etc.)
│   ├── pages/             # Page components (Home, Company, PR, Contact)
│   ├── assets/            # Images and static assets
│   └── App.jsx            # Main application component
├── tests/
│   └── e2e/               # Playwright E2E tests
├── docker-compose.test.yml # Docker Compose configuration
├── Dockerfile.playwright   # Playwright container setup
└── playwright.config.js    # Playwright configuration
```

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn
- Docker (optional, for containerized testing)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd test-project06-simple-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test:e2e` - Run Playwright tests locally
- `npm run test:e2e:ui` - Run Playwright tests with UI mode
- `npm run test:e2e:headed` - Run Playwright tests in headed mode
- `npm run test:e2e:docker` - Run E2E tests in Docker containers
- `npm run test:e2e:docker:down` - Stop and remove Docker containers

## Testing

### Local Testing

Run E2E tests locally (requires Playwright browser installation):

```bash
npx playwright install chromium
npm run test:e2e
```

### Docker Testing

Run E2E tests in isolated Docker containers:

```bash
npm run test:e2e:docker
```

This will:
1. Build the Playwright test container
2. Start the web server container
3. Run all E2E tests
4. Automatically clean up containers

## Pages Overview

### Home (Products)
- Hero section with company introduction
- AcuPro, AcuSta, and JAMBER product showcases
- Feature highlights and product benefits

### Company
- Company vision and mission
- 5-year history timeline (2019-2024)
- Certifications and achievements
- Team information

### PR
- Latest news and announcements
- Academic materials and research
- Global presence and partnerships
- Media coverage

### Contact
- Contact form with validation
- Company contact information
- Business hours
- Location details

## Deployment

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Deploy to Static Hosting

The built application can be deployed to any static hosting service:

- **Netlify**: Drop `dist/` folder or connect GitHub repository
- **Vercel**: Import GitHub repository
- **GitHub Pages**: Push `dist/` to `gh-pages` branch
- **AWS S3**: Upload `dist/` contents to S3 bucket

## Environment Variables

No environment variables required for basic operation.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - NEO Dr. INC.

## Contact

- **Website**: [jamber.kr](https://jamber.kr)
- **Email**: neodrsales@naver.com
- **Location**: Wonju-si, Gangwon-do, South Korea
