# Project Context: Post-Brainstorm Survey Application

## Project Overview

This is a collaborative interface web application designed to replicate a Figma design for a post-brainstorm survey tool. The application features a complex two-part top bar interface that must match the original Figma design with pixel-perfect accuracy.

**Primary Goal**: Migrate a Figma design to a fully functional React web application with exact visual fidelity.

## Current Implementation Status

### ✅ Completed Features

#### Upper Top Bar (91px height)
- **Logo**: Portico logo positioned at top-left (23px from edges)
- **Search Bar**: Functional search with magnifying glass icon (15.898px × 15.771px)
  - Positioned at left: 677px, top: 27px
  - Dimensions: 191.512px × 41.738px
  - Placeholder: "Search or ask AI"
- **Share Button**: Blue gradient button with "Share" text and arrow icon
- **Results Button**: Blue gradient button with "Results" text and chart icon
- **User Avatars**: Three user profile images positioned on the right
  - Avatar images: 42px × 42px with 2px white borders
  - Proper z-index stacking and positioning

#### Lower Top Bar (41px height)
- **Toolbox Left**: Info icon, {f(x)} notation, settings gear
- **Folder Navigation**: Breadcrumb "Start > Department..." with chevron arrows
- **Menu Items**: Import, Arrange, Logic, Guides in rounded container
- **Vertical Separator**: Gray dividing line between sections

#### Technical Implementation
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom properties
- **Font**: Aeonik Pro with specific weights and spacing
- **Responsive Design**: Fixed positioning with proper z-index management
- **Asset Integration**: Figma assets properly referenced from /figmaAssets/

### 🔄 Design Specifications Implemented

#### Typography
- **Font Family**: Aeonik Pro (primary), system-ui, sans-serif (fallbacks)
- **Search Bar**: 18.531px, font-weight: medium, letter-spacing: -0.185px
- **Menu Items**: 18.545px, font-weight: 500, letter-spacing: -0.185px, line-height: 106%

#### Colors and Effects
- **Background**: rgba(255, 255, 255, 0.25) with backdrop-filter: blur(12.55px)
- **Borders**: 1.03px solid rgba(130, 130, 130, 0.15)
- **Text Color**: #343434 (primary text)
- **Separator**: #929292 with 63% opacity
- **Blue Gradient**: Radial gradient for action buttons

#### Layout and Positioning
- **Header Height**: 132px total (91px upper + 41px lower)
- **Corner Rounding**: 13px on light gray area only (not dark header)
- **Drop Shadows**: 0px 0px 25.1px rgba(0, 0, 0, 0.05)
- **Fixed Positioning**: Top bar remains fixed during scroll

## Technical Architecture

### File Structure
```
client/src/
├── pages/
│   └── Box.tsx                 # Main application component
├── components/ui/              # shadcn/ui components
├── lib/
│   └── utils.ts               # Utility functions
└── main.tsx                   # Application entry point

figmaAssets/                   # Figma exported assets
├── background-.svg            # Header background
├── portico-logo-.png         # Company logo
├── group-1.png               # User avatar
├── group-2.png               # User avatar
├── frame-1.png               # User avatar
└── [additional assets]

server/                        # Express backend
shared/                        # Shared types and schemas
```

### Component Architecture

#### Box.tsx - Main Component
- **Purpose**: Primary application layout with complete top bar implementation
- **Key Features**:
  - Fixed header with two-part structure
  - Precise Figma positioning with absolute coordinates
  - Responsive user avatar management
  - Search functionality integration
  - Menu item navigation structure

#### Styling Approach
- **Tailwind CSS**: Primary styling framework
- **Inline Styles**: Used for precise Figma specifications
- **CSS Custom Properties**: For consistent theming
- **Backdrop Filters**: For glassmorphism effects

## Asset Management

### Figma Asset Integration
All assets are stored in `/figmaAssets/` and referenced using standard img src paths:

```typescript
// Example asset references
<img src="/figmaAssets/portico-logo-.png" alt="Portico logo" />
<img src="/figmaAssets/background-.svg" alt="Header background" />
```

