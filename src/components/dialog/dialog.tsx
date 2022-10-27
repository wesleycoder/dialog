import { PropsWithChildren, ReactNode } from 'react'
import styles from './dialog.module.css'

type DialogProps = PropsWithChildren<{ title: ReactNode }>

export type DialogHandle = {
  showModal(): void
} & Partial<HTMLDialogElement>

export const Dialog = ({ title, children }: DialogProps) => {
  return (
    <dialog className={styles.dialog}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </dialog>
  )
}
