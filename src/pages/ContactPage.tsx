import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import emailjs from 'emailjs-com';
import { CONTACT } from '@/lib/contact';
import { useTranslation } from '@/i18n';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const { t } = useTranslation();
  const c = t.contact;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        'service_87m5p6p',
        'template_f9dn2af',
        { ...formData, subject: `Contact – ${formData.name}${formData.company ? ` – ${formData.company}` : ''}` },
        'GZQd9UkWSZa5yFIh6'
      );
      setStatus('sent');
      setFormData({ name: '', company: '', email: '', message: '' });
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
              {c.heroLabel}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{c.heroTitle}</h1>
            <p className="text-white/70 text-lg leading-relaxed">{c.heroSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <span className="section-label">{c.formLabel}</span>
              <h2 className="text-2xl font-bold text-wolf-dark-green mb-6">{c.formTitle}</h2>

              {status === 'sent' ? (
                <div className="bg-wolf-green/10 border border-wolf-green/20 rounded-lg p-6 text-wolf-green">
                  <p className="font-semibold mb-1">{c.successTitle}</p>
                  <p className="text-sm">{c.successDesc}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-wolf-dark mb-1.5">
                        {c.nameLabel}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={c.namePlaceholder}
                        className="w-full border border-wolf-beige rounded px-4 py-3 text-sm focus:outline-none focus:border-wolf-green transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-wolf-dark mb-1.5">
                        {c.companyLabel}
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={c.companyPlaceholder}
                        className="w-full border border-wolf-beige rounded px-4 py-3 text-sm focus:outline-none focus:border-wolf-green transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-wolf-dark mb-1.5">
                      {c.emailLabel}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={c.emailPlaceholder}
                      className="w-full border border-wolf-beige rounded px-4 py-3 text-sm focus:outline-none focus:border-wolf-green transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-wolf-dark mb-1.5">
                      {c.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={c.messagePlaceholder}
                      className="w-full border border-wolf-beige rounded px-4 py-3 text-sm focus:outline-none focus:border-wolf-green transition-colors resize-none"
                    />
                  </div>
                  {status === 'error' && (
                    <p className="text-red-600 text-sm">{c.errorMsg}</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-wolf-green text-white font-semibold py-3.5 rounded hover:bg-wolf-dark-green transition-colors disabled:opacity-70 text-sm"
                  >
                    {status === 'sending' ? c.sendingBtn : c.submitBtn}
                  </button>
                  <p className="text-wolf-gray text-xs">
                    {c.rfqNote}{' '}
                    <Link to="/demande-offre" className="text-wolf-green underline">{c.rfqLink}</Link>.
                  </p>
                </form>
              )}
            </div>

            {/* Coordonnées */}
            <div>
              <span className="section-label">{c.coordLabel}</span>
              <h2 className="text-2xl font-bold text-wolf-dark-green mb-6">{c.coordTitle}</h2>

              <div className="space-y-5 mb-8">
                {/* Email */}
                <a href={CONTACT.emailHref} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-wolf-green/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-wolf-green transition-colors">
                    <Mail size={18} className="text-wolf-green group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-wolf-gray uppercase tracking-wide mb-0.5">{c.emailSection}</div>
                    <div className="text-wolf-dark-green font-semibold">{CONTACT.email}</div>
                  </div>
                </a>

                {/* Téléphone fixe */}
                <a href={CONTACT.phoneLandlineHref} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-wolf-green/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-wolf-green transition-colors">
                    <Phone size={18} className="text-wolf-green group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-wolf-gray uppercase tracking-wide mb-0.5">{c.phoneLandline}</div>
                    <div className="text-wolf-dark-green font-semibold">{CONTACT.phoneLandline}</div>
                  </div>
                </a>

                {/* Téléphone mobile */}
                <a href={CONTACT.phoneMobileHref} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-wolf-green/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-wolf-green transition-colors">
                    <Phone size={18} className="text-wolf-green group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-wolf-gray uppercase tracking-wide mb-0.5">{c.phoneMobile}</div>
                    <div className="text-wolf-dark-green font-semibold">{CONTACT.phoneMobile}</div>
                  </div>
                </a>

                {/* Adresse */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-wolf-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-wolf-green" />
                  </div>
                  <div>
                    <div className="text-xs text-wolf-gray uppercase tracking-wide mb-0.5">{c.addressSection}</div>
                    <div className="text-wolf-dark-green font-semibold">{CONTACT.address}</div>
                  </div>
                </div>
              </div>

              {/* WhatsApp block */}
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-[#25D366]/8 border border-[#25D366]/25 rounded-lg hover:bg-[#25D366]/15 transition-colors group mb-8"
              >
                <div className="w-11 h-11 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-wolf-dark-green text-sm mb-0.5">{c.whatsappTitle}</div>
                  <div className="text-wolf-gray text-xs">{c.whatsappDesc}</div>
                </div>
                <ArrowRight size={16} className="text-wolf-gray group-hover:text-wolf-green transition-colors" />
              </a>

              {/* Équipe export */}
              <div className="bg-wolf-beige p-5 rounded-lg border border-wolf-beige/80 mb-6">
                <h3 className="font-bold text-wolf-dark-green mb-2 text-sm">{c.teamTitle}</h3>
                <p className="text-wolf-gray text-sm leading-relaxed">{c.teamDesc}</p>
              </div>

              {/* RFQ CTA */}
              <div className="p-5 border border-wolf-green/20 rounded-lg bg-wolf-green/5">
                <h3 className="font-bold text-wolf-dark-green mb-2 text-sm">{c.rfqSectionTitle}</h3>
                <p className="text-wolf-gray text-sm mb-4">{c.rfqSectionDesc}</p>
                <Link
                  to="/demande-offre"
                  className="inline-flex items-center gap-2 text-wolf-green font-semibold text-sm hover:text-wolf-dark-green transition-colors"
                >
                  {t.common.goToRfq} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
