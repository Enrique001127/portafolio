import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';
import {
  CONTACT_DETAILS,
  CONTACT_FORM_INITIAL_VALUES,
  COPY_FEEDBACK_TIMEOUT_MS,
  EMAILJS_CONFIG,
  EMAILJS_PLACEHOLDER_TOKEN,
} from '../data/portfolio';
import { useApp } from '../hooks/useApp';
import Toast from './Toast';

const Contact = () => {
  const { translate } = useApp();
  const [copiedContactField, setCopiedContactField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [contactFormValues, setContactFormValues] = useState(CONTACT_FORM_INITIAL_VALUES);

  const copyContactValue = async (value, contactField) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedContactField(contactField);
      setTimeout(() => setCopiedContactField(null), COPY_FEEDBACK_TIMEOUT_MS);
    } catch {
      setToast({
        message: translate('contact.copyErrorToast'),
        type: 'error',
      });
    }
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    const { serviceId, templateId, publicKey, recipientEmail } = EMAILJS_CONFIG;
    const emailJsConfigValues = [serviceId, templateId, publicKey];

    if (emailJsConfigValues.some((value) => value.includes(EMAILJS_PLACEHOLDER_TOKEN))) {
      setToast({
        message: translate('contact.configErrorToast'),
        type: 'error',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: contactFormValues.name,
        from_email: contactFormValues.email,
        message: contactFormValues.message,
        to_email: recipientEmail,
        reply_to: contactFormValues.email,
        email_body: `Nombre: ${contactFormValues.name}\n\nEmail: ${contactFormValues.email}\n\nMensaje: ${contactFormValues.message}`,
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setToast({
        message: translate('contact.successToast'),
        type: 'success',
      });

      setContactFormValues(CONTACT_FORM_INITIAL_VALUES);
    } catch {
      setToast({
        message: translate('contact.errorToast'),
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactFieldChange = (event) => {
    const { name, value } = event.target;

    setContactFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="contact-title" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {translate('contact.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {translate('contact.subtitle')}
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          <div className="space-y-8">
            <div className="relative">
              <div className="flex items-center space-x-4 pr-12">
                <Mail className="h-6 w-6 text-blue-600" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{translate('contact.email')}</h3>
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="break-all text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 sm:break-normal">
                    {CONTACT_DETAILS.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyContactValue(CONTACT_DETAILS.email, 'email')}
                aria-label={translate('aria.copyEmail')}
                className="absolute right-0 top-1/2 min-h-11 min-w-11 -translate-y-1/2 rounded-full bg-white p-2 text-gray-500 shadow-md transition-colors hover:text-blue-600 dark:bg-gray-800"
                title={translate('aria.copyEmail')}
              >
                {copiedContactField === 'email' ? (
                  <Check className="h-4 w-4 text-green-600" aria-hidden="true" />
                ) : (
                  <Copy className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>
            <div className="relative">
              <div className="flex items-center space-x-4 pr-12">
                <Phone className="h-6 w-6 text-blue-600" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{translate('contact.phone')}</h3>
                  <a href={CONTACT_DETAILS.phoneUrl} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                    {CONTACT_DETAILS.phone}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyContactValue(CONTACT_DETAILS.phone, 'phone')}
                aria-label={translate('aria.copyPhone')}
                className="absolute right-0 top-1/2 min-h-11 min-w-11 -translate-y-1/2 rounded-full bg-white p-2 text-gray-500 shadow-md transition-colors hover:text-blue-600 dark:bg-gray-800"
                title={translate('aria.copyPhone')}
              >
                {copiedContactField === 'phone' ? (
                  <Check className="h-4 w-4 text-green-600" aria-hidden="true" />
                ) : (
                  <Copy className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-blue-600" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{translate('contact.location')}</h3>
                <p className="text-gray-600 dark:text-gray-300">{CONTACT_DETAILS.location}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {translate('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactFormValues.name}
                onChange={handleContactFieldChange}
                placeholder={translate('contact.namePlaceholder')}
                autoComplete="name"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {translate('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactFormValues.email}
                onChange={handleContactFieldChange}
                placeholder={translate('contact.emailPlaceholder')}
                autoComplete="email"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {translate('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={contactFormValues.message}
                onChange={handleContactFieldChange}
                placeholder={translate('contact.messagePlaceholder')}
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
              <span>{isSubmitting ? translate('contact.sending') : translate('contact.send')}</span>
            </button>
          </form>
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default Contact;
