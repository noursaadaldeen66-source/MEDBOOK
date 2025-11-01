import { useState } from 'react';
import { useTheme } from './ThemeContext.jsx';
import DoctorCard from './DoctorCard.jsx';
import doctors from './doctors.json';

const Homepage = () => {
  const { language, colors, fonts } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="homepage">
      <section className="p-16 text-center text-white" style={{ backgroundColor: colors.primary }}>
        <h1 className="text-5xl" style={{ fontFamily: fonts.heading }}>
          {language === 'en' ? 'Find Your Specialist...' : 'ابحث عن طبيبك المختص...'}
        </h1>
        <div className="mt-4">
          <input
            type="text"
            placeholder={language === 'en' ? 'Search by name or specialty...' : '...ابحث بالاسم أو التخصص'}
            className="w-full md:w-1/2 p-2 rounded"
            style={{ color: '#000' }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-3xl text-center mb-8" style={{ fontFamily: fonts.heading }}>
          {language === 'en' ? 'Featured Doctors' : 'الأطباء المميزون'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
