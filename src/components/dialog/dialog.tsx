import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode, useImperativeHandle, useRef } from 'react'
import styles from './dialog.module.css'

type DialogProps = PropsWithChildren<{ title: ReactNode }>

export type DialogHandle = {
  showModal(): void
} & Partial<HTMLDialogElement>

const DialogComponent = ({ title, children }: DialogProps, _ref: ForwardedRef<DialogHandle>) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  useImperativeHandle(
    _ref,
    () => ({
      showModal() {
        if (dialogRef.current) {
          dialogRef.current.showModal()
        }
      },
      close() {
        if (dialogRef.current) {
          dialogRef.current.close()
        }
      },
    }),
    []
  )

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
    >
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </dialog>
  )
}

export const Dialog = forwardRef(DialogComponent)
