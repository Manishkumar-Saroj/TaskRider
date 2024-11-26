function PrivacyPolicy() {
  return (
    <div className="min-h-screen px-4 py-6 sm:p-6 bg-zinc-900">
      <div className="relative max-w-3xl lg:max-w-xl mx-auto">
        {/* Glow effects - removed animate-pulse and adjusted opacity */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-yellow-500/10 to-purple-500/10 blur-2xl rounded-full" />
        
        {/* Main container */}
        <div className="relative 
          bg-gray-100/10 backdrop-blur-xl 
          rounded-3xl p-6 sm:p-8
          border border-gray-100/20
          shadow-[inset_0_0_20px_rgba(243,244,246,0.05)]">
          
          {/* Header with back button */}
          <div className="flex items-center mb-8">
            <button 
              onClick={() => window.history.back()} 
              className="absolute left-6 group"
            >
              <div className="absolute inset-0 bg-gray-100/10 backdrop-blur-md rounded-full -m-2" />
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 relative text-gray-300 group-hover:text-yellow-400 transition-colors" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
            </button>
            <h1 className="flex-1 text-2xl sm:text-3xl font-bold text-gray-100 text-center">
              Privacy Policy
            </h1>
          </div>

          {/* Content sections */}
          <div className="space-y-6 text-gray-300">
            <Section title="Information We Collect">
              We collect information that you provide directly to us, including but not limited to your name,
              email address, and any other information you choose to provide.
            </Section>

            <Section title="How We Use Your Information">
              We use the information we collect to provide, maintain, and improve our services,
              to communicate with you, and to comply with legal obligations.
            </Section>

            <Section title="Information Sharing">
              We do not sell, trade, or otherwise transfer your personally identifiable information
              to third parties without your consent.
            </Section>

            <Section title="Data Security">
              We implement appropriate technical and organizational measures to protect your personal data
              against unauthorized or unlawful processing, accidental loss, or destruction.
            </Section>
          </div>

          {/* Last updated */}
          <div className="mt-8 pt-6 border-t border-gray-100/20 text-center">
            <p className="text-sm text-gray-400">Last updated: November 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for sections
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="group">
      <h2 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-2 
        transition-all duration-300 group-hover:-translate-y-0.5">{title}</h2>
      <p className="text-sm sm:text-base leading-relaxed 
        transition-all duration-300 group-hover:translate-x-1">{children}</p>
    </div>
  );
}

export default PrivacyPolicy;