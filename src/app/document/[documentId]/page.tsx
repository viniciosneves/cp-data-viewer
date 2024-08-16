/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Heading from '@/components/Heading';
import Main from '@/components/Main';
import { getDocumentById } from '@/db';
import { notFound, } from 'next/navigation';
import Link from 'next/link';

export default async function Page({ params }: { params: { documentId: string } }) {

  const documentId = parseInt(params.documentId);
  const document = await getDocumentById(documentId);

  if (!document) {
    notFound();
  }

  return (
    <Main>
      <Link href={`/partner/${document.partnerId}`} className="mb-4 text-blue-500 hover:underline">
        &larr; Back
      </Link>
      <article className="max-w-3xl mx-auto p-4 bg-white rounded shadow-md">
        <Heading level={1} className="text-3xl font-bold mb-4">
          {document.title}
        </Heading>
        <div className="flex items-center mb-4">
          <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">
            {document.type}
          </div>
          [<Link href={document.link} className="text-blue-500 text-sm hover:underline"
            target="_blank"
            rel="noopener noreferrer">
            View Original Document
          </Link>]
        </div>
        <p className="text-gray-600 text-base mb-6">
          {document.description}
        </p>
        <div className="prose lg:prose-xl mb-8 whitespace-pre-wrap">
          <p>{document.content}</p>
        </div>
        {document.media.length > 0 && (
          <div className="mt-8">
            <Heading level={2} className="text-2xl font-semibold mb-4">
              Media
            </Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {document.media.map((mediaItem) => (
                <div key={mediaItem.id} className="bg-gray-100 rounded shadow p-4">
                  {mediaItem.type === 'image' ? (
                    <img
                      src={mediaItem.link}
                      alt={mediaItem.description || 'Image'}
                      className="w-full h-auto object-cover rounded"
                    />
                  ) : (
                    <video
                      controls
                      className="w-full h-auto rounded"
                    >
                      <source src={mediaItem.link} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {mediaItem.description && (
                    <p className="mt-2 text-gray-700 text-sm">{mediaItem.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </Main>
  );
}