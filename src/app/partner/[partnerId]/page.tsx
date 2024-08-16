import DocumentTable from '@/components/DocumentTable';
import FormSearchDocument from '@/components/FormSearchDocument';
import Heading from '@/components/Heading';
import Main from '@/components/Main';
import Pagination from '@/components/Pagination';
import PartnerDescription from '@/components/PartnerDescription';
import { getPaginatedDocuments, getPartnerPyId } from '@/db';
import { notFound } from 'next/navigation';

export default async function Page({ params, searchParams }: { params: { partnerId: string }, searchParams: { page: string, q?: string, type?: string } }) {

    const partnerId = parseInt(params.partnerId)
    const page = parseInt(searchParams?.page) || 1

    const partner = await getPartnerPyId(partnerId)
    if (!partner) {
        notFound()
    }

    const { data: documents, prev, next }  = await getPaginatedDocuments(partnerId, page, searchParams.q, searchParams.type)

    return (
        <Main>
            <Heading level={1}>
                {partner.name} ({partner._count.documents} documents)
            </Heading>
            <PartnerDescription partner={partner} />
            <hr />
            <FormSearchDocument />
            <DocumentTable documents={documents || []} />
            <Pagination prev={prev} next={next} basePath={`/partner/${partnerId}`} />

        </Main>
    );
}
