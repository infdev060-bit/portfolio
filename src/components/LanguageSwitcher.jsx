import { useTranslation } from 'react-i18next';
import { Globe2 } from 'lucide-react';

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const languages = [
    { code: 'fr', label: 'FR', name: 'Français' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'de', label: 'DE', name: 'Deutsch' },
  ];

  // Normalise la langue courante (ex: "fr-FR" -> "fr") pour detecter l'actif
  const current = (i18n.resolvedLanguage || i18n.language || '').slice(0, 2);

  return (
    <div
      role="group"
      aria-label={t('languageSwitcher.label')}
      className="inline-flex items-center gap-1.5 p-1 bg-base-900/60 backdrop-blur-md rounded-xl border border-white/10 shadow-lg">
      <Globe2 className="w-4 h-4 text-slate-400 ml-2 mr-0.5" strokeWidth={2} aria-hidden="true" />
      {languages.map((lang) => {
        const isActive = current === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => i18n.changeLanguage(lang.code)}
            aria-pressed={isActive}
            aria-label={lang.name}
            title={lang.name}
            className={`px-2.5 py-1.5 text-xs font-bold rounded-lg transition-all duration-300 ${
              isActive
                ? 'bg-gradient-to-r from-accent-cyan to-accent-blue text-white shadow-md shadow-accent-cyan/20'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}