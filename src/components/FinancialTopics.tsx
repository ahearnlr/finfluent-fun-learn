
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

const TopicItem = ({ icon, label }: { icon: React.ReactNode, label: string }) => {
  return (
    <div className="financial-topic">
      <div className="text-4xl mb-2">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

const FinancialTopics = () => {
  return (
    <section className="w-full py-8 px-6 md:px-12 lg:px-24 bg-white/20 backdrop-blur-sm">
      <div className="container mx-auto">
        <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">Explore Financial Topics</h3>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-2 md:gap-4">
          <TopicItem icon={<Banknote className="w-8 h-8 text-green-600" />} label="Cash" />
          <TopicItem icon={<Receipt className="w-8 h-8 text-red-500" />} label="Taxes" />
          <TopicItem icon={<Briefcase className="w-8 h-8 text-blue-500" />} label="Assets" />
          <TopicItem icon={<AlertTriangle className="w-8 h-8 text-yellow-500" />} label="Liabilities" />
          <TopicItem icon={<Ship className="w-8 h-8 text-purple-500" />} label="Retirement" />
          <TopicItem icon={<TrendingUp className="w-8 h-8 text-teal-500" />} label="Investing" />
          <TopicItem icon={<Home className="w-8 h-8 text-amber-500" />} label="Housing" />
          <TopicItem icon={<CreditCard className="w-8 h-8 text-indigo-500" />} label="Credit" />
          <TopicItem icon={<Wallet className="w-8 h-8 text-finfluent-orange" />} label="More" />
        </div>
      </div>
    </section>
  );
};

export default FinancialTopics;
