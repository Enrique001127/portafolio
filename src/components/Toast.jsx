import { useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { DEFAULT_TOAST_DURATION_MS } from '../data/portfolio';
import { useApp } from '../hooks/useApp';

const Toast = ({ message, type, onClose, duration = DEFAULT_TOAST_DURATION_MS }) => {
  const { translate } = useApp();

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-slide-in sm:left-auto">
      <div
        role={type === 'error' ? 'alert' : 'status'}
        aria-live={type === 'error' ? 'assertive' : 'polite'}
        aria-atomic="true"
        className={`flex w-full items-center space-x-3 rounded-lg px-5 py-4 shadow-lg sm:max-w-sm ${
        type === 'success'
          ? 'bg-green-700 text-white'
          : 'bg-red-700 text-white'
      }`}
      >
        <div className="flex-shrink-0">
          {type === 'success' ? (
            <Check className="h-5 w-5" aria-hidden="true" />
          ) : (
            <X className="h-5 w-5" aria-hidden="true" />
          )}
        </div>
        <p className="text-sm font-medium">{message}</p>
        <button
          type="button"
          onClick={onClose}
          aria-label={translate('aria.closeNotification')}
          className="flex-shrink-0 ml-4 text-white hover:text-gray-200 transition-colors"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
