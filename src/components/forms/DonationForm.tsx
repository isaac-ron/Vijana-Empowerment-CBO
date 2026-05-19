'use client';

import { useId, useState, type FormEvent } from 'react';

type PaymentMethod = 'mpesa' | 'card';

const PRESETS = [
  { value: 5000, label: 'KES 5K', sublabel: 'Basic Kit' },
  { value: 15000, label: 'KES 15K', sublabel: 'One Trainee' },
  { value: 50000, label: 'KES 50K', sublabel: 'Full Cohort' },
] as const;

const formatKes = new Intl.NumberFormat('en-KE', {
  style: 'currency',
  currency: 'KES',
  maximumFractionDigits: 0,
}).format;

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

  if (submitted) {
    return (
      <div className="space-y-6 bg-white border border-outline-variant/40 rounded-2xl p-10 text-center">
        <span
          className="material-symbols-outlined text-primary text-6xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          favorite
        </span>
        <h3 className="text-headline-sm text-primary">Thank you!</h3>
        <p className="text-body-md text-on-surface-variant">
          Your pledge of <strong>{formatKes(amount)}</strong> via{' '}
          {method === 'mpesa' ? 'M-Pesa' : 'card'} is recorded. We&rsquo;ll email confirmation
          and the next steps to complete the transaction.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-secondary text-label-md uppercase tracking-widest hover:text-primary transition-colors"
        >
          Make another donation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Preset amount radio cards */}
      <fieldset>
        <legend className="block text-label-md mb-3 text-on-surface">Amount</legend>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {PRESETS.map((p) => {
            const checked = preset === p.value;
            return (
              <label
                key={p.value}
                className={[
                  'flex flex-col items-center justify-center p-4 rounded-2xl cursor-pointer transition-all border-2 bg-white text-center',
                  checked
                    ? 'border-secondary bg-secondary-fixed/40 shadow-sm'
                    : 'border-outline-variant/50 hover:border-secondary',
                ].join(' ')}
              >
                <input
                  type="radio"
                  name="amount"
                  value={p.value}
                  checked={checked}
                  onChange={() => setPreset(p.value)}
                  className="sr-only"
                />
                <span className="text-headline-sm text-primary leading-tight">{p.label}</span>
                <span className="text-label-sm text-on-surface-variant mt-1">{p.sublabel}</span>
              </label>
            );
          })}
          <label
            className={[
              'flex flex-col items-center justify-center p-4 rounded-2xl cursor-pointer transition-all border-2 bg-white text-center',
              preset === 'custom'
                ? 'border-secondary bg-secondary-fixed/40 shadow-sm'
                : 'border-outline-variant/50 hover:border-secondary',
            ].join(' ')}
          >
            <input
              type="radio"
              name="amount"
              value="custom"
              checked={preset === 'custom'}
              onChange={() => setPreset('custom')}
              className="sr-only"
            />
            <span className="text-headline-sm text-primary leading-tight">Custom</span>
            <span className="text-label-sm text-on-surface-variant mt-1">Choose amount</span>
          </label>
        </div>

        {preset === 'custom' && (
          <div className="mt-4">
            <label htmlFor={customId} className="block text-label-md text-on-surface mb-2">
              Custom amount (KES)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-label-md uppercase tracking-widest pointer-events-none">
                KES
              </span>
              <input
                id={customId}
                type="number"
                min={100}
                step={100}
                inputMode="numeric"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                placeholder="2,500"
                required={preset === 'custom'}
                className="w-full pl-16 pr-4 py-3 rounded-xl border border-outline-variant/50 bg-white focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
              />
            </div>
            <p className="mt-2 text-label-sm text-on-surface-variant">Minimum KES 100.</p>
          </div>
        )}
      </fieldset>

      {/* Donor info */}
      <div className="space-y-6">
        <div>
          <label htmlFor={nameId} className="block text-label-md mb-2 text-on-surface">
            Full Name
          </label>
          <input
            id={nameId}
            name="name"
            required
            type="text"
            placeholder="Jane Mutai"
            className="w-full px-4 py-3 rounded-xl border border-outline-variant/50 bg-white focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
          />
        </div>
        <div>
          <label htmlFor={emailId} className="block text-label-md mb-2 text-on-surface">
            Email Address
          </label>
          <input
            id={emailId}
            name="email"
            required
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl border border-outline-variant/50 bg-white focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
          />
        </div>
      </div>

      {/* Payment method */}
      <fieldset className="pt-4 border-t border-outline-variant/30">
        <legend className="text-label-md text-primary mb-4">Preferred Payment Method</legend>
        <div className="grid grid-cols-2 gap-4">
          <label
            className={[
              'py-3 rounded-xl text-label-md flex items-center justify-center gap-2 cursor-pointer transition-colors border-2 bg-white',
              method === 'mpesa'
                ? 'border-secondary bg-secondary-fixed/40'
                : 'border-outline-variant/50 hover:border-secondary',
            ].join(' ')}
          >
            <input
              type="radio"
              name="method"
              value="mpesa"
              checked={method === 'mpesa'}
              onChange={() => setMethod('mpesa')}
              className="sr-only"
            />
            <span className="material-symbols-outlined text-secondary-container">smartphone</span>
            M-Pesa
          </label>
          <label
            className={[
              'py-3 rounded-xl text-label-md flex items-center justify-center gap-2 cursor-pointer transition-colors border-2 bg-white',
              method === 'card'
                ? 'border-secondary bg-secondary-fixed/40'
                : 'border-outline-variant/50 hover:border-secondary',
            ].join(' ')}
          >
            <input
              type="radio"
              name="method"
              value="card"
              checked={method === 'card'}
              onChange={() => setMethod('card')}
              className="sr-only"
            />
            <span className="material-symbols-outlined text-primary">credit_card</span>
            Card
          </label>
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={!amountValid}
        className="w-full bg-primary text-on-primary py-4 rounded-full text-headline-sm shadow-lg hover:bg-primary-container active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
      >
        {amountValid ? `Donate ${formatKes(amount)}` : 'Enter an amount to donate'}
      </button>
    </form>
  );
}
