import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode, useImperativeHandle, useRef } from 'react'
import { ReactComponent as IconClose } from '../../assets/icon-close.svg'
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
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <button
          autoFocus
          className={styles.close}
          onClick={() => dialogRef.current?.close()}
        >
          <IconClose />
        </button>
      </header>
      <div className={styles.content}>{children}</div>
    </dialog>
  )
}

export const Dialog = forwardRef(DialogComponent)
