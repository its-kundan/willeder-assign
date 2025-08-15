import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'number' | 'tel' | 'url' | 'textarea';
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  min?: number;
  max?: number;
  step?: number;
  rows?: number;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  error,
  value,
  onChange,
  min,
  max,
  step,
  rows = 4,
  className = '',
}) => {
  const inputId = `field-${name}`;

  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          id={inputId}
          name={name}
          rows={rows}
          placeholder={placeholder}
          required={required}
          value={value as string}
          onChange={onChange}
          className={`input-field ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
        />
      ) : (
        <input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          className={`input-field ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
        />
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default FormField;
