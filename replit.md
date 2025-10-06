# Overview

This is a personal portfolio website built as a full-stack web application showcasing the professional profile of Abdul Wahab, a Software Engineer and SQA Specialist. The application features a single-page architecture with sections for about, experience, projects, skills, education, and testimonials. The site includes interactive elements like resume download functionality and dark/light theme toggle.

# Recent Changes (January 2025)

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
- Image stored in attached_assets directory
- Replaces placeholder stock photo

## Experience Section
- Removed UI Testing from experience section per user request (January 6, 2025)
- Focus on Functional, Smoke, Regression, and cross-browser testing

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
