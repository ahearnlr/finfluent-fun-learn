import React, { useState } from 'react';
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
import FactModal from './FactModal';

const TopicItem = ({ 
  icon, 
  label, 
  topicKey, 
  onClick 
}: { 
  icon: React.ReactNode, 
  label: string, 
  topicKey: string, 
  onClick: (topic: string) => void 
}) => {
  return (
    <div 
      className="financial-topic cursor-pointer transition-transform hover:scale-105" 
      onClick={() => onClick(topicKey)}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

const topics = {
  cash: {
    title: 'Cash',
    facts: [
      '50% of Americans do not understand basic budgeting.',
      'Gen Z (18-24): 67% scored less than 50% on financial literacy tests.',
      'Aged 51+: 33% did not pass advanced tests.',
    ],
  },
  taxes: {
    title: 'Taxes',
    facts: [
      '2% of Americans have "proficient" tax knowledge.',
      'Ages 18-45: 45% are unable to correctly ID tax brackets.',
      'Income gap: <$25k: 32% understood tax rates. $100k+: 50% understood.',
    ],
  },
  assets: {
    title: 'Assets',
    facts: [
      'Only 35% of Americans correctly identify depreciating items as liabilities.',
      '44% of Americans scored poorly on questions related to investing and asset management.',
    ],
  },
  investing: {
    title: 'Investing',
    facts: [
      '54% cannot answer investing questions correctly.',
      '65% do not understand risk.',
      'Education gap: College grads: 62% literacy. No high school diploma: 29%.',
    ],
  },
  liabilities: {
    title: 'Liabilities',
    facts: [
      '44 million Americans hold student loan debt, totaling $1.77 trillion.',
      '85% of borrowers expect student loan repayment to cause financial hardship.',
      '42% of Gen Z believe all debt should be avoided.',
    ],
  },
  credit: {
    title: 'Credit',
    facts: [
      '35% of Gen Z could not define APR or credit score impacts.',
      'Only 58% of adults score correctly on debt/borrowing knowledge.',
      '1 in 4 Americans lack access to trusted financial guidance.',
      '23% of adults ages 18–29 have credit card debt overdue by 90+ days.',
    ],
  },
  retirement: {
    title: 'Retirement Planning',
    facts: [
      'Only 39% of Americans contribute to retirement funds.',
      '32% of working-age Americans lack savings entirely.',
      '56% of Americans feel behind on retirement savings.',
    ],
  },
  housing: {
    title: 'Housing',
    facts: [
      '66% of adults 65+ believe they pay fair taxes.',
      '40% of homeowners cannot distinguish between a closed-end home equity loan and a HELOC.',
      '77% do not know the average HELOC interest rate.',
    ],
  },
};

const FinancialTopics = () => {
  const { t } = useTranslation();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const openModal = (topic: string) => {
    setSelectedTopic(topic);
  };

  const closeModal = () => {
    setSelectedTopic(null);
  };

  return (
    <section className="w-full py-8 px-6 md:px-12 lg:px-24 bg-white/20 backdrop-blur-sm">
      <div className="container mx-auto">
        <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">{t('financialTopics.title')}</h3>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-2 md:gap-4">
          <TopicItem 
            icon={<Banknote className="w-8 h-8 text-green-600" />} 
            label={t('financialTopics.topics.cash')} 
            topicKey="cash" 
            onClick={openModal} 
          />
          <TopicItem 
            icon={<Receipt className="w-8 h-8 text-red-500" />} 
            label={t('financialTopics.topics.taxes')} 
            topicKey="taxes" 
            onClick={openModal} 
          />
          <TopicItem 
            icon={<Briefcase className="w-8 h-8 text-blue-500" />} 
            label={t('financialTopics.topics.assets')} 
            topicKey="assets" 
            onClick={openModal} 
          />
          <TopicItem 
            icon={<AlertTriangle className="w-8 h-8 text-yellow-500" />} 
            label={t('financialTopics.topics.liabilities')} 
            topicKey="liabilities" 
            onClick={openModal} 
          />
          <TopicItem 
            icon={<Ship className="w-8 h-8 text-purple-500" />} 
            label={t('financialTopics.topics.retirement')} 
            topicKey="retirement" 
            onClick={openModal} 
          />
          <TopicItem 
            icon={<TrendingUp className="w-8 h-8 text-teal-500" />} 
            label={t('financialTopics.topics.investing')} 
            topicKey="investing" 
            onClick={openModal} 
          />
          <TopicItem 
            icon={<Home className="w-8 h-8 text-amber-500" />} 
            label={t('financialTopics.topics.housing')} 
            topicKey="housing" 
            onClick={openModal} 
          />
          <TopicItem 
            icon={<CreditCard className="w-8 h-8 text-indigo-500" />} 
            label={t('financialTopics.topics.credit')} 
            topicKey="credit" 
            onClick={openModal} 
          />
          <div className="financial-topic">
            <div className="text-4xl mb-2">
              <Wallet className="w-8 h-8 text-finfluent-orange" />
            </div>
            <span className="text-sm font-medium">{t('financialTopics.topics.more')}</span>
          </div>
        </div>

        {selectedTopic && (
          <FactModal
            isOpen={!!selectedTopic}
            onClose={closeModal}
            title={topics[selectedTopic]?.title || ''}
            facts={topics[selectedTopic]?.facts || []}
          />
        )}
      </div>
    </section>
  );
};

export default FinancialTopics;
