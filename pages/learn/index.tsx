import { NextPage } from "next";
import Head from "next/head";
import { Card } from "../../components/UI";
import styles from '../../styles/Learn.module.scss';
import subjects from "../../lib/subjects";

const Learn: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          EduPortal-CET | Learn
        </title>
      </Head>
      <div className={styles.container}>
        {subjects.map(s => <Card key={s.id} title={s.title} href={s.href} />)}
      </div>
    </div>
  )
}

export default Learn
