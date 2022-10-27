import { useRef } from 'react'
import styles from './App.module.css'
import { Dialog, DialogHandle } from './components/dialog'

function App() {
  const dialogRef = useRef<DialogHandle>(null)

  return (
    <>
      <div className={styles.content}>
        <button
          className={styles.openDialog}
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem consequatur libero totam deleniti suscipit?
          Repellendus voluptatum officia, in, tempora dignissimos illo dolorem necessitatibus eos ex, provident rerum
          porro fugiat commodi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem consequatur libero totam
          deleniti suscipit? Repellendus voluptatum officia, in, tempora dignissimos illo dolorem necessitatibus eos ex,
          provident rerum porro fugiat commodi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
          consequatur libero totam deleniti suscipit? Repellendus voluptatum officia, in, tempora dignissimos illo
          dolorem necessitatibus eos ex, provident rerum porro fugiat commodi! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Rem consequatur libero totam deleniti suscipit? Repellendus voluptatum officia, in, tempora
          dignissimos illo dolorem necessitatibus eos ex, provident rerum porro fugiat commodi! Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Rem consequatur libero totam deleniti suscipit? Repellendus voluptatum
          officia, in, tempora dignissimos illo dolorem necessitatibus eos ex, provident rerum porro fugiat commodi!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem consequatur libero totam deleniti suscipit?
          Repellendus voluptatum officia, in, tempora dignissimos illo dolorem necessitatibus eos ex, provident rerum
          porro fugiat commodi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem consequatur libero totam
          deleniti suscipit? Repellendus voluptatum officia, in, tempora dignissimos illo dolorem necessitatibus eos ex,
          provident rerum porro fugiat commodi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
          consequatur libero totam deleniti suscipit? Repellendus voluptatum officia, in, tempora dignissimos illo
          dolorem necessitatibus eos ex, provident rerum porro fugiat commodi! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Rem consequatur libero totam deleniti suscipit? Repellendus voluptatum officia, in, tempora
          dignissimos illo dolorem necessitatibus eos ex, provident rerum porro fugiat commodi! Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Rem consequatur libero totam deleniti suscipit? Repellendus voluptatum
          officia, in, tempora dignissimos illo dolorem necessitatibus eos ex, provident rerum porro fugiat commodi!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem consequatur libero totam deleniti suscipit?
          Repellendus voluptatum officia, in, tempora dignissimos illo dolorem necessitatibus eos ex, provident rerum
          porro fugiat commodi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem consequatur libero totam
          deleniti suscipit? Repellendus voluptatum officia, in, tempora dignissimos illo dolorem necessitatibus eos ex,
          provident rerum porro fugiat commodi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
          consequatur libero totam deleniti suscipit? Repellendus voluptatum officia, in, tempora dignissimos illo
          dolorem necessitatibus eos ex, provident rerum porro fugiat commodi! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Rem consequatur libero totam deleniti suscipit? Repellendus voluptatum officia, in, tempora
          dignissimos illo dolorem necessitatibus eos ex, provident rerum porro fugiat commodi! Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Rem consequatur libero totam deleniti suscipit? Repellendus voluptatum
          officia, in, tempora dignissimos illo dolorem necessitatibus eos ex, provident rerum porro fugiat commodi!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem consequatur libero totam deleniti suscipit?
          Repellendus voluptatum officia, in, tempora dignissimos illo dolorem necessitatibus eos ex, provident rerum
          porro fugiat commodi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem consequatur libero totam
          deleniti suscipit? Repellendus voluptatum officia, in, tempora dignissimos illo dolorem necessitatibus eos ex,
          provident rerum porro fugiat commodi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
          consequatur libero totam deleniti suscipit? Repellendus voluptatum officia, in, tempora dignissimos illo
          dolorem necessitatibus eos ex, provident rerum porro fugiat commodi! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Rem consequatur libero totam deleniti suscipit? Repellendus voluptatum officia, in, tempora
          dignissimos illo dolorem necessitatibus eos ex, provident rerum porro fugiat commodi! Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Rem consequatur libero totam deleniti suscipit? Repellendus voluptatum
          officia, in, tempora dignissimos illo dolorem necessitatibus eos ex, provident rerum porro fugiat commodi!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem consequatur libero totam deleniti suscipit?
          Repellendus voluptatum officia, in, tempora dignissimos illo dolorem necessitatibus eos ex, provident rerum
          porro fugiat commodi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem consequatur libero totam
          deleniti suscipit? Repellendus voluptatum officia, in, tempora dignissimos illo dolorem necessitatibus eos ex,
          provident rerum porro fugiat commodi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
          consequatur libero totam deleniti suscipit? Repellendus voluptatum officia, in, tempora dignissimos illo
          dolorem necessitatibus eos ex, provident rerum porro fugiat commodi! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Rem consequatur libero totam deleniti suscipit? Repellendus voluptatum officia, in, tempora
          dignissimos illo dolorem necessitatibus eos ex, provident rerum porro fugiat commodi! Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Rem consequatur libero totam deleniti suscipit? Repellendus voluptatum
          officia, in, tempora dignissimos illo dolorem necessitatibus eos ex, provident rerum porro fugiat commodi!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem consequatur libero totam deleniti suscipit?
          Repellendus voluptatum officia, in, tempora dignissimos illo dolorem necessitatibus eos ex, provident rerum
          porro fugiat commodi!
        </Dialog>
      </div>
    </>
  )
}

export default App
