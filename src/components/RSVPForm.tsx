'use client';

import { useState, useTransition } from 'react';
import { submitRSVP } from '../app/actions';

interface RSVPFormProps {
  variant?: 'hero' | 'footer';
}

export default function RSVPForm({ variant = 'hero' }: RSVPFormProps) {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    startTransition(async () => {
      const result = await submitRSVP(formData);
      setMessage({
        type: result.success ? 'success' : 'error',
        text: result.message,
      });
      if (result.success) {
        setEmail('');
      }
    });
  };

  const isFooterVariant = variant === 'footer';

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex gap-0">
        {/* Email Input - Size: 606x81 */}
        <div 
          className={`relative w-[606px] h-[81px] rounded-[8px] border border-solid border-[rgba(0,0,0,0.29)] ${
            isFooterVariant 
              ? 'bg-[rgba(231,231,231,0.9)]' 
              : 'bg-[rgba(231,231,231,0.2)]'
          }`}
        >
          {/* Email Icon - Position: left:24px, centered vertically */}
          <div className="absolute left-[24px] top-1/2 -translate-y-1/2">
            <svg width="33" height="26" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M3.66667 0.5C1.82572 0.5 0.333336 1.99239 0.333336 3.83333V22.1667C0.333336 24.0076 1.82572 25.5 3.66667 25.5H29.3333C31.1743 25.5 32.6667 24.0076 32.6667 22.1667V3.83333C32.6667 1.99239 31.1743 0.5 29.3333 0.5H3.66667ZM3.66667 3.83333H29.3333V5.52604L16.5 13.6927L3.66667 5.52604V3.83333ZM3.66667 8.85937L16.5 17L29.3333 8.85937V22.1667H3.66667V8.85937Z" 
                fill={isFooterVariant ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.4)'}
              />
            </svg>
          </div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work email to confirm your attendance"
            required
            disabled={isPending}
            className={`w-full h-full pl-[79px] pr-4 text-[20px] bg-transparent outline-none font-normal ${
              isFooterVariant 
                ? 'text-[rgba(0,0,0,0.7)] placeholder:text-[rgba(0,0,0,0.7)]' 
                : 'text-[rgba(0,0,0,0.7)] placeholder:text-[rgba(0,0,0,0.4)]'
            }`}
          />
        </div>
        
        {/* Submit Button - Size: 251x81, Position: starts at 720px from section left */}
        <button
          type="submit"
          disabled={isPending}
          className="w-[251px] h-[81px] bg-gradient-to-r from-[rgba(245,171,64,0.9)] to-[#f5ab40] text-white font-bold text-[29px] rounded-[8px] hover:opacity-90 transition-opacity disabled:opacity-70 ml-[13px]"
        >
          {isPending ? 'Submitting...' : 'RSVP Now'}
        </button>
      </div>
      
      {/* Message Display */}
      {message && (
        <div className={`mt-4 p-4 rounded-lg text-base ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {message.text}
        </div>
      )}
    </form>
  );
}
