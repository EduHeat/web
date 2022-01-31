import { NextPage } from "next"
import Head from "next/head";
import { useRouter } from "next/router"
import { Card } from "../../../components/UI";
import styles from '../../../styles/Learn.module.scss';

const Years: NextPage = () => {
  const router = useRouter();
  const title = router.query.id as string;
  return (
    <div>
      <Head>
        <title>
          EduPortal-CET | Learn {title.toUpperCase()}
        </title>
      </Head>
      <div className={styles.container}>
        <Card title="1st year" href="/learn/cse/1st-year" />
        <Card title="2nd year" href="/learn/cse/2nd-year" />
        <Card title="3rd year" href="/learn/cse/3rd-year" />
        <Card title="4th year" href="/learn/cse/4th-year" />
      </div>
    </div>
  )
}

export default Years
