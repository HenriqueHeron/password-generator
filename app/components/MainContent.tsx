'use client';
import { useState } from 'react';
import generatePassword from '../scripts/passwordGenerator';
import { TbCopy, TbCopyCheck } from 'react-icons/tb';
import { LuRefreshCw } from 'react-icons/lu';

function getStrength(password: string) {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 16) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  if (score <= 2) return { label: 'Weak', color: '#ef4444', pct: 25 };
  if (score <= 3) return { label: 'Fair', color: '#f97316', pct: 50 };
  if (score <= 4) return { label: 'Strong', color: '#eab308', pct: 75 };
  return { label: 'Very Strong', color: '#22c55e', pct: 100 };
}

export default function MainContent(): React.ReactNode {
  const [pwLength, setPwLength] = useState(12);
  const [password, setPassword] = useState(() => generatePassword(12));
  const [pwWasCopied, setPwWasCopied] = useState(false);

  const passwordGenerate = (length = pwLength) => {
    setPassword(generatePassword(length));
    setPwWasCopied(false);
  };

  const updatePwLength = (operation: string): void => {
    if (operation === '+') {
      if (pwLength >= 30) return;
      const newLength = pwLength + 1;
      setPwLength(newLength);
      passwordGenerate(newLength);
    }
    if (operation === '-') {
      if (pwLength <= 1) return;
      const newLength = pwLength - 1;
      setPwLength(newLength);
      passwordGenerate(newLength);
    }
  };

  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(password);
    setPwWasCopied(true);
  };

  const strength = getStrength(password);

  return (
    <main className="flex-1 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-[#16161f] border border-white/10 rounded-2xl shadow-2xl p-8">

        {/* Password Display */}
        <div className="mb-5">
          <label className="text-gray-500 text-xs uppercase tracking-widest mb-2 block">
            Your password
          </label>
          <div className="flex items-center gap-2 bg-[#0d0d14] rounded-xl border border-white/10 px-4 py-3">
            <input
              type="text"
              value={password}
              readOnly
              id="password-input"
              className="flex-1 bg-transparent text-white font-mono text-sm sm:text-base outline-none tracking-wider min-w-0"
            />
            <button
              onClick={copyPasswordToClipboard}
              title={pwWasCopied ? 'Copied!' : 'Copy to clipboard'}
              className="shrink-0 text-gray-500 hover:text-violet-400 active:scale-90 transition-all p-1 rounded-lg"
            >
              {pwWasCopied
                ? <TbCopyCheck size={22} className="text-green-400" />
                : <TbCopy size={22} />
              }
            </button>
          </div>
          <div className="h-4 mt-1">
            {pwWasCopied && (
              <p className="text-green-400 text-xs">Copied to clipboard!</p>
            )}
          </div>
        </div>

        {/* Strength Indicator */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500 text-xs uppercase tracking-widest">Strength</span>
            <span className="text-xs font-semibold" style={{ color: strength.color }}>
              {strength.label}
            </span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${strength.pct}%`, backgroundColor: strength.color }}
            />
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={() => passwordGenerate()}
          className="w-full bg-violet-600 hover:bg-violet-500 active:bg-violet-700 active:scale-[0.99] text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 mb-5 shadow-lg shadow-violet-900/30"
        >
          <LuRefreshCw size={17} />
          Generate Password
        </button>

        {/* Length Control */}
        <div className="flex items-center justify-between bg-[#0d0d14] rounded-xl border border-white/10 px-5 py-4">
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-widest">Length</p>
            <p className="text-white text-3xl font-bold mt-0.5">{pwLength}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => updatePwLength('-')}
              disabled={pwLength <= 1}
              className="w-11 h-11 rounded-full border border-white/20 text-white text-xl font-bold flex items-center justify-center hover:bg-white/10 disabled:opacity-25 disabled:cursor-not-allowed active:scale-95 transition-all"
            >
              −
            </button>
            <button
              onClick={() => updatePwLength('+')}
              disabled={pwLength >= 30}
              className="w-11 h-11 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-xl font-bold flex items-center justify-center disabled:opacity-25 disabled:cursor-not-allowed active:scale-95 transition-all shadow-lg shadow-violet-900/30"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
