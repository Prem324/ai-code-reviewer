import React from 'react';
import { Code2 } from 'lucide-react';
import { LANGUAGES } from '../constants/languages';

const Header = ({ language, setLanguage }) => {
  return (
    <header className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-500/30 animate-float">
          <Code2 size={32} className="text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-black bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent font-['Outfit']">
            AI Code Reviewer
          </h1>
          <p className="text-slate-400 font-medium">Elevate your code quality with AI-powered insights</p>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-sm">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.value}
            onClick={() => setLanguage(lang.value)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              language === lang.value
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
