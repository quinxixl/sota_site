import './index.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage'; // убедитесь, что пути правильные
import Application from './pages/Application'; // убедитесь, что пути правильные

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/application" element={<Application />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;