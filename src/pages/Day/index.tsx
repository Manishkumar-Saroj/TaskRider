import { useState } from 'react';

function Day() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-4">
      {/* Header with glass effect */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-purple-500/20 to-pink-500/20 blur-2xl" />
        <div className="relative bg-gray-100/10 backdrop-blur-xl rounded-2xl p-4 border border-gray-100/20">
          <h1 className="text-2xl font-semibold text-yellow-300">Day View</h1>
          <div className="flex justify-between items-center mt-4">
            <button 
              className="p-2 hover:bg-gray-900/50 rounded-lg transition-all duration-300 hover:-translate-y-1"
              onClick={() => setSelectedDate(prev => {
                const newDate = new Date(prev);
                newDate.setDate(prev.getDate() - 1);
                return newDate;
              })}
            >
              Previous
            </button>
            <span className="text-lg">
              {selectedDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <button 
              className="p-2 hover:bg-gray-900/50 rounded-lg transition-all duration-300 hover:-translate-y-1"
              onClick={() => setSelectedDate(prev => {
                const newDate = new Date(prev);
                newDate.setDate(prev.getDate() + 1);
                return newDate;
              })}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Content with glass effect */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-yellow-500/20 to-purple-500/20 blur-xl" />
        <div className="relative bg-gray-100/10 backdrop-blur-xl rounded-2xl p-4 border border-gray-100/20">
          {/* Add your calendar content here */}
          <div className="space-y-4">
            {Array.from({ length: 24 }, (_, i) => (
              <div 
                key={i} 
                className="flex items-center p-3 rounded-xl hover:bg-gray-900/50 transition-all duration-300 group"
              >
                <span className="w-16 text-yellow-300 group-hover:scale-110 transition-transform">
                  {i.toString().padStart(2, '0')}:00
                </span>
                <div className="flex-1 ml-4 min-h-[2rem] rounded-lg border border-gray-100/10 hover:border-yellow-500/30 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day;