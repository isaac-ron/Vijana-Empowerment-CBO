'use client';

import { useId, useState, type FormEvent } from 'react';

type PaymentMethod = 'mpesa' | 'card';

const PRESETS = [
  { value: 5000, label: 'KES 5K', sublabel: 'Basic kit' },
  { value: 15000, label: 'KES 15K', sublabel: 'One trainee' },
  { value: 50000, label: 'KES 50K', sublabel: 'Full cohort' },
] as const;

const formatKes = new Intl.NumberFormat('en-KE', {
  style: 'currency',
  currency: 'KES',
  maximumFractionDigits: 0,
}).format;

const inputCls =
  'w-full px-4 py-3 border-2 border-black bg-white outline-none transition-all focus:border-[#9a1e14] focus:ring-2 focus:ring-[#fa7f2a]/40';

export default function DonationForm() {
  const nameId = useId();
  const emailId = useId();
  const customId = useId();

  const [preset, setPreset] = useState<number | 'custom'>(PRESETS[0].value);
  const [custom, setCustom] = useState<string>('');
  const [method, setMethod] = useState<PaymentMethod>('mpesa');
  const [submitted, setSubmitted] = useState(false);

  const amount = preset === 'custom' ? Number(custom) || 0 : preset;
  const amountValid = amount >= 100;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!amountValid) return;
    setSubmitted(true);
  }

  const cardCls = (active: boolean) =>
    'flex flex-col items-center justify-center p-4 cursor-pointer transition-all border-2 bg-white text-center ' +
    (active ? 'border-[#9a1e14] bg-[#fa7f2a]/15' : 'border-black/30 hover:border-[#9a1e14]');

  if (submitted) {
    return (
      <div className="bv-border bg-white p-10 text-center space-y-5">
        <span className="material-symbols-outlined text-[#9a1e14] text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>
          favorite
        </span>
        <h3 className="font-display font-bold text-headline-sm text-[#120d0b]">Thank you!</h3>
        <p className="text-on-surface-variant">
          Your pledge of <strong>{formatKes(amount)}</strong> via {method === 'mpesa' ? 'M-Pesa' : 'card'} is
          recorded. We&rsquo;ll email confirmation and the next steps to complete it.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="font-display font-bold text-[#9a1e14] uppercase tracking-widest text-label-md hover:text-[#5e0f0a] transition-colors"
        >
          Make another donation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <fieldset>
        <legend className="font-display font-bold text-label-md mb-3 text-[#120d0b]">Amount</legend>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {PRESETS.map((p) => (
            <label key={p.value} className={cardCls(preset === p.value)}>
              <input type="radio" name="amount" value={p.value} checked={preset === p.value} onChange={() => setPreset(p.value)} className="sr-only" />
              <span className="font-display font-extrabold text-xl text-[#9a1e14] leading-tight">{p.label}</span>
              <span className="text-label-sm text-on-surface-variant mt-1">{p.sublabel}</span>
            </label>
          ))}
          <label className={cardCls(preset === 'custom')}>
            <input type="radio" name="amount" value="custom" checked={preset === 'custom'} onChange={() => setPreset('custom')} className="sr-only" />
            <span className="font-display font-extrabold text-xl text-[#9a1e14] leading-tight">Custom</span>
            <span className="text-label-sm text-on-surface-variant mt-1">Choose amount</span>
          </label>
        </div>

        {preset === 'custom' && (
          <div className="mt-4">
            <label htmlFor={customId} className="block font-display font-bold text-label-md text-[#120d0b] mb-2">
              Custom amount (KES)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-display text-label-md uppercase tracking-widest pointer-events-none">
                KES
              </span>
              <input id={customId} type="number" min={100} step={100} inputMode="numeric" value={custom} onChange={(e) => setCustom(e.target.value)} placeholder="2,500" required={preset === 'custom'} className={inputCls + ' pl-16'} />
            </div>
            <p className="mt-2 text-label-sm text-on-surface-variant">Minimum KES 100.</p>
          </div>
        )}
      </fieldset>

      <div className="space-y-5">
        <div>
          <label htmlFor={nameId} className="block font-display font-bold text-label-md mb-2 text-[#120d0b]">Full name</label>
          <input id={nameId} name="name" required type="text" placeholder="Jane Mutai" className={inputCls} />
        </div>
        <div>
          <label htmlFor={emailId} className="block font-display font-bold text-label-md mb-2 text-[#120d0b]">Email address</label>
          <input id={emailId} name="email" required type="email" placeholder="you@example.com" className={inputCls} />
        </div>
      </div>

      <fieldset className="pt-5 border-t-2 border-black">
        <legend className="font-display font-bold text-label-md text-[#120d0b] mb-4">Preferred payment method</legend>
        <div className="grid grid-cols-2 gap-3">
          <label className={'py-3 flex items-center justify-center gap-2 cursor-pointer transition-colors border-2 bg-white font-display font-semibold ' + (method === 'mpesa' ? 'border-[#9a1e14] bg-[#fa7f2a]/15' : 'border-black/30 hover:border-[#9a1e14]')}>
            <input type="radio" name="method" value="mpesa" checked={method === 'mpesa'} onChange={() => setMethod('mpesa')} className="sr-only" />
            <span className="material-symbols-outlined text-[#9a1e14]">smartphone</span> M-Pesa
          </label>
          <label className={'py-3 flex items-center justify-center gap-2 cursor-pointer transition-colors border-2 bg-white font-display font-semibold ' + (method === 'card' ? 'border-[#9a1e14] bg-[#fa7f2a]/15' : 'border-black/30 hover:border-[#9a1e14]')}>
            <input type="radio" name="method" value="card" checked={method === 'card'} onChange={() => setMethod('card')} className="sr-only" />
            <span className="material-symbols-outlined text-[#9a1e14]">credit_card</span> Card
          </label>
        </div>
      </fieldset>

      <button type="submit" disabled={!amountValid} className="bv-btn bv-btn-red w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed">
        {amountValid ? `Donate ${formatKes(amount)}` : 'Enter an amount to donate'}
        {amountValid && <span className="arr" aria-hidden>→</span>}
      </button>
    </form>
  );
}
