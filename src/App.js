import { Route, Routes, Navigate } from 'react-router';
import './App.css';
import Homepage from './Homepage';
import Welcome from './Welcome';
import Layout from './components/Layout/Layout';
import { AuthContextProvider } from './context/AuthContext';

const App = () => {
  return (
    <Layout>
      <AuthContextProvider>
        <Routes>
          <Route path="/" exact element={<Navigate to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </AuthContextProvider>
    </Layout>
  );
};
export default App;
