import React from 'react';
import { useTheme } from './ThemeContext';

const AppHeader = () => {
  const { language, toggleTheme, toggleLanguage, colors, fonts, theme } = useTheme();

  return (
    <header className={`p-4 flex flex-col md:flex-row justify-between items-center border-b`} style={{ backgroundColor: colors.background, borderColor: colors.text }}>
      <div className="text-2xl font-bold" style={{ fontFamily: fonts.heading }}>
        MedBook
      </div>
      <div className="flex-grow mx-4 my-2 md:my-0">
        <input
          type="text"
          placeholder={language === 'en' ? 'Search doctors or specialty...' : 'ابحث عن الأطباء أو التخصص...'}
          className="w-full p-2 rounded border"
          style={{
            backgroundColor: colors.background,
            color: colors.text,
            borderColor: colors.text
          }}
        />
      </div>
      <div className="flex gap-4">
        <button onClick={toggleLanguage} className="bg-transparent border-none text-lg cursor-pointer" style={{ color: colors.text }}>
          {language === 'en' ? 'العربية' : 'English'}
        </button>
        <button onClick={toggleTheme} className="bg-transparent border-none text-lg cursor-pointer" style={{ color: colors.text }}>
          {theme === 'Light' ? (language === 'en' ? 'Dark Mode' : 'الوضع الداكن') : (language === 'en' ? 'Light Mode' : 'الوضع الفاتح')}
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
