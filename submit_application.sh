#!/bin/bash

echo "🚀 Submitting your application to Willeder..."

curl -X POST \
  https://asia-northeast1-willeder-official.cloudfunctions.net/api/apply/frontend \
  -H "Content-Type: application/json" \
  -d '{
   "agreeOnTakeTest": true,
   "name": "Kundan Kumar",
   "email": "kundan51kk@gmail.com",
   "yearOfExperience": 0,
   "rateOptimization": 4,
   "github": "https://github.com/its-kundan",
   "linkedin": "https://www.linkedin.com/in/its-kundan",
   "phone": "+91 7667886894",
   "techstack": [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB"
   ],
   "relocatable": true,
   "goal": "To build impactful tech products that reach millions of users",
   "achievement": "Developed multiple full-stack projects including LMS, Job Portal, and Real-time Chat App",
   "why": "Because Willeder'\''s vision of empowering determined individuals aligns with my own drive for continuous growth and meaningful contribution",
   "reason": "Looking for a challenging and growth-oriented environment with impactful projects",
   "currentSalary": 9,
   "expectedSalary": 12,
   "noticePeriod": 15,
   "react": 2,
   "typescript": 1,
   "next": 1,
   "sass": 1,
   "figma": 1,
   "semanticHtml": 2,
   "storybook": 0,
   "seo": 1,
   "lottie": 1,
   "mobileDevelopment": 1,
   "express": 1,
   "swagger": 0
}'

echo ""
echo "✅ Application submitted! Check the response above."
