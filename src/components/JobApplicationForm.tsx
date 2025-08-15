import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Send, CheckCircle, Zap, Target, Users } from 'lucide-react';
import { JobApplication } from '../types';
import { submitJobApplication, validateEmail, validateUrl } from '../services/api';
import FormField from './FormField';
import TechStackInput from './TechStackInput';
import ExperienceSlider from './ExperienceSlider';

const JobApplicationForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<JobApplication>>({
    agreeOnTakeTest: true,
    techstack: [],
    relocatable: false,
    yearOfExperience: 0,
    rateOptimization: 5,
    express: 0,
    typescript: 0,
    swagger: 0,
    react: 0,
    next: 0,
    sass: 0,
    figma: 0,
    semanticHtml: 0,
    storybook: 0,
    seo: 0,
    lottie: 0,
    mobileDevelopment: 0,
  });

  const { handleSubmit, formState: { errors }, setValue } = useForm<JobApplication>();

  const updateFormData = (field: keyof JobApplication, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setValue(field, value);
  };

  const validateForm = (): boolean => {
    const requiredFields = [
      'name', 'email', 'github', 'linkedin', 'phone', 
      'goal', 'achievement', 'why', 'reason'
    ];

    for (const field of requiredFields) {
      if (!formData[field as keyof JobApplication]) {
        toast.error(`Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        return false;
      }
    }

    if (!validateEmail(formData.email || '')) {
      toast.error('Please enter a valid email address');
      return false;
    }

    if (!validateUrl(formData.github || '') || !validateUrl(formData.linkedin || '')) {
      toast.error('Please enter valid URLs for GitHub and LinkedIn');
      return false;
    }

    return true;
  };

  const onSubmit = async (data: JobApplication) => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const applicationData = { ...formData, ...data } as JobApplication;
      await submitJobApplication(applicationData);
      toast.success('Application submitted successfully! Welcome to the Willeder family! 🚀');
      setCurrentStep(4); // Success step
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to submit application');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep1 = () => (
    <div className="form-section">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
          <Users className="w-6 h-6 text-primary-600" />
        </div>
        <h3 className="form-title">Tell Us About Yourself</h3>
        <p className="form-subtitle">
          Let's start your journey with Willeder. Share your story and let us know what makes you unique.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Full Name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => updateFormData('name', e.target.value)}
          error={errors.name?.message}
        />
        <FormField
          label="Email Address"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => updateFormData('email', e.target.value)}
          error={errors.email?.message}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => updateFormData('phone', e.target.value)}
          error={errors.phone?.message}
        />
        <FormField
          label="Years of Professional Experience"
          name="yearOfExperience"
          type="number"
          min={0}
          max={50}
          required
          value={formData.yearOfExperience}
          onChange={(e) => updateFormData('yearOfExperience', Number(e.target.value))}
          error={errors.yearOfExperience?.message}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="GitHub Profile"
          name="github"
          type="url"
          required
          value={formData.github}
          onChange={(e) => updateFormData('github', e.target.value)}
          error={errors.github?.message}
        />
        <FormField
          label="LinkedIn Profile"
          name="linkedin"
          type="url"
          required
          value={formData.linkedin}
          onChange={(e) => updateFormData('linkedin', e.target.value)}
          error={errors.linkedin?.message}
        />
      </div>

      <TechStackInput
        value={formData.techstack || []}
        onChange={(value) => updateFormData('techstack', value)}
      />

      <div className="space-y-4">
        <div className="flex items-center space-x-2 p-4 bg-primary-50 rounded-lg border border-primary-200">
          <input
            type="checkbox"
            id="relocatable"
            checked={formData.relocatable}
            onChange={(e) => updateFormData('relocatable', e.target.checked)}
            className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
          />
          <label htmlFor="relocatable" className="text-sm text-gray-700">
            I am willing to relocate to Bangalore and join our dynamic team
          </label>
        </div>

        <div className="flex items-center space-x-2 p-4 bg-primary-50 rounded-lg border border-primary-200">
          <input
            type="checkbox"
            id="agreeOnTakeTest"
            checked={formData.agreeOnTakeTest}
            onChange={(e) => updateFormData('agreeOnTakeTest', e.target.checked)}
            className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
          />
          <label htmlFor="agreeOnTakeTest" className="text-sm text-gray-700">
            I agree to take a take-home task to showcase my skills and determination
          </label>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="form-section">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
          <Target className="w-6 h-6 text-primary-600" />
        </div>
        <h3 className="form-title">Your Skills & Experience</h3>
        <p className="form-subtitle">
          Show us your expertise and how you can contribute to our whirlwind of innovation.
        </p>
      </div>

      <ExperienceSlider
        label="Performance & Optimization Rating"
        value={formData.rateOptimization || 5}
        onChange={(value) => updateFormData('rateOptimization', value)}
        max={10}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ExperienceSlider
          label="React"
          value={formData.react || 0}
          onChange={(value) => updateFormData('react', value)}
        />
        <ExperienceSlider
          label="TypeScript"
          value={formData.typescript || 0}
          onChange={(value) => updateFormData('typescript', value)}
        />
        <ExperienceSlider
          label="Next.js"
          value={formData.next || 0}
          onChange={(value) => updateFormData('next', value)}
        />
        <ExperienceSlider
          label="Sass/SCSS"
          value={formData.sass || 0}
          onChange={(value) => updateFormData('sass', value)}
        />
        <ExperienceSlider
          label="Figma"
          value={formData.figma || 0}
          onChange={(value) => updateFormData('figma', value)}
        />
        <ExperienceSlider
          label="Semantic HTML"
          value={formData.semanticHtml || 0}
          onChange={(value) => updateFormData('semanticHtml', value)}
        />
        <ExperienceSlider
          label="Storybook"
          value={formData.storybook || 0}
          onChange={(value) => updateFormData('storybook', value)}
        />
        <ExperienceSlider
          label="SEO"
          value={formData.seo || 0}
          onChange={(value) => updateFormData('seo', value)}
        />
        <ExperienceSlider
          label="Lottie"
          value={formData.lottie || 0}
          onChange={(value) => updateFormData('lottie', value)}
        />
        <ExperienceSlider
          label="Mobile Development"
          value={formData.mobileDevelopment || 0}
          onChange={(value) => updateFormData('mobileDevelopment', value)}
        />
        <ExperienceSlider
          label="Express.js"
          value={formData.express || 0}
          onChange={(value) => updateFormData('express', value)}
        />
        <ExperienceSlider
          label="Swagger"
          value={formData.swagger || 0}
          onChange={(value) => updateFormData('swagger', value)}
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="form-section">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
          <Zap className="w-6 h-6 text-primary-600" />
        </div>
        <h3 className="form-title">Your Vision & Motivation</h3>
        <p className="form-subtitle">
          Share your dreams and let us understand how we can grow together in this whirlwind journey.
        </p>
      </div>

      <FormField
        label="Lifetime Goal"
        name="goal"
        type="textarea"
        required
        value={formData.goal}
        onChange={(e) => updateFormData('goal', e.target.value)}
        error={errors.goal?.message}
        placeholder="What is your lifetime goal? How do you want to make a difference in the world?"
      />

      <FormField
        label="What do you want to achieve with us?"
        name="achievement"
        type="textarea"
        required
        value={formData.achievement}
        onChange={(e) => updateFormData('achievement', e.target.value)}
        error={errors.achievement?.message}
        placeholder="What do you want to achieve or learn from us? How can we help you grow?"
      />

      <FormField
        label="Why Willeder?"
        name="why"
        type="textarea"
        required
        value={formData.why}
        onChange={(e) => updateFormData('why', e.target.value)}
        error={errors.why?.message}
        placeholder="What do you think of our motto 'Where your Dreams Soar'? Why do you choose Willeder?"
      />

      <FormField
        label="Reason for Job Change"
        name="reason"
        type="textarea"
        required
        value={formData.reason}
        onChange={(e) => updateFormData('reason', e.target.value)}
        error={errors.reason?.message}
        placeholder="What's your reason for looking for a new opportunity? What are you seeking?"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField
          label="Current Salary (LPA)"
          name="currentSalary"
          type="number"
          min={0}
          step={0.1}
          required
          value={formData.currentSalary}
          onChange={(e) => updateFormData('currentSalary', Number(e.target.value))}
          error={errors.currentSalary?.message}
        />
        <FormField
          label="Expected Salary (LPA)"
          name="expectedSalary"
          type="number"
          min={0}
          step={0.1}
          required
          value={formData.expectedSalary}
          onChange={(e) => updateFormData('expectedSalary', Number(e.target.value))}
          error={errors.expectedSalary?.message}
        />
        <FormField
          label="Notice Period (Days)"
          name="noticePeriod"
          type="number"
          min={0}
          required
          value={formData.noticePeriod}
          onChange={(e) => updateFormData('noticePeriod', Number(e.target.value))}
          error={errors.noticePeriod?.message}
        />
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="form-section text-center">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 pulse-success" />
      <h3 className="form-title text-green-600">Welcome to the Willeder Family! 🚀</h3>
      <p className="text-gray-600 mb-6">
        Thank you for your interest in joining our whirlwind of innovation. Your application has been submitted successfully, 
        and we're excited to review your profile. We'll get back to you soon with next steps on your journey to soar with us!
      </p>
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-primary-800 mb-2">What's Next?</h4>
        <ul className="text-sm text-primary-700 space-y-1 text-left">
          <li>• We'll review your application within 48 hours</li>
          <li>• If selected, you'll receive a take-home task to showcase your skills</li>
          <li>• Successful candidates will be invited for technical discussions</li>
          <li>• Join our whirlwind and start creating amazing digital experiences!</li>
        </ul>
      </div>
      <button
        onClick={() => window.location.reload()}
        className="btn-primary"
      >
        Submit Another Application
      </button>
    </div>
  );

  const renderStepIndicator = () => (
    <div className="flex justify-center mb-8">
      <div className="flex space-x-2">
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step <= currentStep
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );

  if (currentStep === 4) {
    return renderSuccess();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto">
      {renderStepIndicator()}
      
      {currentStep === 1 && renderStep1()}
      {currentStep === 2 && renderStep2()}
      {currentStep === 3 && renderStep3()}

      <div className="flex justify-between">
        {currentStep > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="btn-secondary"
          >
            Previous
          </button>
        )}
        
        {currentStep < 3 ? (
          <button
            type="button"
            onClick={nextStep}
            className="btn-primary ml-auto"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary ml-auto flex items-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Application</span>
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
};

export default JobApplicationForm;
