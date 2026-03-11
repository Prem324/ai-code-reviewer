import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, AlertCircle, CheckCircle2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const FeedbackSection = ({ feedback, loading, error, handleReview }) => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-2 mb-2 text-pink-500">
        <Zap size={18} />
        <span className="font-bold uppercase tracking-wider text-xs">AI Insights</span>
      </div>

      <div className="glass-card rounded-2xl h-[500px] lg:h-[600px] overflow-hidden flex flex-col border border-white/10">
        <div className="h-full overflow-y-auto p-5 lg:p-8">
          <AnimatePresence mode="wait">
            {feedback ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="prose prose-invert max-w-none"
              >
                <ReactMarkdown
                  components={{
                    h1: ({ node, ...props }) => <h1 className="text-2xl font-bold mb-4 text-white" {...props} />,
                    h2: ({ node, ...props }) => <h2 className="text-xl font-bold mt-8 mb-4 text-indigo-300" {...props} />,
                    h3: ({ node, ...props }) => <h3 className="text-lg font-bold mt-6 mb-2 text-indigo-200" {...props} />,
                    p: ({ node, ...props }) => <p className="text-slate-300 mb-4 leading-relaxed" {...props} />,
                    li: ({ node, ...props }) => <li className="text-slate-300 mb-2 list-disc ml-4" {...props} />,
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || '')
                      return !inline ? (
                        <div className="my-6 rounded-xl overflow-hidden border border-white/10">
                          <div className="bg-white/5 px-4 py-2 border-b border-white/10 text-xs font-mono text-slate-500">
                            {match ? match[1] : 'code'}
                          </div>
                          <pre className="p-4 bg-[#0d0d0e] overflow-x-auto m-0">
                            <code className="text-emerald-400 font-mono text-sm" {...props}>
                              {children}
                            </code>
                          </pre>
                        </div>
                      ) : (
                        <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-400" {...props}>
                          {children}
                        </code>
                      )
                    }
                  }}
                >
                  {feedback}
                </ReactMarkdown>
              </motion.div>
            ) : loading ? (
              <div className="h-full flex flex-col items-center justify-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-indigo-500/20 rounded-full" />
                  <div className="absolute top-0 left-0 w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                </div>
                <p className="text-slate-400 animate-pulse">DeepSeek is analyzing your code...</p>
              </div>
            ) : error ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-6"
              >
                <AlertCircle size={48} className="text-rose-500 mb-4" />
                <p className="text-rose-400 font-medium">{error}</p>
                <button 
                  onClick={handleReview}
                  className="mt-4 text-indigo-400 hover:text-indigo-300 text-sm font-semibold"
                >
                  Try Again
                </button>
              </motion.div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                <CheckCircle2 size={64} className="mb-6 stroke-[1px]" />
                <h3 className="text-xl font-medium mb-2 text-white">Ready for Review</h3>
                <p className="max-w-[280px] text-sm">Paste your code and click "Run Review" to get expert feedback.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
