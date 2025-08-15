import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface TechStackInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  error?: string;
}

const TechStackInput: React.FC<TechStackInputProps> = ({ value, onChange, error }) => {
  const [newTech, setNewTech] = useState('');

  const addTech = () => {
    if (newTech.trim() && !value.includes(newTech.trim())) {
      onChange([...value, newTech.trim()]);
      setNewTech('');
    }
  };

  const removeTech = (index: number) => {
    onChange(value.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTech();
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Tech Stack (Optional)
      </label>
      
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          value={newTech}
          onChange={(e) => setNewTech(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a technology..."
          className="input-field flex-1"
        />
        <button
          type="button"
          onClick={addTech}
          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-lg transition-colors duration-200"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {value.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
            >
              {tech}
              <button
                type="button"
                onClick={() => removeTech(index)}
                className="text-primary-600 hover:text-primary-800"
              >
                <X className="w-4 h-4" />
              </button>
            </span>
          ))}
        </div>
      )}

      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default TechStackInput;
