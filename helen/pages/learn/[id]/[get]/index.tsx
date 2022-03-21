import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ListItems from '../../../../components/ListItems';
import { Card } from '../../../../components/UI';
import materials from '../../../../consts/materials';
import styles from '../../../../styles/Learn.module.scss';

const Notes: NextPage = () => {
  const router = useRouter();
  const { id, get } = router.query;
  return (
    <div>
      <Head>
        <title>
          {get} {id}
        </title>
      </Head>
      <ListItems
        back={`/learn/${id}`}
        iteratorArr={materials}
        map={(m) => (
          <Card
            title={m.title}
            key={m.link}
            href={`/learn/${id}/${get}/${m.link}`}
          />
        )}
      />
    </div>
  );
};

export default Notes;
