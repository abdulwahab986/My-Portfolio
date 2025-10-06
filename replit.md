# Overview

This is a personal portfolio website built as a full-stack web application showcasing the professional profile of Abdul Wahab, a Software Engineer and SQA Specialist. The application features a single-page architecture with sections for about, experience, projects, skills, education, and testimonials. The site includes interactive elements like resume download functionality and dark/light theme toggle.

# Recent Changes (January 2025)

## Tab-Based Navigation Redesign (January 6, 2025)
- **Navigation Redesign**: Removed traditional header/navigation bar completely
- **Centered Layout**: Profile picture positioned in the center with 4 clickable tabs around it
- **Desktop Layout** (≥1024px):
  - 3x3 grid with profile in center cell
  - 4 tabs in corners (Experience, Projects, Skills, Education)
  - Fixed left side panel with vertical name, contact links, and theme toggle
  - Reduced gap (gap-6) brings tabs closer to center
- **Mobile Layout** (<1024px):
  - Stacked vertical layout with profile picture at top
  - 2x2 grid of tabs below profile for easy access
  - Floating buttons in bottom-right for theme toggle and email
- **Smooth Navigation**: All tabs scroll smoothly to respective sections when clicked
- **Animations Added**:
  - Helicopter rotor spinning above profile picture (desktop and mobile)
  - Profile picture flies in from top with bounce effect (0.6s animation)
  - Tabs slide in from left and right sides with staggered delays (0.8s-1s)
  - Text fades in after profile loads (0.6s delay)
- **Title Update**: Changed from "SQA Engineer" to "Software Engineer" with "Specialist In SQA" subtitle
- Component: `hero-with-tabs.tsx` replaces previous hero layouts

## Modern Glassmorphism Redesign (January 6, 2025)
- Complete UI overhaul with modern glassmorphism effects and centered hero layout
- Added radial gradient backgrounds (light and dark mode compatible)
- Implemented `.glass-card` and `.section-card` utility classes for translucent surfaces with backdrop blur
- Profile picture features animated glow effect (`.profile-glow`)
- All sections updated with glassmorphism styling: Experience, Projects, Skills, Education
- Added smooth entrance animations: fade-in, slide-in-left, slide-in-right
- Enhanced hover effects and transitions across all cards
- Maintained responsive design and dark mode compatibility

## Dark Mode Implementation
- Added theme toggle with light/dark mode support
- Theme persists across page reloads via localStorage
- Toggle buttons in desktop and mobile navigation
- Custom color schemes for both themes

## Contact Form
- Contact form section removed per user request (January 6, 2025)
- User dismissed email integration options (Resend, SendGrid)
- Contact information (email, phone, LinkedIn) remains in hero section and footer
- Future option: Can add back with email services like Resend, SendGrid, or Gmail if needed

## Profile Picture
- Updated hero section with user's professional headshot (January 6, 2025)
- Image stored in attached_assets directory and imported using @assets alias
- Replaces placeholder stock photo
- Fixed image loading using proper Vite import syntax

## Experience Section
- Removed UI Testing from experience section per user request (January 6, 2025)
- Focus on Functional, Smoke, Regression, and cross-browser testing

## Testimonials Section
- Client Testimonials section removed per user request (January 6, 2025)
- Portfolio focuses on personal achievements and project work

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Build System**
- React with TypeScript using Vite as the build tool and development server
- Single-page application (SPA) using Wouter for client-side routing
- Component-based architecture with separation of concerns between pages, components, and UI primitives

**UI Component Library**
- Shadcn UI with Radix UI primitives as the foundation
- Tailwind CSS for styling with custom design tokens and dark theme support
- Design system includes comprehensive component library (buttons, forms, dialogs, cards, etc.)
- New York style variant with neutral base color and CSS variables for theming

**State Management**
- TanStack React Query (v5) for server state management and data fetching
- Custom hooks for UI state (mobile detection, toast notifications, theme)
- Form handling with React Hook Form and Zod validation

**Theme Management**
- Custom theme provider hook with localStorage persistence
- Light and dark mode color schemes
- Theme toggle in navigation (desktop and mobile)

**Styling Approach**
- Tailwind CSS with custom configuration
- CSS variables for dynamic theming
- Custom fonts: Inter (primary), Georgia (serif), Menlo (monospace)
- Responsive design with mobile-first approach
- Modern glassmorphism effects with `.glass-card` and `.section-card` utility classes
- Radial gradient backgrounds for depth and visual interest
- Custom animations: fade-in, slide-in-left, slide-in-right, floating, profile-glow
- Backdrop-filter blur effects for translucent surfaces

## Backend Architecture

**Server Framework**
- Express.js with TypeScript running on Node.js
- ESM (ECMAScript Modules) architecture
- Custom middleware for request logging and JSON parsing with raw body access

**API Design**
- RESTful endpoints under `/api` prefix
- File download endpoint: `/api/resume/download` for serving PDF resume
- Contact form endpoint: `/api/contact` for form submissions
- Currently uses in-memory storage with interface designed for future database integration

**Development Setup**
- Vite middleware integration for HMR (Hot Module Replacement) in development
- Custom error handling and logging with formatted timestamps
- Separate build process for client (Vite) and server (esbuild)

## Data Storage Solutions

**Current Implementation**
- In-memory storage using Map-based implementation (`MemStorage` class)
- Storage interface (`IStorage`) defines contract for user CRUD operations
- Designed for easy migration to persistent database

**Planned Database Integration**
- Drizzle ORM configured for PostgreSQL (Neon serverless)
- Schema defined in `shared/schema.ts` with users table
- Zod schema validation integrated with Drizzle
- Migration support configured via `drizzle-kit`

**Database Schema**
- Users table with UUID primary keys, username, and password fields
- Schema uses `gen_random_uuid()` for ID generation
- Drizzle-Zod integration for type-safe validation

## External Dependencies

**Database & ORM**
- `@neondatabase/serverless` - Serverless PostgreSQL driver
- `drizzle-orm` - Type-safe SQL ORM
- `drizzle-zod` - Zod schema generation from Drizzle schemas
- `connect-pg-simple` - PostgreSQL session store (configured but not actively used)

**UI Component Libraries**
- Multiple `@radix-ui/*` packages for accessible UI primitives
- `cmdk` - Command palette component
- `embla-carousel-react` - Carousel functionality
- `lucide-react` - Icon library
- `class-variance-authority` & `clsx` - Utility-first styling helpers

**Development & Build Tools**
- `vite` - Frontend build tool and dev server
- `@vitejs/plugin-react` - React plugin for Vite
- Replit-specific plugins for development (cartographer, dev banner, runtime error overlay)
- `tsx` - TypeScript execution for development
- `esbuild` - Server-side bundling for production

**Form & Validation**
- `react-hook-form` - Form state management
- `@hookform/resolvers` - Validation resolvers
- `zod` - Schema validation
- `date-fns` - Date manipulation utilities

**Data Fetching**
- `@tanstack/react-query` - Async state management and caching

**Routing**
- `wouter` - Lightweight client-side routing

**File System Operations**
- Static asset serving from `attached_assets` directory
- Resume file stored locally and served via Express endpoint
- PDF streaming using Node.js `fs.createReadStream()`
