import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        'service_j29ee2j',
        'template_5pac2mj',
        formData,
        'vIiMCG_wQY4eZSVCk'
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
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contactez notre équipe export
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Pour toute question commerciale, demande d'information ou prise de contact initiale.
              Nous répondons sous 48h ouvrées.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <span className="section-label">Message</span>
              <h2 className="text-2xl font-bold text-wolf-dark-green mb-6">Envoyez-nous un message</h2>

              {status === 'sent' ? (
                <div className="bg-wolf-green/10 border border-wolf-green/20 rounded-lg p-6 text-wolf-green">
                  <p className="font-semibold mb-1">Message envoyé.</p>
                  <p className="text-sm">Nous vous répondons sous 48h ouvrées.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-wolf-dark mb-1.5">
                        Nom & prénom *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                        className="w-full border border-wolf-beige rounded px-4 py-3 text-sm focus:outline-none focus:border-wolf-green transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-wolf-dark mb-1.5">
                        Société
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Votre entreprise"
                        className="w-full border border-wolf-beige rounded px-4 py-3 text-sm focus:outline-none focus:border-wolf-green transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-wolf-dark mb-1.5">
                      Email professionnel *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className="w-full border border-wolf-beige rounded px-4 py-3 text-sm focus:outline-none focus:border-wolf-green transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-wolf-dark mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre demande..."
                      className="w-full border border-wolf-beige rounded px-4 py-3 text-sm focus:outline-none focus:border-wolf-green transition-colors resize-none"
                    />
                  </div>
                  {status === 'error' && (
                    <p className="text-red-600 text-sm">Une erreur est survenue. Veuillez réessayer ou nous contacter par email.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-wolf-green text-white font-semibold py-3.5 rounded hover:bg-wolf-dark-green transition-colors disabled:opacity-70 text-sm"
                  >
                    {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>
                  <p className="text-wolf-gray text-xs">
                    Pour une demande de cotation formelle, utilisez notre{' '}
                    <Link to="/demande-offre" className="text-wolf-green underline">formulaire RFQ dédié</Link>.
                  </p>
                </form>
              )}
            </div>

            {/* Coordonnées */}
            <div>
              <span className="section-label">Coordonnées</span>
              <h2 className="text-2xl font-bold text-wolf-dark-green mb-6">Wolf Agro Services</h2>
              <div className="space-y-6 mb-10">
                <a
                  href="mailto:contact@wolfagroservices.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-wolf-green/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-wolf-green group-hover:text-white transition-colors">
                    <Mail size={18} className="text-wolf-green group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-wolf-gray uppercase tracking-wide mb-0.5">Email</div>
                    <div className="text-wolf-dark-green font-semibold">contact@wolfagroservices.com</div>
                  </div>
                </a>
                <a
                  href="tel:+22720353509"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-wolf-green/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-wolf-green transition-colors">
                    <Phone size={18} className="text-wolf-green group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-wolf-gray uppercase tracking-wide mb-0.5">Téléphone</div>
                    <div className="text-wolf-dark-green font-semibold">+227 20 35 35 09</div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-wolf-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-wolf-green" />
                  </div>
                  <div>
                    <div className="text-xs text-wolf-gray uppercase tracking-wide mb-0.5">Adresse</div>
                    <div className="text-wolf-dark-green font-semibold">Plateau, Niamey, Niger</div>
                  </div>
                </div>
              </div>

              <div className="bg-wolf-beige p-6 rounded-lg border border-wolf-beige mb-8">
                <h3 className="font-bold text-wolf-dark-green mb-2">Équipe export</h3>
                <p className="text-wolf-gray text-sm leading-relaxed">
                  Notre équipe commerciale traite vos demandes export du lundi au vendredi.
                  Pour les demandes urgentes, contactez-nous directement par téléphone.
                </p>
              </div>

              <div className="p-5 border border-wolf-green/20 rounded-lg bg-wolf-green/5">
                <h3 className="font-bold text-wolf-dark-green mb-2 text-sm">Demande de cotation formelle</h3>
                <p className="text-wolf-gray text-sm mb-4">
                  Pour une demande d'offre structurée (produit, volume, destination, incoterm),
                  utilisez notre formulaire RFQ dédié.
                </p>
                <Link
                  to="/demande-offre"
                  className="inline-flex items-center gap-2 text-wolf-green font-semibold text-sm hover:text-wolf-dark-green transition-colors"
                >
                  Aller au formulaire RFQ <ArrowRight size={14} />
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
