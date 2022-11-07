import clsx from 'clsx'
import { useCallback, useState } from 'react'
import styles from './App.module.css'
import { ReactComponent as GithubIcon } from './assets/icon-github.svg'
import Dialog from './components/dialog'
import { useArray } from './utils/useArray'

const loremIpsumApi = 'https://baconipsum.com/api/?type=meat-and-filler&paras=1'

const defaultText = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
A ex error velit labore minima ullam porro doloremque minus assumenda neque quia enim culpa quasi hic,
facilis quo nemo aliquid dolor?`

type LoremResponse = string[]

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(false)
  const paragraphs = useArray([defaultText])

  const addParagraph = useCallback(async () => {
    try {
      const res = await fetch(loremIpsumApi)

      if (res.ok) {
        const data: LoremResponse = await res.json()
        paragraphs.add(data[0])
      } else {
        paragraphs.add(defaultText)
        throw new Error(`Bad API response (${loremIpsumApi}): added default text`)
      }
    } catch (e) {
      // TODO: inform user of error
      console.error(e)
    }
  }, [])

  const resetParagraphs = useCallback(() => {
    paragraphs.clear()
    paragraphs.add(defaultText)
  }, [])

  return (
    <>
      <div className={styles.content}>
        <button
          className={clsx(styles.button, styles.primaryButton)}
          onClick={() => setIsOpen(true)}
        >
          Open dialog
        </button>

        <button
          className={clsx(styles.button, styles.secondaryButton)}
          onClick={addParagraph}
        >
          Add paragraph (count: {paragraphs.value.length})
        </button>

        <button
          className={clsx(styles.button, styles.secondaryButton)}
          onClick={resetParagraphs}
        >
          Reset content
        </button>

        <button
          className={clsx(styles.button, styles.secondaryButton)}
          onClick={() => setCloseOnOverlayClick(shouldClose => !shouldClose)}
        >
          Toggle close on overlay click / touch ({closeOnOverlayClick ? 'on' : 'off'})
        </button>

        <a
          href="https://github.com/wesleycoder/dialog"
          aria-label="Github repository"
          target="_blank"
        >
          <GithubIcon className={styles.github} />
        </a>

        <Dialog
          title="Lemon ipsum"
          isOpen={isOpen}
          closeOnOverlayClick={closeOnOverlayClick}
          onClose={() => setIsOpen(false)}
        >
          {paragraphs.value.map(text => (
            <p key={text}>{text}</p>
          ))}
          <br />
        </Dialog>
      </div>
    </>
  )
}

export default App
