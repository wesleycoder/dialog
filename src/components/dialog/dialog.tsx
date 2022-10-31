import {
  ForwardedRef,
  forwardRef,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
  TouchEventHandler,
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { ReactComponent as IconClose } from '../../assets/icon-close.svg'
import styles from './dialog.module.css'

type DialogProps = PropsWithChildren<{ title: ReactNode }>

export type DialogHandle = {
  showModal(): void
  close(): void
} & Partial<HTMLDialogElement>

const DialogComponent = ({ title, children }: DialogProps, _ref: ForwardedRef<DialogHandle>) => {
  const [isExpanded, setExpanded] = useState(false)
  const [firstTouch, setFirstTouch] = useState<number>(0)
  const [lastTouch, setLastTouch] = useState<number>(0)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    dialogRef.current?.addEventListener('close', () => {
      setIsOpen(false)
    })
  })

  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overscrollBehaviorY = 'contain'
    } else {
      document.body.style.overscrollBehaviorY = 'auto'
    }

    return () => {
      document.body.style.overscrollBehaviorY = 'auto'
    }
  }, [isOpen])

  useImperativeHandle(
    _ref,
    () => ({
      showModal() {
        dialogRef.current?.showModal()
        setIsOpen(true)
      },
      close() {
        dialogRef.current?.close()
        dialogRef.current?.removeAttribute('open')
      },
    }),
    []
  )

  const closeDialog = useCallback(() => {
    setExpanded(false)
    setFirstTouch(0)
    setLastTouch(0)
    dialogRef.current?.close()
  }, [])

  const handleClose: MouseEventHandler<HTMLDialogElement> = async e => {
    const isBackdrop = e.target instanceof Element && e.target.nodeName === 'DIALOG'

    if (isBackdrop) closeDialog()
  }

  const handleTouchMove: TouchEventHandler<HTMLDialogElement> = e => {
    if (!firstTouch) {
      setFirstTouch(e.targetTouches[0].clientY)
    }

    const isHeader = e.target instanceof Element && e.target.nodeName === 'HEADER'

    const isUp = !isExpanded && e.targetTouches[0].clientY < firstTouch
    const isDown = isHeader && isExpanded && e.targetTouches[0].clientY > lastTouch

    if (isUp || isDown) {
      e.stopPropagation()
      dialogRef.current?.style.setProperty('top', `${e.targetTouches[0].clientY}px`)
      dialogRef.current?.style.setProperty('transition', 'none')
      setLastTouch(e.targetTouches[0].clientY)
    } else {
      dialogRef.current?.style.removeProperty('top')
      dialogRef.current?.style.removeProperty('transition')
    }
  }

  const handleTouchEnd: TouchEventHandler<HTMLDialogElement> = e => {
    const dragThreshold = 200
    dialogRef.current?.style.removeProperty('top')
    dialogRef.current?.style.removeProperty('transition')

    if (!isExpanded && lastTouch <= firstTouch - dragThreshold) {
      dialogRef.current?.classList.add(styles.expanded)
      setExpanded(true)
    } else if (isExpanded && lastTouch >= firstTouch + dragThreshold) {
      dialogRef.current?.classList.remove(styles.expanded)
      setExpanded(false)
    }
    Promise.allSettled(e.currentTarget.getAnimations().map(animation => animation.finished)).then(() => {
      dialogRef.current?.style.removeProperty('top')
    })

    setFirstTouch(0)
    setLastTouch(0)
  }

  return (
    <dialog
      ref={dialogRef}
      open={undefined}
      className={styles.dialog}
      onClose={closeDialog}
      onClick={handleClose}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button
            autoFocus
            className={styles.close}
            onClick={() => dialogRef.current?.close()}
          >
            <IconClose className={styles.closeIcon} />
          </button>
        </header>
        <div className={styles.content}>{children}</div>
      </div>
    </dialog>
  )
}

export const Dialog = forwardRef(DialogComponent)
