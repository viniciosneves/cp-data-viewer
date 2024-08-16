import React from 'react';
import Link from 'next/link';

interface PaginationProps {
  prev: number | null;
  next: number | null;
  basePath: string;
}

const Pagination: React.FC<PaginationProps> = ({ prev, next, basePath }) => {
  return (
    <div className="flex space-x-4 mt-4">
      {prev !== null ? (
        <Link
          href={{
            pathname: basePath,
            query: { page: prev },
          }}
          passHref
        >
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            &larr; Prev
          </button>
        </Link>
      ) : (
        <button
          className="px-4 py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed"
          disabled
        >
          &larr; Prev
        </button>
      )}
      {next !== null ? (
        <Link
          href={{
            pathname: basePath,
            query: { page: next },
          }}
          passHref
        >
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Next &rarr;
          </button>
        </Link>
      ) : (
        <button
          className="px-4 py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed"
          disabled
        >
          Next &rarr;
        </button>
      )}
    </div>
  );
};

export default Pagination;