import clsx from 'clsx'
import styles from './App.module.css'
import { Dialog, DialogHandle } from './components/dialog'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={styles.content}>
        <button
          className={clsx(styles.button, styles.primaryButton)}
          onClick={() => setIsOpen(true)}
        >
          Open dialog
        </button>
        <Dialog
          title="Lemon ipsum"
          isOpen={isOpen}
          closeOnOverlayClick={true}
          onClose={() => setIsOpen(false)}
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
