import { Route, Routes, Navigate } from 'react-router';
import './App.css';
import Homepage from './Homepage';
import Welcome from './Welcome';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Navigate to="/welcome" />} />
        <Route path="/welcome/*" element={<Welcome />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Layout>
  );
};
export default App;
