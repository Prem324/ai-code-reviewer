import React from 'react';
import Editor from '@monaco-editor/react';
import { Terminal, Copy, Save, Zap } from 'lucide-react';

const CodeEditor = ({ code, setCode, language, handleReview, loading }) => {
  const downloadCode = () => {
    const element = document.createElement("a");
    const file = new Blob([code], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    const extension = language === 'python' ? 'py' : language === 'cpp' ? 'cpp' : language === 'java' ? 'java' : 'js';
    element.download = `code_review.${extension}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-indigo-400">
          <Terminal size={18} />
          <span className="font-bold uppercase tracking-wider text-xs">Source Code</span>
        </div>
        <div className="flex gap-2">
          <button 
            className="p-2 rounded-lg hover:bg-white/5 transition-colors text-slate-400" 
            title="Copy Code"
            onClick={() => {
              navigator.clipboard.writeText(code);
              alert('Code copied to clipboard!');
            }}
          >
            <Copy size={16} />
          </button>
          <button 
            className="p-2 rounded-lg hover:bg-white/5 transition-colors text-slate-400" 
            title="Save File"
            onClick={downloadCode}
          >
            <Save size={16} />
          </button>
        </div>
      </div>
      
      <div className="glass-card rounded-2xl overflow-hidden h-[450px] md:h-[500px] lg:h-[600px] border border-white/10 relative group">
        <Editor
          height="100%"
          language={language}
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value)}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            lineNumbers: 'on',
            roundedSelection: true,
            padding: { top: 20 },
            backgroundColor: 'transparent',
            scrollbar: {
              vertical: 'hidden',
              horizontal: 'hidden'
            }
          }}
        />
        
        <div className="absolute bottom-6 right-6">
          <button
            onClick={handleReview}
            disabled={loading}
            className={`btn-primary gap-3 group px-8 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Zap size={18} className="fill-current" />
                <span>Run Review</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CodeEditor;
