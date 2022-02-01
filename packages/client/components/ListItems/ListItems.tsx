import React from 'react';
import styles from '../../styles/Learn.module.scss';
import Image from "next/image";
import Link from "next/link";
import { Card } from '../UI';

type ListItemProps = {
  back: string;
  iteratorArr: any[];
  map: (param: any) => JSX.Element;
}

const ListItems = ({ back, iteratorArr, map }: ListItemProps) => {
  return (
    <>
      <div>
        <Link href={back} passHref>
          <Image alt='back' className={styles.back} src={'/back.svg'} width={50} height={50} />
        </Link>
      </div>
      <div className={styles.container}>
        {iteratorArr.map(map)}
      </div>
    </>
  )
}

export default ListItems