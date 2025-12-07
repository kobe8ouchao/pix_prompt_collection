import React, { useEffect } from 'react';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-up">
      <div className="bg-pantone-800 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3 backdrop-blur-md bg-opacity-90">
        <div className="bg-green-500 rounded-full p-1">
            <Check size={14} strokeWidth={3} className="text-white" />
        </div>
        <span className="font-medium text-sm">{message}</span>
      </div>
    </div>
  );
};

export default Toast;