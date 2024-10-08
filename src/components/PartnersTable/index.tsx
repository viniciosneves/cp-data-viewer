import { Partner } from '@prisma/client';
import Link from 'next/link';
import React from 'react';

interface IPartner extends Partner {
  _count: { documents: number }
}

interface PartnersTableProps {
  partners: IPartner[];
}

const PartnersTable: React.FC<PartnersTableProps> = ({ partners }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
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
                <Link
                  href={`/partner/${partner.id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {partner.name} ({partner._count.documents} documents)
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {partner.description || 'N/A'}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <Link
                  href={`/partner/${partner.id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PartnersTable;