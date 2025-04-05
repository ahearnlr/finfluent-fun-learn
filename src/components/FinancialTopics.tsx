import React from 'react';
import { 
  Banknote, 
  Receipt, 
  Briefcase, 
  AlertTriangle, 
  Ship, 
  TrendingUp,
  Home, 
  CreditCard, 
  Wallet
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TopicItem = ({ icon, label }: { icon: React.ReactNode, label: string }) => {
  return (
    <div className="financial-topic">
      <div className="text-4xl mb-2">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

const FinancialTopics = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-8 px-6 md:px-12 lg:px-24 bg-white/20 backdrop-blur-sm">
      <div className="container mx-auto">
        <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">{t('financialTopics.title')}</h3>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-2 md:gap-4">
          <TopicItem icon={<Banknote className="w-8 h-8 text-green-600" />} label={t('financialTopics.topics.cash')} />
          <TopicItem icon={<Receipt className="w-8 h-8 text-red-500" />} label={t('financialTopics.topics.taxes')} />
          <TopicItem icon={<Briefcase className="w-8 h-8 text-blue-500" />} label={t('financialTopics.topics.assets')} />
          <TopicItem icon={<AlertTriangle className="w-8 h-8 text-yellow-500" />} label={t('financialTopics.topics.liabilities')} />
          <TopicItem icon={<Ship className="w-8 h-8 text-purple-500" />} label={t('financialTopics.topics.retirement')} />
          <TopicItem icon={<TrendingUp className="w-8 h-8 text-teal-500" />} label={t('financialTopics.topics.investing')} />
          <TopicItem icon={<Home className="w-8 h-8 text-amber-500" />} label={t('financialTopics.topics.housing')} />
          <TopicItem icon={<CreditCard className="w-8 h-8 text-indigo-500" />} label={t('financialTopics.topics.credit')} />
          <TopicItem icon={<Wallet className="w-8 h-8 text-finfluent-orange" />} label={t('financialTopics.topics.more')} />
        </div>
      </div>
    </section>
  );
};

export default FinancialTopics;
