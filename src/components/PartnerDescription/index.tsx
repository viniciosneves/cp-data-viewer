import { Partner } from '@prisma/client';
import React from 'react';

interface PartnerDescriptionProps {
  partner: Partner;
}

const PartnerDescription: React.FC<PartnerDescriptionProps> = ({ partner }) => {
  return (
    <div className="space-y-4 my-3">
      <div>
        <h2 className="text-lg font-semibold">Description</h2>
        <p className="text-gray-700">{partner.description || 'No description available.'}</p>
      </div>
    </div>
  );
};

export default PartnerDescription;