import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import { CONTACT } from '@/lib/contact';
import { useTranslation } from '@/i18n';

const INCOTERMS = ['FOB', 'CIF', 'CFR', 'EXW'];

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  volume: string;
  incoterm: string;
  destination: string;
  message: string;
  requestDatasheet: boolean;
  requestSample: boolean;
}

const initial: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product: '',
  volume: '',
  incoterm: '',
  destination: '',
  message: '',
  requestDatasheet: false,
  requestSample: false,
};

const RFQ = () => {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const { t } = useTranslation();
  const r = t.rfq;

  const PRODUCTS = [
    'Gomme arabique (E414)',
    'Sésame naturel du Niger',
    'Oignon violet de Galmi',
    "Graine d'arachide décortiquée",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        'service_j29ee2j',
        'template_5pac2mj',
        {
          ...form,
          requestDatasheet: form.requestDatasheet ? 'Oui' : 'Non',
          requestSample: form.requestSample ? 'Oui' : 'Non',
          subject: `RFQ – ${form.product} – ${form.company}`,
        },
        'vIiMCG_wQY4eZSVCk'
      );
      setStatus('sent');
      setForm(initial);
    } catch {
      setStatus('error');
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-wolf-dark-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-wolf-sand text-xs font-semibold tracking-widest uppercase mb-4 block">
              {r.heroLabel}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{r.heroTitle}</h1>
            <p className="text-white/70 text-lg leading-relaxed">{r.heroSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              {status === 'sent' ? (
                <div className="text-center py-16">
                  <CheckCircle size={56} className="text-wolf-green mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-wolf-dark-green mb-3">{r.successTitle}</h2>
                  <p className="text-wolf-gray mb-8 max-w-md mx-auto">{r.successDesc}</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center justify-center border-2 border-wolf-green text-wolf-green font-semibold px-6 py-3 rounded hover:bg-wolf-green hover:text-white transition-colors text-sm"
                  >
                    {r.heroLabel}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Section 1 */}
                  <div>
                    <h2 className="text-lg font-bold text-wolf-dark-green mb-4 pb-2 border-b border-wolf-beige">
                      {r.formTitle}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label={r.nameLabel} id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Jean Dupont" />
                      <Field label={r.companyLabel} id="company" name="company" type="text" required value={form.company} onChange={handleChange} placeholder="Votre entreprise" />
                      <Field label={r.emailLabel} id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="votre@email.com" />
                      <Field label="Téléphone / WhatsApp" id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+33 6 00 00 00 00" />
                      <Field label={r.countryLabel} id="country" name="country" type="text" required value={form.country} onChange={handleChange} placeholder={r.countryPlaceholder} />
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <h2 className="text-lg font-bold text-wolf-dark-green mb-4 pb-2 border-b border-wolf-beige">
                      {r.productLabel}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="product" className="block text-sm font-medium text-wolf-dark mb-1.5">
                          {r.productLabel}
                        </label>
                        <select
                          id="product"
                          name="product"
                          required
                          value={form.product}
                          onChange={handleChange}
                          className="w-full border border-wolf-beige rounded px-4 py-3 text-sm focus:outline-none focus:border-wolf-green transition-colors bg-white"
                        >
                          <option value="">{r.selectProduct}</option>
                          {PRODUCTS.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                      <Field label={r.quantityLabel} id="volume" name="volume" type="text" required value={form.volume} onChange={handleChange} placeholder={r.quantityPlaceholder} />
                      <div>
                        <label htmlFor="incoterm" className="block text-sm font-medium text-wolf-dark mb-1.5">
                          {r.incotermLabel}
                        </label>
                        <select
                          id="incoterm"
                          name="incoterm"
                          value={form.incoterm}
                          onChange={handleChange}
                          className="w-full border border-wolf-beige rounded px-4 py-3 text-sm focus:outline-none focus:border-wolf-green transition-colors bg-white"
                        >
                          <option value="">{r.selectIncoterm}</option>
                          {INCOTERMS.map((i) => (
                            <option key={i} value={i}>{i}</option>
                          ))}
                        </select>
                      </div>
                      <Field label="Port / Destination" id="destination" name="destination" type="text" value={form.destination} onChange={handleChange} placeholder="Ex: Le Havre, Rotterdam..." />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-wolf-dark mb-1.5">
                      {r.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder={r.messagePlaceholder}
                      className="w-full border border-wolf-beige rounded px-4 py-3 text-sm focus:outline-none focus:border-wolf-green transition-colors resize-none"
                    />
                  </div>

                  {/* Options */}
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="requestDatasheet"
                        checked={form.requestDatasheet}
                        onChange={handleChange}
                        className="w-4 h-4 accent-wolf-green"
                      />
                      <span className="text-sm text-wolf-dark group-hover:text-wolf-green transition-colors">
                        Je souhaite recevoir la fiche technique produit
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="requestSample"
                        checked={form.requestSample}
                        onChange={handleChange}
                        className="w-4 h-4 accent-wolf-green"
                      />
                      <span className="text-sm text-wolf-dark group-hover:text-wolf-green transition-colors">
                        Je souhaite recevoir un échantillon
                      </span>
                    </label>
                  </div>

                  {status === 'error' && (
                    <p className="text-red-600 text-sm">
                      {r.errorMsg}{' '}
                      <a href={CONTACT.emailHref} className="underline">{CONTACT.email}</a>.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-wolf-green text-white font-semibold py-4 rounded hover:bg-wolf-dark-green transition-colors disabled:opacity-70 text-sm"
                  >
                    {status === 'sending' ? r.sendingBtn : r.submitBtn}
                  </button>
                  <p className="text-wolf-gray text-xs text-center">{r.privacyNote}</p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-wolf-beige p-6 rounded-lg mb-6">
                <h3 className="font-bold text-wolf-dark-green mb-3">{r.sidebarTitle}</h3>
                <p className="text-wolf-gray text-sm leading-relaxed mb-4">{r.sidebarDesc}</p>
                <a href={CONTACT.emailHref} className="block text-wolf-green font-semibold text-sm">
                  {CONTACT.email}
                </a>
                <a href={CONTACT.phoneLandlineHref} className="block text-wolf-green font-semibold text-sm mt-1">
                  {CONTACT.phoneLandline}
                </a>
                <a href={CONTACT.phoneMobileHref} className="block text-wolf-green font-semibold text-sm mt-1">
                  {CONTACT.phoneMobile}
                </a>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#25D366] font-semibold text-sm mt-2"
                >
                  WhatsApp
                </a>
              </div>

              <div className="space-y-3">
                {r.guarantees.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-wolf-dark">
                    <CheckCircle size={14} className="text-wolf-green flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-wolf-beige">
                <h3 className="font-bold text-wolf-dark-green mb-3 text-sm">{r.ourProducts}</h3>
                <div className="space-y-2">
                  {PRODUCTS.map((p) => (
                    <div key={p} className="text-wolf-gray text-sm py-1 border-b border-wolf-beige/50 last:border-0">
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const Field = ({
  label, id, name, type, required, value, onChange, placeholder,
}: {
  label: string;
  id: string;
  name: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-wolf-dark mb-1.5">
      {label}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border border-wolf-beige rounded px-4 py-3 text-sm focus:outline-none focus:border-wolf-green transition-colors"
    />
  </div>
);

export default RFQ;
