import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import { CONTACT } from '@/lib/contact';

const PRODUCTS = [
  'Gomme arabique (E414)',
  'Sésame naturel du Niger',
  'Oignon violet de Galmi',
  "Graine d'arachide décortiquée",
  'Autre / Plusieurs produits',
];

const INCOTERMS = ['FOB', 'CIF', 'CFR', 'EXW', 'À définir'];

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
              Demande d'offre
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Request for Quotation (RFQ)
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Remplissez ce formulaire pour recevoir une offre commerciale adaptée à vos besoins.
              Nous vous répondons sous 48h ouvrées.
            </p>
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
                  <h2 className="text-2xl font-bold text-wolf-dark-green mb-3">
                    Demande envoyée
                  </h2>
                  <p className="text-wolf-gray mb-8 max-w-md mx-auto">
                    Nous avons bien reçu votre demande. Notre équipe vous contactera sous 48h ouvrées.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center justify-center border-2 border-wolf-green text-wolf-green font-semibold px-6 py-3 rounded hover:bg-wolf-green hover:text-white transition-colors text-sm"
                  >
                    Nouvelle demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Section 1 : Identité */}
                  <div>
                    <h2 className="text-lg font-bold text-wolf-dark-green mb-4 pb-2 border-b border-wolf-beige">
                      Vos informations
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Nom & prénom *" id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Jean Dupont" />
                      <Field label="Société *" id="company" name="company" type="text" required value={form.company} onChange={handleChange} placeholder="Votre entreprise" />
                      <Field label="Email professionnel *" id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="votre@email.com" />
                      <Field label="Téléphone / WhatsApp" id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+33 6 00 00 00 00" />
                      <Field label="Pays *" id="country" name="country" type="text" required value={form.country} onChange={handleChange} placeholder="France, Allemagne..." />
                    </div>
                  </div>

                  {/* Section 2 : Produit */}
                  <div>
                    <h2 className="text-lg font-bold text-wolf-dark-green mb-4 pb-2 border-b border-wolf-beige">
                      Votre besoin
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="product" className="block text-sm font-medium text-wolf-dark mb-1.5">
                          Produit souhaité *
                        </label>
                        <select
                          id="product"
                          name="product"
                          required
                          value={form.product}
                          onChange={handleChange}
                          className="w-full border border-wolf-beige rounded px-4 py-3 text-sm focus:outline-none focus:border-wolf-green transition-colors bg-white"
                        >
                          <option value="">Sélectionner un produit</option>
                          {PRODUCTS.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                      <Field label="Volume souhaité *" id="volume" name="volume" type="text" required value={form.volume} onChange={handleChange} placeholder="Ex: 1 conteneur 20', 20 tonnes..." />
                      <div>
                        <label htmlFor="incoterm" className="block text-sm font-medium text-wolf-dark mb-1.5">
                          Incoterm souhaité
                        </label>
                        <select
                          id="incoterm"
                          name="incoterm"
                          value={form.incoterm}
                          onChange={handleChange}
                          className="w-full border border-wolf-beige rounded px-4 py-3 text-sm focus:outline-none focus:border-wolf-green transition-colors bg-white"
                        >
                          <option value="">Sélectionner</option>
                          {INCOTERMS.map((i) => (
                            <option key={i} value={i}>{i}</option>
                          ))}
                        </select>
                      </div>
                      <Field label="Port / Destination" id="destination" name="destination" type="text" value={form.destination} onChange={handleChange} placeholder="Ex: Port du Havre, Rotterdam..." />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-wolf-dark mb-1.5">
                      Informations complémentaires
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Fréquence d'achat, qualité souhaitée, exigences particulières, questions..."
                      className="w-full border border-wolf-beige rounded px-4 py-3 text-sm focus:outline-none focus:border-wolf-green transition-colors resize-none"
                    />
                  </div>

                  {/* Options */}
                  <div>
                    <h2 className="text-lg font-bold text-wolf-dark-green mb-4 pb-2 border-b border-wolf-beige">
                      Options
                    </h2>
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
                  </div>

                  {status === 'error' && (
                    <p className="text-red-600 text-sm">
                      Une erreur est survenue. Veuillez réessayer ou nous contacter directement à{' '}
                      <a href="mailto:contact@wolfagroservices.com" className="underline">
                        contact@wolfagroservices.com
                      </a>.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-wolf-green text-white font-semibold py-4 rounded hover:bg-wolf-dark-green transition-colors disabled:opacity-70 text-sm"
                  >
                    {status === 'sending' ? 'Envoi en cours...' : 'Envoyer la demande d\'offre'}
                  </button>
                  <p className="text-wolf-gray text-xs text-center">
                    En soumettant ce formulaire, vous acceptez que nous vous contactions par email.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-wolf-beige p-6 rounded-lg mb-6">
                <h3 className="font-bold text-wolf-dark-green mb-3">Réponse rapide</h3>
                <p className="text-wolf-gray text-sm leading-relaxed mb-4">
                  Notre équipe export traite vos demandes sous 48h ouvrées. Pour les demandes
                  urgentes, contactez-nous directement.
                </p>
                <a
                  href={CONTACT.emailHref}
                  className="block text-wolf-green font-semibold text-sm"
                >
                  {CONTACT.email}
                </a>
                <a
                  href={CONTACT.phoneLandlineHref}
                  className="block text-wolf-green font-semibold text-sm mt-1"
                >
                  {CONTACT.phoneLandline}
                </a>
                <a
                  href={CONTACT.phoneMobileHref}
                  className="block text-wolf-green font-semibold text-sm mt-1"
                >
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
                {[
                  'Offre tarifée sous 48h',
                  'Fiche technique disponible',
                  'Échantillons sur demande',
                  'Flexibilité FOB / CIF',
                  'Contrats long terme possibles',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-wolf-dark">
                    <CheckCircle size={14} className="text-wolf-green flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-wolf-beige">
                <h3 className="font-bold text-wolf-dark-green mb-3 text-sm">Nos produits</h3>
                <div className="space-y-2">
                  {PRODUCTS.slice(0, 4).map((p) => (
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
