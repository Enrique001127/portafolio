import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import emailjs from '@emailjs/browser';
import Toast from './Toast';

const Contact = () => {
  const { t } = useApp();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [hoveredField, setHoveredField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Configuración de EmailJS - Reemplaza con tus credenciales reales
  const EMAILJS_SERVICE_ID = 'service_bolqnfg'; // Tu Service ID
  const EMAILJS_TEMPLATE_ID = 'template_j82nd7e'; // Reemplaza con tu Template ID real
  const EMAILJS_PUBLIC_KEY = 'df2K3M-4pDZ7fQY3R'; // Reemplaza con tu Public Key real

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verificar si las credenciales están configuradas
    if (EMAILJS_SERVICE_ID.includes('xxxxxxx') || 
        EMAILJS_TEMPLATE_ID.includes('xxxxxxx') || 
        EMAILJS_PUBLIC_KEY.includes('xxxxxxx')) {
      setToast({
        message: 'EmailJS no está configurado. Por favor configura las credenciales.',
        type: 'error'
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Enrique Martin',
        to_email: 'enrique001127@gmail.com',
        reply_to: formData.email
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Mostrar notificación de éxito
      setToast({
        message: t('contact.successToast'),
        type: 'success'
      });
      
      // Limpiar formulario
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Mostrar notificación de error
      setToast({
        message: t('contact.errorToast'),
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div 
              className="relative"
              onMouseEnter={() => setHoveredField('email')}
              onMouseLeave={() => setHoveredField(null)}
            >
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('contact.email')}</h3>
                  <p className="text-gray-600 dark:text-gray-300">enrique001127@gmail.com</p>
                </div>
              </div>
              {(hoveredField === 'email' || copiedField === 'email') && (
                <button
                  onClick={() => copyToClipboard('enrique001127@gmail.com', 'email')}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-blue-600 transition-colors bg-white dark:bg-gray-800 rounded-full shadow-md"
                  title="Copiar email"
                >
                  {copiedField === 'email' ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              )}
            </div>
            <div 
              className="relative"
              onMouseEnter={() => setHoveredField('phone')}
              onMouseLeave={() => setHoveredField(null)}
            >
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('contact.phone')}</h3>
                  <p className="text-gray-600 dark:text-gray-300">+5356261130</p>
                </div>
              </div>
              {(hoveredField === 'phone' || copiedField === 'phone') && (
                <button
                  onClick={() => copyToClipboard('+5356261130', 'phone')}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-blue-600 transition-colors bg-white dark:bg-gray-800 rounded-full shadow-md"
                  title="Copiar teléfono"
                >
                  {copiedField === 'phone' ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('contact.location')}</h3>
                <p className="text-gray-600 dark:text-gray-300">La Habana, Cuba</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enrique Martin"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="enrique@gmail.com"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Para que quieres mis habilidades"
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
              <Send className="h-5 w-5" />
              <span>{isSubmitting ? 'Enviando...' : t('contact.send')}</span>
            </button>
          </form>
        </div>
      </div>
      
      {/* Toast Notification */}
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