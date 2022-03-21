import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ListItems from '../../../components/ListItems';
import { Card } from '../../../components/UI';
import years from '../../../consts/years';

const Years: NextPage = () => {
  const router = useRouter();
  const title = router.query.id as string;
  return (
    <div>
      <Head>
        <title>EduPortal-CET | Learn {title}</title>
      </Head>
      <ListItems
        back="/learn"
        iteratorArr={years}
        map={(y) => <Card key={y} title={y} href={`/learn/${title}/${y}`} />}
      />
    </div>
  );
};

export default Years;
