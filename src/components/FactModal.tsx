import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

// Define the props for the FactModal component
interface FactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  facts: string[];
}

const FactModal: React.FC<FactModalProps> = ({ isOpen, onClose, title, facts }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-white rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center text-gray-800 border-b pb-2 mb-3">
            {title} Facts
          </DialogTitle>
        </DialogHeader>
        <ul className="space-y-3 py-2">
          {facts.map((fact, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-finfluent-orange text-white mr-2 flex-shrink-0 text-sm">
                {index + 1}
              </span>
              <span className="text-gray-700">{fact}</span>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default FactModal; 