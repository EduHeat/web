import { NextPage } from "next"
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"
import { Card } from "../../../../components/UI";
import materials from "../../../../lib/materials";
import styles from '../../../../styles/Learn.module.scss';

const Notes: NextPage = () => {
  const router = useRouter()
  const { id, get } = router.query;
  return (
    <div>
      <Head>
        <title>
          {get} {id}
        </title>
      </Head>
      <div>
        <Link href={`/learn/${id}`}><Image className={styles.back} src={'/back.svg'} width={50} height={50} /></Link>
      </div>
      <div className={styles.container}>
        {materials.map(m => <Card title={m.title} key={m.link} href={`/learn/${id}/${get}/${m.link}`} />)}
      </div>
    </div>
  )
}

export default Notes
