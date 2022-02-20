import Image, { ImageProps } from "next/image"
import { FC } from "react"
import styles from './Avatar.module.scss'

const Avatar: FC<ImageProps> = ({ src, alt, ...props }) => {
  return (
    <Image className={styles.avatar} height={60} width={60} src={src} alt={alt} {...props} />
  )
}

export default Avatar