### Asset Naming Convention
- **Background Elements**: `background-*.svg`
- **Logos**: `*-logo-*.png`
- **User Avatars**: `group-*.png`, `frame-*.png`
- **Icons**: Descriptive names matching Figma layers

### Asset Specifications
- **Logo**: 23px × 34px positioned at top: 30px, left: 23px
- **Avatars**: 42px × 42px with 2px white borders
- **Background**: SVG with proper scaling and positioning
- **Icons**: Exact pixel dimensions from Figma export

## Development Guidelines

### Code Standards
1. **TypeScript**: Strict typing for all components
2. **Tailwind Classes**: Prefer utility classes over custom CSS
3. **Figma Fidelity**: Match exact dimensions and positioning
4. **Component Structure**: Keep Box.tsx as single comprehensive component
5. **Asset References**: Use absolute paths from public directory

### Styling Principles
1. **Exact Measurements**: Use precise px values from Figma
2. **Font Specifications**: Maintain exact font-weight and letter-spacing
3. **Color Accuracy**: Use exact rgba/hex values from design
4. **Effect Reproduction**: Implement backdrop filters and shadows precisely
5. **Positioning**: Use absolute positioning for pixel-perfect layout

### Testing Approach
1. **Visual Comparison**: Compare against Figma design screenshots
2. **Responsive Testing**: Ensure fixed elements work across screen sizes
3. **Font Loading**: Verify Aeonik Pro loads correctly
4. **Asset Loading**: Check all images and SVGs display properly
5. **Interactive Elements**: Test search bar and button functionality

## Key Components Breakdown

### Upper Top Bar Components

#### Logo Section
```typescript
// Positioned at top-left corner
<img
  className="absolute w-[23px] h-[34px] top-[30px] left-[23px]"
  src="/figmaAssets/portico-logo-.png"
/>
```

#### Search Bar
```typescript
// Complex search component with precise styling
<div className="absolute w-[191.512px] h-[41.738px] top-[27px] left-[677px]">
  // Background with blur effects
  // Magnifying glass icon (15.898px × 15.771px)
  // Input field with Aeonik Pro font
</div>
```

#### Action Buttons
```typescript
// Share and Results buttons with blue gradient
// Positioned on right side with proper spacing
// Include SVG icons and text labels
```

#### User Avatars
```typescript
// Three user images with stacking and borders
// Positioned with precise coordinates
// Z-index management for overlap
```

### Lower Top Bar Components

#### Toolbox Section
```typescript
// Left-aligned tools: info icon, {f(x)}, settings
// Positioned at left: 23px, top: 9px
// Custom icons and typography
```

#### Navigation Breadcrumb
```typescript
// "Start > Department..." with chevron arrows
// Blur effect on secondary text
// Proper font sizing and spacing
```

#### Menu Items
```typescript
// Import, Arrange, Logic, Guides
// Rounded container with backdrop blur
// Exact font specifications from Figma
```

## Environment Setup

### Required Dependencies
- React 18+ with TypeScript
- Tailwind CSS with custom configuration
- Vite for development server
- Express backend (minimal setup)

### Font Requirements
- **Aeonik Pro**: Must be loaded for design accuracy
- **System Fallbacks**: system-ui, sans-serif for compatibility

### Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run type-check   # TypeScript validation
```

## Future Development Roadmap

### Immediate Next Steps
1. **Main Content Area**: Implement the survey interface below the header
2. **Interactive Features**: Add hover states and click handlers
3. **Responsive Design**: Ensure proper mobile/tablet layouts
4. **Form Components**: Build survey questions and response interfaces

### Extended Features
1. **Navigation Logic**: Implement breadcrumb navigation functionality
2. **Search Implementation**: Connect search bar to actual search logic
3. **User Management**: Implement avatar click interactions
4. **Data Integration**: Connect to backend APIs for survey data

### Design Enhancements
1. **Animations**: Add smooth transitions for interactions
2. **Loading States**: Implement skeleton screens and spinners
3. **Error Handling**: Design error states and validation messages
4. **Accessibility**: Ensure WCAG compliance throughout

## Troubleshooting Guide

### Common Issues and Solutions

#### Font Loading Problems
- **Issue**: Aeonik Pro not displaying correctly
- **Solution**: Verify font files are accessible and properly referenced in CSS

#### Asset Loading Failures
- **Issue**: Images not displaying from /figmaAssets/
- **Solution**: Check file paths and ensure assets are in public directory

#### Positioning Misalignment
- **Issue**: Elements not matching Figma positions
- **Solution**: Verify absolute positioning values and container relationships

#### Backdrop Blur Not Working
- **Issue**: Glassmorphism effects not rendering
- **Solution**: Check browser support and backdrop-filter CSS properties

#### Z-Index Conflicts
- **Issue**: Elements overlapping incorrectly
- **Solution**: Review z-index values and stacking context

### Development Tips
1. **Figma Reference**: Keep Figma design open during development
2. **Browser DevTools**: Use for precise measurement verification
3. **Asset Organization**: Maintain clean /figmaAssets/ directory structure
4. **Component Testing**: Test each section independently before integration
5. **Code Reviews**: Compare against this context file for consistency

## Maintenance Notes

### Regular Updates Required
1. **Dependencies**: Keep React and Tailwind updated
2. **Assets**: Replace placeholder assets with final versions
3. **Fonts**: Monitor Aeonik Pro licensing and alternatives
4. **Browser Support**: Test new browser versions for compatibility

### Documentation Updates
- Update this file when new features are implemented
- Document any deviations from original Figma design
- Record performance optimizations and their impact
- Maintain change log for major architectural decisions

---

**Last Updated**: January 4, 2025
**Current Version**: v1.0 - Complete Top Bar Implementation
**Next Milestone**: Main Content Area Development

die bestehende codebase ist eine website, die ich in replit erstellt habe. ich will diese nun erstmal starten und testen. hier anweisungen aus replit:

Für die Arbeit in einer anderen IDE und das lokale Setup sind folgende Schritte wichtig:

Download und Setup
1. Dateien herunterladen:

Alle Projektdateien als ZIP von Replit herunterladen
In gewünschten Ordner auf dem Laptop entpacken
2. Abhängigkeiten installieren:

cd [projektordner]
npm install
3. Umgebung vorbereiten:

Node.js Version 18+ erforderlich
Aeonik Pro Font muss verfügbar sein für korrekte Darstellung
Lokales Starten
Entwicklungsserver starten:

npm run dev
Was passiert:

Express Backend läuft auf Port 5000
Vite Frontend wird automatisch mit gestartet
Website ist verfügbar unter http://localhost:5000
Wichtige Hinweise für andere IDEs
1. Pfad-Aliase beachten:

@/ zeigt auf client/src/
@assets/ zeigt auf attached_assets/
Diese sind in vite.config.ts konfiguriert
2. TypeScript Konfiguration:

tsconfig.json ist für das gesamte Projekt konfiguriert
Sowohl Frontend (client/) als auch Backend (server/) nutzen TypeScript
3. Asset-Verwaltung:

Figma Assets liegen in /figmaAssets/ (im public-Verzeichnis)
Werden über absolute Pfade referenziert: /figmaAssets/dateiname.png
4. Styling-System:

Tailwind CSS ist komplett konfiguriert
Custom Properties in client/src/index.css
Komponenten nutzen shadcn/ui
IDE-spezifische Einstellungen
VS Code empfohlen:

TypeScript Language Server
Tailwind CSS IntelliSense Extension
Prettier für Code-Formatierung
Andere IDEs:

TypeScript Support aktivieren
Tailwind CSS Syntax-Highlighting installieren
ESLint/Prettier Konfiguration prüfen
Troubleshooting
Falls Probleme auftreten:

node_modules löschen und npm install neu ausführen
Browser-Cache leeren
Prüfen ob alle Ports (5000) frei sind
context.md Datei lesen für detaillierte Projektinfos
Font-Probleme:

Aeonik Pro muss system-weit installiert sein
Fallback-Fonts (system-ui, sans-serif) werden automatisch genutzt
Die context.md Datei enthält alle technischen Details und Spezifikationen für die weitere Entwicklung.