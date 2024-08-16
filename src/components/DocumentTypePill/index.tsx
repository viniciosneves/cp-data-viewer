import React from 'react';

interface DocumentTypePillProps {
  type: string;
}

const DocumentTypePill: React.FC<DocumentTypePillProps> = ({ type }) => {
  const getColorClasses = (type: string) => {
    switch (type) {
      case 'breastcancer':
        return 'bg-pink-100 text-pink-800';
      case 'prostate':
        return 'bg-blue-100 text-blue-800';
      case 'general':
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded mr-2 ${getColorClasses(type)}`}>
      {type}
    </div>
  );
};

export default DocumentTypePill;