
import React, { useState, useEffect, useCallback } from 'react';
import { fixArabicText } from './services/rtlFixerService';

const CopyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

const ClearIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);


function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

  useEffect(() => {
    const fixedText = fixArabicText(inputText);
    setOutputText(fixedText);
  }, [inputText]);

  const handleCopy = useCallback(() => {
    if (outputText) {
      navigator.clipboard.writeText(outputText).then(() => {
        setCopyStatus('copied');
        setTimeout(() => setCopyStatus('idle'), 2000);
      });
    }
  }, [outputText]);

  const handleClear = () => {
    setInputText('');
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto max-w-7xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400">مصلح النصوص العربية</h1>
          <p className="text-lg text-gray-400 mt-2">حل مشكلة الحروف المقطعة والمعكوسة في برامج التصميم مثل Affinity</p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Panel */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col">
            <label htmlFor="input-text" className="text-xl font-bold mb-3 text-white">النص الأصلي</label>
            <textarea
              id="input-text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="الصق النص العربي هنا..."
              className="flex-grow w-full bg-gray-900 border-2 border-gray-700 rounded-lg p-4 text-lg text-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200 resize-none"
              rows={10}
            />
            <button
                onClick={handleClear}
                disabled={!inputText}
                className="mt-4 flex items-center justify-center bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-2.5 px-4 rounded-lg transition-colors duration-200"
              >
              مسح الكل
              <ClearIcon />
            </button>
          </div>

          {/* Output Panel */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col">
            <h2 className="text-xl font-bold mb-3 text-white">النص المُعَالَج (لبرامج التصميم)</h2>
            <div className="flex-grow w-full bg-gray-900 border-2 border-gray-700 rounded-lg p-4 text-lg text-gray-200 overflow-auto resize-none" style={{ minHeight: '260px' }}>
                <pre className="whitespace-pre-wrap break-words" style={{ direction: 'ltr' }}>{outputText || '...'}</pre>
            </div>
            <button
              onClick={handleCopy}
              disabled={!outputText}
              className={`mt-4 flex items-center justify-center w-full font-bold py-2.5 px-4 rounded-lg transition-colors duration-200 ${
                copyStatus === 'copied' 
                ? 'bg-green-600' 
                : 'bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 disabled:cursor-not-allowed'
              }`}
            >
              {copyStatus === 'copied' ? (
                <>
                  تم النسخ!
                  <CheckIcon />
                </>
              ) : (
                <>
                  نسخ النص
                  <CopyIcon />
                </>
              )}
            </button>
          </div>
        </main>
        
        <footer className="text-center mt-12 text-gray-500">
            <p>
                تم تصميم هذه الأداة للمساعدة في حل مشاكل عرض اللغة العربية في البرامج التي لا تدعمها بشكل كامل.
            </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
