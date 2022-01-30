import { NextPage } from "next";
import Head from "next/head";
import { Card } from "../../components/UI";
import styles from '../../styles/Learn.module.scss'

const Learn: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          EduPortal-CET | Learn
        </title>
      </Head>
      <div className={styles.container}>
        <Card title="CSE" />
        <Card title="CSE" />
        <Card title="CSE" />
        <Card title="CSE" />
        <Card title="CSE" />
        <Card title="CSE" />
        <Card title="CSE" />
      </div>
    </div>
  )
}

export default Learn
