import Main from '@/components/Main';
import PartnersTable from '@/components/PartnersTable';
import { getAllPartners } from '@/db'

export default async function Home() {

  const partners = await getAllPartners()

  return (
    <Main>
      <PartnersTable partners={partners}/>
    </Main>
  );
}
