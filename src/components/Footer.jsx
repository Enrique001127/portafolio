import { Code2, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { CONTACT_DETAILS, NAVIGATION_ITEMS, SOCIAL_LINKS } from '../data/portfolio';
import { useApp } from '../hooks/useApp';

const SOCIAL_ICONS = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  whatsapp: MessageCircle,
};

const Footer = () => {
  const { translate, scrollToSection } = useApp();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Code2 className="h-8 w-8 text-blue-400" aria-hidden="true" />
              <span className="text-xl font-bold">DevPortfolio</span>
            </div>
            <p className="text-gray-400 mb-4">
              {translate('footer.description')}
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map(({ id, label, url }) => {
                const SocialIcon = SOCIAL_ICONS[id];
                const opensInNewTab = id !== 'email';

                return (
                  <a
                    key={id}
                    href={url}
                    target={opensInNewTab ? '_blank' : undefined}
                    rel={opensInNewTab ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    title={label}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <SocialIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label={translate('aria.footerNavigation')}>
            <h3 className="text-lg font-semibold mb-4">{translate('footer.links')}</h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="inline-flex min-h-8 items-center text-gray-400 transition-colors hover:text-white"
                  >
                    {translate(item.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-lg font-semibold mb-4">{translate('contact.title')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-white transition-colors">
                  {CONTACT_DETAILS.email}
                </a>
              </li>
              <li>
                <a href={CONTACT_DETAILS.phoneUrl} className="hover:text-white transition-colors">
                  {CONTACT_DETAILS.phone}
                </a>
              </li>
              <li>{CONTACT_DETAILS.location}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
