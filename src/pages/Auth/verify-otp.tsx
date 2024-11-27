import { useState, useRef, KeyboardEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function VerifyOTP() {
  const navigate = useNavigate();
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const [timer, setTimer] = useState(120); // 120 seconds = 2 minutes
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timer]);

  const handleResendOTP = async () => {
    try {
      // Here you would make an API call to resend OTP
      const resendSuccessful = true; // Replace with actual API call

      if (resendSuccessful) {
        // Reset timer and disable resend button
        setTimer(120);
        setCanResend(false);
        alert('OTP has been resent to your email');
      }
    } catch (error) {
      console.error('Resend OTP error:', error);
      alert('Failed to resend OTP. Please try again.');
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Move to next input if value is entered
    if (value !== '' && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && index > 0 && otpValues[index] === '') {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otp = otpValues.join('');
    
    try {
      if (otp.length !== 6) {
        alert('Please enter a valid 6-digit OTP');
        return;
      }

      // Here you would verify the OTP with your API
      const otpVerified = true; // Replace with actual API call

      if (otpVerified) {
        navigate('/reset-password');
      }
    } catch (error) {
      console.error('OTP verification error:', error);
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="min-h-screen px-4 py-6 sm:p-6 bg-zinc-900 overflow-hidden">
      <div className="relative max-w-3xl lg:max-w-xl mx-auto">
        <div className="relative bg-gray-100/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-gray-100/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 text-center mb-8">Enter OTP</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6 text-gray-300">
            <div className="group">
              <label className="block text-lg font-semibold text-yellow-400 mb-4 text-center">
                Enter 6-Digit OTP
              </label>
              <div className="flex justify-center gap-2 sm:gap-4">
                {otpValues.map((value, index) => (
                  <input
                    key={index}
                    ref={inputRefs[index]}
                    type="text"
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold 
                      bg-gray-100/10 backdrop-blur-md border border-gray-100/20 rounded-xl
                      text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 
                      transition-all duration-300"
                  />
                ))}
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-3 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600
                hover:from-yellow-400 hover:to-yellow-500 text-gray-900 font-semibold rounded-xl
                transition-all duration-300"
            >
              Verify OTP
            </button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <div className="text-sm text-gray-400">
              {timer > 0 ? (
                <span>Resend OTP in {formatTime(timer)}</span>
              ) : (
                <button 
                  onClick={handleResendOTP}
                  className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300"
                >
                  Resend OTP
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyOTP;