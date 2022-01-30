import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from '../components/UI';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>EduPortal-CET</title>
      </Head>
      <div className={styles.hero}>
        <div>
          <h1>GROW | BUILD | LEARN</h1>
          <Button as="a" href="/learn">
            GET STARTED
          </Button>
        </div>
        <Image
          src={'/study.svg'}
          height={400}
          width={400}
          layout="fixed"
          priority={false}
          placeholder="blur"
          blurDataURL="/study.svg"
        />
      </div>
    </div>
  );
};

export default Home;
