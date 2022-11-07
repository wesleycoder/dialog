import { describe, expect, it, vi } from 'vitest'
import { Dialog, DialogProps } from './dialog'
import { render } from '/config/test/render'

describe('Dialog', () => {
  it('should render hidden if isOpen is false', async () => {
    const props: DialogProps = {
      title: 'Lemon ipsum',
      isOpen: false,
      closeOnOverlayClick: false,
      onClose: vi.fn(),
    }

    const { container, findByRole } = render(<Dialog {...props} />)

    const dialog = (await findByRole('dialog', { hidden: true })) as HTMLDialogElement
    expect(dialog.open).toBe(props.isOpen)

    expect(container).toMatchSnapshot()
  })

  it('should render visible if isOpen is true', async () => {
    const props: DialogProps = {
      title: 'Lemon ipsum',
      isOpen: true,
      closeOnOverlayClick: false,
      onClose: vi.fn(),
    }

    const { container, findByRole, getByRole } = render(<Dialog {...props} />)

    const dialog = (await findByRole('dialog')) as HTMLDialogElement
    expect(dialog.open).toBe(props.isOpen)

    const header = getByRole('heading', { name: props.title })
    expect(header.textContent).toBe(props.title)

    expect(container).toMatchSnapshot()
  })

  it('should render with children', async () => {
    const props: DialogProps = {
      title: 'Lemon ipsum',
      isOpen: true,
      closeOnOverlayClick: false,
      onClose: vi.fn(),
    }

    const { container, getByRole, findByRole } = render(
      <Dialog {...props}>
        <p>Lemon ipsum dolor sit amet</p>
      </Dialog>
    )

    const dialog = (await findByRole('dialog')) as HTMLDialogElement
    expect(dialog.open).toBe(props.isOpen)

    const header = getByRole('heading', { name: props.title })
    expect(header.textContent).toBe(props.title)

    expect(container).toMatchSnapshot()
  })

  /**
   * FIXME: jsdom doesn't fully support HTMLDialogElement and close event still tricky to mock
   * watch for this issue to be resolved:
   * https://github.com/jsdom/jsdom/issues/3294
   */
  it.skip('should trigger onClose when clicking on close button', async () => {
    const props: DialogProps = {
      title: 'Lemon ipsum',
      isOpen: true,
      closeOnOverlayClick: false,
      onClose: vi.fn(),
    }

    const { getByRole, findByRole } = render(<Dialog {...props} />)

    const dialog = (await findByRole('dialog')) as HTMLDialogElement
    expect(dialog.open).toBe(props.isOpen)

    const closeButton = getByRole('button', { name: 'close' })

    closeButton.click()

    expect(props.onClose).toHaveBeenCalled()
  })
})
