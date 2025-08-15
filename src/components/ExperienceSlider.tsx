import React from 'react';

interface ExperienceSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  error?: string;
}

const ExperienceSlider: React.FC<ExperienceSliderProps> = ({
  label,
  value,
  onChange,
  min = 0,
  max = 10,
  step = 1,
  error,
}) => {
  const getExperienceLabel = (years: number): string => {
    if (years === 0) return 'No experience';
    if (years <= 1) return 'Beginner';
    if (years <= 3) return 'Intermediate';
    if (years <= 5) return 'Advanced';
    return 'Expert';
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <span className="text-sm text-gray-500">
          {value} year{value !== 1 ? 's' : ''} ({getExperienceLabel(value)})
        </span>
      </div>
      
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(value / max) * 100}%, #e5e7eb ${(value / max) * 100}%, #e5e7eb 100%)`
          }}
        />
        
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{min}</span>
          <span>{Math.round(max / 2)}</span>
          <span>{max}</span>
        </div>
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default ExperienceSlider;
