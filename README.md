# 🌊 Hydrochain Frontend

**Smart Subsidy Disbursement Platform for Green Hydrogen Projects**

A modern, responsive web application built with React, TypeScript, and Tailwind CSS that provides an intuitive interface for managing blockchain-based green hydrogen subsidies.

![Hydrochain Logo](https://img.shields.io/badge/Hydrochain-Smart%20Subsidies-blue?style=for-the-badge&logo=react)

## 🚀 Overview

Hydrochain Frontend is the user interface for a revolutionary platform that automates green hydrogen subsidy disbursement using blockchain technology. The application provides stakeholders with real-time monitoring, transparent processes, and seamless interaction with smart contracts.

### Key Features

- 🔐 **Multi-Role Authentication** - Support for Producers, Banks, Auditors, and Government officials
- 📊 **Interactive Dashboard** - Real-time project monitoring and analytics
- 🔗 **Blockchain Integration** - Direct interaction with smart contracts
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX** - Clean, professional interface with smooth animations
- 🔍 **Real-time Tracking** - Live updates on subsidy status and milestones

## 🛠️ Tech Stack

### Core Technologies
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with enhanced IDE support
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling

### UI Components & Libraries
- **shadcn/ui** - Beautiful, accessible component library
- **Radix UI** - Low-level UI primitives for accessibility
- **Lucide React** - Beautiful, customizable SVG icons
- **React Hook Form** - Performant forms with easy validation

### Development Tools
- **ESLint** - Code linting and quality enforcement
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── Navigation.tsx   # Main navigation with auth
│   ├── HeroSection.tsx  # Landing page hero
│   ├── Dashboard.tsx    # Main dashboard component
│   ├── Footer.tsx       # Application footer
│   └── ...
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and configurations
├── pages/               # Page components
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 error page
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and custom CSS
```

## 🚦 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rushilchauhan45/Front-end-DAIICT.git
   cd Front-end-DAIICT
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm run build:dev` - Build development bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Design System

### Typography
- **Primary Font**: Inter - Clean, modern sans-serif
- **Logo Font**: Exo 2 & Rajdhani - Futuristic, tech-inspired
- **Monospace**: JetBrains Mono - For code and data display

### Color Palette
```css
/* Primary Colors */
--primary-green: 142 70% 50%     /* Main brand color */
--primary-blue: 210 70% 55%      /* Accent color */

/* Surface Colors */
--background: 225 25% 8%         /* Main background */
--surface: 225 20% 12%           /* Card backgrounds */
--surface-elevated: 225 20% 16%  /* Elevated elements */

/* Text Colors */
--foreground: 210 40% 95%        /* Primary text */
--muted-foreground: 210 20% 70%  /* Secondary text */
```

### Component Guidelines
- **Cards**: Clean, subtle shadows with rounded corners
- **Buttons**: Solid colors with hover effects and subtle animations
- **Forms**: Clear labels, proper validation, and smooth focus states
- **Navigation**: Gradient underlines and background hover effects

## 🔐 Authentication Flow

The application supports a comprehensive authentication system:

### User Roles
1. **Producer** - Green hydrogen project creators and managers
2. **Bank** - Financial institutions providing funding
3. **Auditor** - Independent verification specialists  
4. **Government** - Regulatory and approval authorities

### Multi-Step Registration
1. **Personal Information** - Name, contact, email, secure password
2. **Email Verification** - OTP-based email confirmation
3. **Role Selection** - Choose appropriate user role

### Security Features
- Password validation (uppercase, special characters, numbers, 6+ length)
- Email verification with OTP
- Role-based access control
- Secure session management

## 📊 Dashboard Features

### Real-time Monitoring
- Live project status updates
- Milestone tracking and verification
- Fund disbursement history
- Performance analytics

### Interactive Elements
- Dynamic charts and graphs
- Filterable data tables
- Exportable reports
- Real-time notifications

### Smart Contract Integration
- Direct blockchain interaction
- Transaction status monitoring
- Automated milestone verification
- Transparent fund release tracking

## 🌐 Responsive Design

The application is fully responsive and optimized for:

- **Desktop** (1920px+) - Full feature set with optimized layouts
- **Laptop** (1024px+) - Condensed navigation and responsive grids
- **Tablet** (768px+) - Touch-friendly interfaces and stacked layouts
- **Mobile** (320px+) - Mobile-first design with gesture support

## 🔧 Customization

### Adding New Components
1. Create component in appropriate directory
2. Follow TypeScript interfaces and props patterns
3. Use shadcn/ui components as base when possible
4. Implement proper accessibility features

### Styling Guidelines
- Use Tailwind utility classes for consistent styling
- Follow the established color palette
- Maintain consistent spacing and typography
- Ensure accessibility compliance

### State Management
- Use React hooks for local state
- Implement custom hooks for reusable logic
- Consider context for global state when needed

## 🧪 Testing & Quality

### Code Quality
- ESLint configuration for TypeScript
- Consistent formatting and style rules
- Type safety enforcement
- Import organization and optimization

### Performance Optimization
- Vite for fast development and builds
- Code splitting with React.lazy
- Optimized bundle sizes
- Image optimization and lazy loading

## 🚀 Deployment

### Build Process
```bash
# Production build
npm run build

# Development build
npm run build:dev

# Preview build locally
npm run preview
```

### Deployment Options
- **Vercel** - Recommended for React applications
- **Netlify** - Easy deployment with git integration
- **GitHub Pages** - Free hosting for static sites
- **Custom Server** - Deploy build files to any web server

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork the repository** and create a feature branch
2. **Follow the code style** established in the project
3. **Write clear commit messages** describing your changes
4. **Test your changes** thoroughly before submitting
5. **Submit a pull request** with a detailed description

### Development Workflow
```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make your changes
# ... code changes ...

# Commit with descriptive message
git commit -m "feat: add new dashboard component"

# Push to your fork
git push origin feature/your-feature-name

# Create pull request
```

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Frontend Development** - Modern React/TypeScript implementation
- **UI/UX Design** - Clean, professional interface design
- **Integration** - Blockchain and smart contract connectivity

## 📞 Support

For questions, issues, or contributions:

- 🐛 **Issues**: [GitHub Issues](https://github.com/Rushilchauhan45/Front-end-DAIICT/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Rushilchauhan45/Front-end-DAIICT/discussions)
- 📧 **Email**: Support team contact

## 🔮 Future Roadmap

- [ ] **Mobile App** - React Native implementation
- [ ] **PWA Features** - Offline support and push notifications  
- [ ] **Advanced Analytics** - Enhanced reporting and insights
- [ ] **Multi-language** - Internationalization support
- [ ] **Dark Mode** - User preference theming
- [ ] **API Integration** - Enhanced backend connectivity

---

**Built with ❤️ for the future of sustainable energy**

*Hydrochain - Revolutionizing Green Hydrogen Subsidies through Blockchain Technology*