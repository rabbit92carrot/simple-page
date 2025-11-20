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

### Inquiry Board
- Password-protected inquiry system
- Create, read, update, delete posts
- Role-based access (author and admin)
- Contact info privacy protection
- SEO protection for post content

## Deployment

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Environment Variables for Deployment

The app works out-of-the-box without any environment variables (uses localStorage for inquiry board). However, for production deployments, you should configure:

#### Required for Production:
- `VITE_ADMIN_PASSWORD`: Admin password for inquiry board (default: `admin123`)

#### Optional (for persistent database):
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

**Important:** Never commit `.env` file to Git. Use your hosting platform's environment variable settings.

### Supabase Database Setup (Optional)

By default, the inquiry board uses localStorage (data is browser-specific and not persistent across deployments). To use a real database:

1. **Create a Supabase Project**:
   - Go to [supabase.com](https://supabase.com) and create a new project
   - Wait for the database to be provisioned

2. **Run the Database Schema**:
   - In Supabase Dashboard → SQL Editor
   - Copy contents of `supabase-schema.sql`
   - Run the SQL to create the `inquiry_posts` table

3. **Get Your Credentials**:
   - Project Settings → API
   - Copy `Project URL` (VITE_SUPABASE_URL)
   - Copy `anon public` key (VITE_SUPABASE_ANON_KEY)

4. **Set Environment Variables**:
   - Add the credentials to your hosting platform (Vercel/Netlify)
   - Redeploy the application

After setup, all inquiry posts will be stored in Supabase and persist across deployments.

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and create a new site from Git
3. Connect your GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Environment variables (Site settings → Environment variables):
   ```
   VITE_ADMIN_PASSWORD=your-secure-password
   ```
6. Deploy!

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import your repository
3. Build settings (auto-detected):
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Environment Variables:
   ```
   VITE_ADMIN_PASSWORD=your-secure-password
   ```
5. Deploy!

### Deploy to GitHub Pages

**Note:** GitHub Pages doesn't support environment variables. The app will work with localStorage mode and default admin password (`admin123`).

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/simple-page",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/simple-page/',
     plugins: [react()],
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Security Notes

- **Never commit `.env` file** - It's already in `.gitignore`
- **Change admin password** in production from default `admin123`
- **Supabase credentials** are safe to use in frontend (anon key has limited permissions)
- **Admin password** should be kept secret - only share with administrators

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
