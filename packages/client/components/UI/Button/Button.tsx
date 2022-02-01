import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import styles from './Button.module.scss'

type ButtonProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
};

const Button = <T extends ElementType = "button">({
  as,
  children,
  ...props
}: ButtonProps<T> & ComponentPropsWithoutRef<T>) => {
  const Component = as || "button";

  return <Component className={styles.button} {...props}>{children}</Component>;
};

export default Button
