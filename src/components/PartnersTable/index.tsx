import { Partner } from '@prisma/client';
import React from 'react';

interface PartnersTableProps {
  partners: Partner[];
}

const PartnersTable: React.FC<PartnersTableProps> = ({ partners }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {partners.map((partner) => (
            <tr key={partner.id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {partner.id}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {partner.name}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {partner.description || 'N/A'}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <a
                  href={`/partner/${partner.id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PartnersTable;