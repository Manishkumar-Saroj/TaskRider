import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface RadioSelectPopupProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
}

export function RadioSelectPopup({ options, value, onChange, placeholder, label }: RadioSelectPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(option => option.value === value);

  return (
    <div className="group">
      <label className="block text-lg font-semibold text-yellow-400 mb-2
        transition-all duration-300 group-hover:-translate-y-0.5">
        {label}
      </label>
      
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full px-4 py-3 
          bg-gray-100/10 backdrop-blur-md
          border border-gray-100/20
          rounded-xl
          text-left
          text-gray-100
          focus:outline-none focus:ring-2 focus:ring-yellow-400/50
          transition-all duration-300"
      >
        <span className={selectedOption ? 'text-gray-100' : 'text-gray-300/50'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          <div className="relative 
            bg-zinc-900/95 backdrop-blur-xl
            rounded-3xl p-6
            border border-gray-100/20
            shadow-xl
            w-full max-w-md
            transform transition-all duration-200
            scale-100 opacity-100">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-100">{label}</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Radio Options */}
            <div className="space-y-2">
              {options.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center p-3 rounded-xl cursor-pointer
                    transition-all duration-200
                    ${value === option.value 
                      ? 'bg-yellow-500/20 border-yellow-400/50' 
                      : 'hover:bg-gray-100/5 border-transparent'}
                    border-2`}
                >
                  <input
                    type="radio"
                    name={label}
                    value={option.value}
                    checked={value === option.value}
                    onChange={() => {
                      onChange(option.value);
                      setIsOpen(false);
                    }}
                    className="hidden"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center
                    transition-all duration-200
                    ${value === option.value 
                      ? 'border-yellow-400' 
                      : 'border-gray-400'}`}
                  >
                    {value === option.value && (
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    )}
                  </div>
                  <span className="text-gray-100">{option.label}</span>
                </label>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg
                  text-gray-300 hover:text-gray-100
                  transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg
                  bg-gradient-to-r from-yellow-500 to-yellow-600
                  hover:from-yellow-400 hover:to-yellow-500
                  text-gray-900 font-semibold
                  transition-all duration-300"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}