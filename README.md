# Jayneel Patel - Digital Portfolio

A comprehensive digital portfolio showcasing academic achievements, projects, skills, and professional aspirations. Built with React and Vite for optimal performance and deployment on Vercel.

## 🌟 Features

- **Interactive Cover Page**: Professional introduction with animated elements
- **Comprehensive Sections**:
  - Learning Philosophy & Introduction
  - Complete Resume/CV with downloadable PDF
  - Interdisciplinary Projects showcase
  - Advanced Skills Development
  - Leadership & Collaboration experiences
  - Global Awareness & Ethics
  - Future Aspirations & Career Goals
  - Self-Assessment & SWOT Analysis
  - Testimonials from mentors and peers

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Navigation**: Sticky navigation bar with smooth scrolling
- **Modern UI/UX**: Gradient themes, animations, and interactive elements

## 🚀 Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Custom CSS with CSS Variables
- **Icons**: React Icons
- **Deployment**: Vercel

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🌐 Deployment on Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Deploy to production**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Vite and configure the build settings
5. Click Deploy!

### Build Configuration

The project is pre-configured for Vercel deployment with:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework Preset**: Vite

## 📁 Project Structure

```
portfolio/
├── public/
│   └── assets/
│       ├── profile.jpg
│       └── resume.pdf
├── src/
│   ├── components/
│   │   ├── CoverPage.tsx
│   │   ├── Navigation.tsx
│   │   ├── TableOfContents.tsx
│   │   ├── Introduction.tsx
│   │   ├── Resume.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Leadership.tsx
│   │   ├── GlobalAwareness.tsx
│   │   ├── FutureAspirations.tsx
│   │   ├── Conclusion.tsx
│   │   └── Testimonials.tsx
│   │   └── [Component].css (for each component)
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```

## 🎨 Customization

### Update Personal Information

1. **Profile Photo**: Replace `/public/assets/profile.jpg` with your photo
2. **Resume**: Replace `/public/assets/resume.pdf` with your resume
3. **Content**: Edit the component files in `src/components/` to update:
   - Personal information
   - Projects details
   - Skills and achievements
   - Testimonials

### Color Theme

Update CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  /* ... other colors */
}
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🌟 Key Highlights

- **Professional Design**: Modern gradient theme with smooth animations
- **Performance Optimized**: Built with Vite for fast loading times
- **SEO Ready**: Proper meta tags and semantic HTML
- **Accessibility**: Following WCAG guidelines for accessibility
- **Print-Friendly**: Optimized for PDF export

## 📄 License

This project is open source and available for educational purposes.

## 👤 Contact

- **Name**: Jayneel Patel
- **Email**: jayneel@example.com
- **LinkedIn**: [linkedin.com/in/jayneel](https://linkedin.com/in/jayneel)
- **GitHub**: [github.com/jayneel](https://github.com/jayneel)

---

Built with ❤️ using React & Vite | Deployed on Vercel
