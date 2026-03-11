import React from 'react';

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
      <p>© 2026 AI Code Reviewer. Powered by DeepSeek Chat.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a>
        <a href="#" className="hover:text-indigo-400 transition-colors">Terms</a>
        <a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a>
      </div>
    </footer>
  );
};

export default Footer;
