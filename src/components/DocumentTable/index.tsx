import { Document } from '@prisma/client';
import Link from 'next/link';
import React from 'react';

interface DocumentTableProps {
  documents: Document[];
}

const DocumentTable: React.FC<DocumentTableProps> = ({ documents }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 uppercase tracking-wider">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {documents.map((document) => (
            <tr key={document.id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {document.title || 'N/A'}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {document.description || 'N/A'}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {document.type}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <Link
                  href={`/document/${document.id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Document
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentTable;