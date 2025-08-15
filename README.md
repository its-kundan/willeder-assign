# Willeder Frontend Developer Job Application

A modern, responsive web application for applying to the Frontend Developer position at Willeder. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Multi-step Application Form**: Organized into 3 intuitive steps
- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Form Validation**: Comprehensive client-side validation
- **Real-time Feedback**: Toast notifications for user actions
- **Experience Sliders**: Interactive sliders for rating technology experience
- **Dynamic Tech Stack**: Add/remove technologies with ease
- **API Integration**: Direct submission to Willeder's application endpoint

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Performant form handling
- **React Hot Toast** - Beautiful toast notifications
- **Lucide React** - Beautiful icons
- **Axios** - HTTP client for API calls

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd willeder-job-application
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Application header
│   ├── FormField.tsx   # Reusable form field
│   ├── TechStackInput.tsx # Tech stack management
│   ├── ExperienceSlider.tsx # Experience rating slider
│   └── JobApplicationForm.tsx # Main application form
├── services/           # API services
│   └── api.ts         # API integration
├── types/             # TypeScript type definitions
│   └── index.ts       # Application types
├── App.tsx            # Main application component
├── index.tsx          # Application entry point
└── index.css          # Global styles
```

## 📝 Application Form Fields

The application form includes all required fields as specified in the job description:

### Personal Information
- Full Name
- Email Address
- Phone Number
- Years of Professional Experience
- GitHub Profile
- LinkedIn Profile
- Tech Stack (optional)
- Relocation willingness
- Take-home task agreement

### Experience & Skills
- Performance & Optimization Rating
- Technology experience sliders for:
  - React, TypeScript, Next.js
  - Sass, Figma, Semantic HTML
  - Storybook, SEO, Lottie
  - Mobile Development, Express.js, Swagger

### Career & Motivation
- Lifetime Goal
- Achievement goals with Willeder
- Why Willeder
- Reason for job change
- Current Salary (LPA)
- Expected Salary (LPA)
- Notice Period (Days)

## 🌐 API Integration

The application submits data to:
```
https://asia-northeast1-willeder-official.cloudfunctions.net/api/apply/frontend
```

## 🎨 Design Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Step-by-step Navigation**: Clear progress indication
- **Form Validation**: Real-time validation with helpful error messages
- **Loading States**: Smooth loading animations during submission
- **Success Feedback**: Clear confirmation when application is submitted
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Connect your repository to Netlify or Vercel
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is created for the Willeder Frontend Developer application process.

## 🏢 About Willeder

Willeder represents individuals with strong determination, combining "willed" with the suffix "-er" meaning "one who." The company aims to be the partner of choice for business startups and IT-related problem solving, maximizing business results through their work.

**Values:**
- Action-oriented
- Accountability
- Leadership
- Efficiency
- Diversity
- Proactiveness
- Social contribution
- External perspective
- Curiosity

---

*"Where your Dreams Soar!"* 🚀
