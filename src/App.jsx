import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import Heading from './components/Heading';
import LightModeDarkMode from './components/LightModeDarkMode';
import TextSizeChanger from './components/TextSizeChanger';

function App() {
  return (
    <Router> {/* Wrap everything inside <Router> */}
      <Heading /> 
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />  
        <Route path="/counter" element={<Counter />} /> 
        <Route path="/lightmodedarkmode" element={<LightModeDarkMode/> } />
        <Route path="/textsizechanager" element={<TextSizeChanger />} />
      </Routes>
    </Router>
  );
}

export default App;
