import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

export async function getAllPartners() {

    return db.partner.findMany()
}

export async function getPartnerPyId(id: number) {

    return db.partner.findFirst({
        where: {
            id
        }
    })
}

export async function getPaginatedDocuments(
    partnerId: number,
    page: number,
    q?: string,
    type?: string
) {
    const perPage = 20;
    const skip = (page - 1) * perPage;

    const totalItems = await db.document.count({
        where: {
            partnerId,
            type: type || undefined,
            OR: q
                ? [
                    { title: { contains: q, mode: 'insensitive' } },
                    { description: { contains: q, mode: 'insensitive' } },
                ]
                : undefined,
        },
    });

    const totalPages = Math.ceil(totalItems / perPage);
    const prev = page > 1 ? page - 1 : null;
    const next = page < totalPages ? page + 1 : null;

    const documents = await db.document.findMany({
        take: perPage,
        skip,
        orderBy: { id: 'desc' },
        where: {
            partnerId,
            type: type || undefined,
            OR: q
                ? [
                    { title: { contains: q, mode: 'insensitive' } },
                    { description: { contains: q, mode: 'insensitive' } },
                    { content: { contains: q, mode: 'insensitive' } },
                ]
                : undefined,
        },
    });

    return { data: documents, prev, next };
}

export async function getDocumentById(id: number) {

    return db.document.findFirst({
        where: {
            id
        },
        include: {
            media: true
        }
    })
}

export default db