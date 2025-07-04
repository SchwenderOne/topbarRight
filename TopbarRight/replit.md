# Replit Development Guide

## Overview

This is a full-stack web application built with React frontend and Express backend, using PostgreSQL database with Drizzle ORM. The application uses shadcn/ui components for the frontend UI and includes a comprehensive set of modern web development tools.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Framework**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom theming
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite with hot module replacement

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: connect-pg-simple for PostgreSQL session store

### Project Structure
```
/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and configurations
├── server/          # Express backend
│   ├── index.ts     # Main server entry point
│   ├── routes.ts    # API route definitions
│   ├── storage.ts   # Data access layer
│   └── vite.ts      # Vite development server integration
├── shared/          # Shared types and schemas
└── migrations/      # Database migration files
```

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Shared schema definitions in `/shared/schema.ts`
- **Migrations**: Automated database migrations via drizzle-kit
- **Connection**: Neon Database serverless connection

### Authentication & Storage
- **Storage Interface**: Abstract storage layer supporting both memory and database implementations
- **Session Management**: PostgreSQL-backed sessions for production scalability
- **User Management**: Basic user schema with username/password authentication

### Development Environment
- **Hot Reloading**: Vite dev server with Express middleware integration
- **TypeScript**: Full TypeScript support across frontend and backend
- **Path Aliases**: Configured aliases for clean imports (@/, @shared/)

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express routes handle HTTP requests and responses
3. **Business Logic**: Route handlers interact with storage interface
4. **Data Access**: Storage layer abstracts database operations
5. **Database**: Drizzle ORM manages PostgreSQL interactions

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui**: Headless UI primitives
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundler for production builds

## Deployment Strategy

### Development Mode
- Run `npm run dev` to start both frontend and backend
- Vite serves frontend with hot reloading
- Express serves API routes with automatic TypeScript compilation

### Production Build
- Frontend: Vite builds optimized static assets
- Backend: esbuild creates single bundled server file
- Database: Drizzle migrations ensure schema consistency

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment mode (development/production)

## Changelog

```
Changelog:
- July 04, 2025. Initial setup
- July 04, 2025. Implemented complete two-part top bar matching Figma design
- July 04, 2025. Created comprehensive context.md file for project continuity
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```