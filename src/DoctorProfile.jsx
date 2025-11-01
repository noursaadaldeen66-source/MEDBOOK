import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from './ThemeContext.jsx';
import doctors from './doctors.json';
import BookingConfirmationModal from './BookingConfirmationModal.jsx';
import SuccessModal from './SuccessModal.jsx';

const DoctorProfile = () => {
  const { id } = useParams();
  const { language, colors, fonts } = useTheme();
  const doctor = doctors.find((d) => d.id === parseInt(id));

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  if (!doctor) {
    return <div>{language === 'en' ? 'Doctor not found' : 'لم يتم العثور على الطبيب'}</div>;
  }

  const handleConfirmClick = () => {
    if (selectedDate && selectedTime) {
      setShowConfirmModal(true);
    } else {
      alert(language === 'en' ? 'Please select a date and time.' : 'الرجاء اختيار التاريخ والوقت.');
    }
  };

  const handleFinalize = () => {
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-1">
          <img src={doctor.photo} alt={doctor.name} className="w-48 h-48 rounded-full object-cover mx-auto" />
          <div className="text-center mt-4">
            <h1 className="text-3xl font-bold" style={{ fontFamily: fonts.heading, color: colors.primary }}>{doctor.name}</h1>
            <p className="text-xl">{doctor.specialty}</p>
            <p className="text-lg">{doctor.location}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: fonts.heading }}>Bio</h2>
            <p>{doctor.bio}</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: fonts.heading }}>
            {language === 'en' ? 'Book an Appointment' : 'احجز موعدًا'}
          </h2>
          <div>
            <h3 className="text-xl font-bold mb-2">
              {language === 'en' ? 'Select a Date' : 'اختر التاريخ'}
            </h3>
            <div className="flex gap-4 mb-4 flex-wrap">
              {doctor.availableSlots.map((slot) => (
                <button
                  key={slot.date}
                  onClick={() => {
                    setSelectedDate(slot.date);
                    setSelectedTime(null);
                  }}
                  className={`p-2 rounded-md ${selectedDate === slot.date ? `bg-[${colors.primary}] text-white` : `bg-[${colors.background}] border-[${colors.text}] border`}`}
                >
                  {slot.date}
                </button>
              ))}
            </div>

            {selectedDate && (
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {language === 'en' ? 'Select a Time' : 'اختر الوقت'}
                </h3>
                <div className="flex gap-4 flex-wrap">
                  {doctor.availableSlots.find((s) => s.date === selectedDate)?.times.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 rounded-md ${selectedTime === time ? `bg-[${colors.primary}] text-white` : `bg-[${colors.background}] border-[${colors.text}] border`}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={handleConfirmClick}
              className="mt-8 px-6 py-3 rounded-md text-white text-lg"
              style={{ backgroundColor: colors.primary, opacity: (!selectedDate || !selectedTime) ? 0.5 : 1 }}
              disabled={!selectedDate || !selectedTime}
            >
              {language === 'en' ? 'Confirm Appointment' : 'تأكيد الموعد'}
            </button>
          </div>
        </div>
      </div>

      {showConfirmModal && (
        <BookingConfirmationModal
          doctor={doctor}
          date={selectedDate}
          time={selectedTime}
          onFinalize={handleFinalize}
          onClose={() => setShowConfirmModal(false)}
        />
      )}

      {showSuccessModal && (
        <SuccessModal onClose={() => setShowSuccessModal(false)} />
      )}
    </div>
  );
};

export default DoctorProfile;
