import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './ThemeContext.jsx';
import AppHeader from './AppHeader.jsx';
import Homepage from './Homepage.jsx';
import DoctorProfile from './DoctorProfile.jsx';

function App() {
  const { colors, fonts } = useTheme();

  return (
    <Router>
      <div
        style={{
          backgroundColor: colors.background,
          color: colors.text,
          fontFamily: fonts.body,
          minHeight: '100vh'
        }}
      >
        <AppHeader />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
