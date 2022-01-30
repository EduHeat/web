import Link from 'next/link';
import styles from './Card.module.scss';

const Card = ({ title, href = '/' }: { title: string, href: string }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.subj}>
        <Link href={href}>
          {title}
        </Link>
      </h3>
    </div>
  );
};

export default Card;
