import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const SuccessModal = ({ onClose }) => {
  const { language, colors, fonts } = useTheme();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="p-8 rounded-lg text-center w-11/12 md:w-1/3" style={{ backgroundColor: colors.background }}>
        <div className="text-6xl mb-4" style={{ color: colors.primary }}>
          &#10004; {/* Checkmark icon */}
        </div>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: fonts.heading }}>
          {language === 'en' ? 'Appointment Confirmed!' : '.تم تأكيد الموعد'}
        </h2>
        <div className="mt-6 flex justify-center gap-4">
          <button onClick={onClose} className="px-4 py-2 rounded-md" style={{ border: `1px solid ${colors.text}` }}>
            {language === 'en' ? 'View My Appointments' : 'عرض مواعيدي'}
          </button>
          <Link to="/">
            <button className="px-4 py-2 rounded-md text-white" style={{ backgroundColor: colors.primary }}>
              {language === 'en' ? 'Back to Homepage' : 'العودة إلى الصفحة الرئيسية'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
