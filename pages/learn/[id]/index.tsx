import { NextPage } from "next"
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"
import { Card } from "../../../components/UI";
import years from "../../../lib/years";
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
      <div>
        <Link href={'/learn'}><Image className={styles.back} src={'/back.svg'} width={50} height={50} /></Link>
      </div>
      <div className={styles.container}>
        {years.map(y => (
          <Card key={y} title={y} href={`/learn/${title}/${y}`} />
        ))}
      </div>
    </div>
  )
}

export default Years
