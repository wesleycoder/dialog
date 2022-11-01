import clsx from 'clsx'
import styles from './App.module.css'
import { Dialog, DialogHandle } from './components/dialog'

function App() {
  const dialogRef = useRef<DialogHandle>(null)

  useEffect(() => {
    const timerId = setTimeout(() => {
      dialogRef.current?.showModal()
    }, 300)

    return () => clearTimeout(timerId)
  }, [])

  return (
    <>
      <div className={styles.content}>
        <button
          className={clsx(styles.button, styles.primaryButton)}
          onClick={() => {
            dialogRef.current?.showModal()
          }}
        >
          Open dialog
        </button>
        <Dialog
          ref={dialogRef}
          title="Lemon"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex error velit labore minima ullam porro doloremque
          minus assumenda neque quia enim culpa quasi hic, facilis quo nemo aliquid dolor?
          <br />
        </Dialog>
      </div>
    </>
  )
}

export default App
