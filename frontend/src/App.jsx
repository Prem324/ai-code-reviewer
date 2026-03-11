import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import CodeEditor from './components/CodeEditor';
import FeedbackSection from './components/FeedbackSection';
import Footer from './components/Footer';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [code, setCode] = useState('// Paste your code here...\nfunction helloWorld() {\n  console.log("Hello, world!");\n}');
  const [language, setLanguage] = useState('javascript');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleReview = async () => {
    if (!code.trim()) {
      setError('Please provide some code to review.');
      return;
    }

    setLoading(true);
    setFeedback('');
    setError('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || '/api';
      const response = await axios.post(`${apiUrl}/review`, {
        code,
        language,
      });
      setFeedback(response.data.feedback);
    } catch (err) {
      setError('Service is currently unavailable. Ensure the backend is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-slate-200">
      <SplashScreen show={showSplash} />

      <div className="px-4 py-8 lg:px-12">
        <Header language={language} setLanguage={setLanguage} />

        <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CodeEditor 
            code={code} 
            setCode={setCode} 
            language={language} 
            handleReview={handleReview} 
            loading={loading} 
          />
          
          <FeedbackSection 
            feedback={feedback} 
            loading={loading} 
            error={error} 
            handleReview={handleReview} 
          />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
