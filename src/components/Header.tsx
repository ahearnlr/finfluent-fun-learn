import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { GlobeIcon } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  // Set English as default language if no language is set
  useEffect(() => {
    if (!i18n.language || i18n.language === 'undefined') {
      i18n.changeLanguage('en');
    }
  }, [i18n]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Get the display name for the current language
  const getCurrentLanguageName = () => {
    const languageMap: Record<string, string> = {
      'en': 'English',
      'es': 'Español',
      'fr': 'Français',
      'de': 'Deutsch',
      'zh': '中文'
    };
    return languageMap[i18n.language] || 'English';
  };

  return (
    <header className="w-full py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center">
      <div className="logo">
        <h1 className="text-2xl md:text-3xl font-bold">
          <span className="text-finfluent-teal">Fin</span>
          <span className="text-finfluent-brown">Fluent</span>
        </h1>
      </div>
      
      <div className="flex items-center gap-4 md:gap-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <GlobeIcon size={18} />
              <span>{getCurrentLanguageName()}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => changeLanguage('en')}>
              English
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => changeLanguage('es')}>
              Español
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => changeLanguage('fr')}>
              Français
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => changeLanguage('de')}>
              Deutsch
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => changeLanguage('zh')}>
              中文
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
