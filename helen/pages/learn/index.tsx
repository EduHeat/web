import { NextPage } from 'next';
import Head from 'next/head';
import subjects from '../../consts/subjects';
import ListItems from '../../components/ListItems/ListItems';
import { Card } from '../../components/UI';

const Learn: NextPage = () => {
  return (
    <div>
      <Head>
        <title>EduPortal-CET | Learn</title>
      </Head>
      <ListItems
        iteratorArr={subjects}
        back="/"
        map={(s) => <Card key={s.id} title={s.title} href={s.href} />}
      />
    </div>
  );
};

export default Learn;
