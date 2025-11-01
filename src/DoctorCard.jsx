import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const DoctorCard = ({ doctor }) => {
  const { language, colors } = useTheme();

  return (
    <div className="rounded-lg p-6 text-center shadow-md transition-shadow duration-300 hover:shadow-xl" style={{ backgroundColor: colors.background, border: `1px solid ${colors.text}` }}>
      <img src={doctor.photo} alt={doctor.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4" />
      <h3 className="text-xl font-bold" style={{ color: colors.primary }}>{doctor.name}</h3>
      <p>{doctor.specialty}</p>
      <p>{doctor.location}</p>
      <Link to={`/doctor/${doctor.id}`}>
        <button className="mt-4 px-4 py-2 rounded-md text-white" style={{ backgroundColor: colors.primary }}>
          {language === 'en' ? 'View Profile' : 'عرض الملف الشخصي'}
        </button>
      </Link>
    </div>
  );
};

export default DoctorCard;
