import React from 'react';
import { useTheme } from './ThemeContext';

const BookingConfirmationModal = ({ doctor, date, time, onFinalize, onClose }) => {
  const { language, colors, fonts } = useTheme();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="p-8 rounded-lg w-11/12 md:w-1/3" style={{ backgroundColor: colors.background }}>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: fonts.heading }}>
          {language === 'en' ? 'Confirm Your Appointment' : 'تأكيد موعدك'}
        </h2>
        <p><strong className="font-bold">{language === 'en' ? 'Doctor:' : 'الطبيب:'}</strong> {doctor.name}</p>
        <p><strong className="font-bold">{language === 'en' ? 'Date:' : 'التاريخ:'}</strong> {date}</p>
        <p><strong className="font-bold">{language === 'en' ? 'Time:' : 'الوقت:'}</strong> {time}</p>
        <div className="mt-6 flex justify-end gap-4">
          <button onClick={onClose} className="px-4 py-2 rounded-md" style={{ border: `1px solid ${colors.text}` }}>
            {language === 'en' ? 'Cancel' : 'إلغاء'}
          </button>
          <button onClick={onFinalize} className="px-4 py-2 rounded-md text-white" style={{ backgroundColor: colors.primary }}>
            {language === 'en' ? 'Finalize Booking' : 'إنهاء الحجز'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationModal;
