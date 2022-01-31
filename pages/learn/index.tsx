import { NextPage } from "next";
import Head from "next/head";
import { Card } from "../../components/UI";
import styles from '../../styles/Learn.module.scss';
import subjects from "../../lib/subjects";
import Image from "next/image";
import Link from "next/link";

const Learn: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          EduPortal-CET | Learn
        </title>
      </Head>
      <div>
        <Link href={'/'}><Image className={styles.back} src={'/back.svg'} width={50} height={50} /></Link>
      </div>
      <div className={styles.container}>
        {subjects.map(s => <Card key={s.id} title={s.title} href={s.href} />)}
      </div>
    </div>
  )
}

export default Learn
