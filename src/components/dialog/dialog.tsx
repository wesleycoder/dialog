import {
  MouseEventHandler,
  PropsWithChildren,
  SyntheticEvent,
  TouchEventHandler,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { ReactComponent as IconClose } from '../../assets/icon-close.svg'
import styles from './dialog.module.css'

export type DialogProps = PropsWithChildren<{
  title: string
  isOpen: boolean
  closeOnOverlayClick: boolean
  onClose: <T extends HTMLElement>(this: T, ev: Event) => any
}>

export const Dialog = ({ title, children, isOpen, closeOnOverlayClick, onClose }: DialogProps) => {
  const [isExpanded, setExpanded] = useState(false)
  const [firstTouch, setFirstTouch] = useState<number>(0)
  const [lastTouch, setLastTouch] = useState<number>(0)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useLayoutEffect(() => {
    dialogRef.current?.addEventListener('close', onClose)

    if (isOpen) {
      dialogRef.current?.showModal?.()
      document.body.style.overscrollBehaviorY = 'contain'
    } else {
      dialogRef.current?.close?.()
      document.body.style.overscrollBehaviorY = 'auto'
    }

    return () => {
      dialogRef.current?.removeEventListener?.('close', onClose)
      dialogRef.current?.removeAttribute?.('open')
      document.body.style.overscrollBehaviorY = 'auto'
    }
  })

  const closeDialog = useCallback((e: SyntheticEvent<HTMLElement, Event>) => {
    setExpanded(false)
    setFirstTouch(0)
    setLastTouch(0)
    dialogRef.current?.close()
  }, [])

  const handleBackdropClick: MouseEventHandler<HTMLDialogElement> = async e => {
    if (closeOnOverlayClick) {
      const isBackdrop = e.target instanceof Element && e.target.nodeName === 'DIALOG'

      if (isBackdrop) dialogRef.current?.close()
    }
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
      className={styles.dialog}
      onClose={closeDialog}
      onClick={handleBackdropClick}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button
            autoFocus
            aria-label="close"
            className={styles.close}
            onClick={closeDialog}
          >
            <IconClose className={styles.closeIcon} />
          </button>
        </header>
        <div className={styles.content}>{children}</div>
      </div>
    </dialog>
  )
}
