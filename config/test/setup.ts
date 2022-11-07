import '@testing-library/jest-dom'
import { beforeAll, vi } from 'vitest'

beforeAll(() => {
  HTMLDialogElement.prototype.show = vi.fn(function mock(this: HTMLDialogElement) {
    this.open = true
    this.inert = false
  })
  HTMLDialogElement.prototype.showModal = vi.fn(function mock(this: HTMLDialogElement) {
    this.open = true
    this.inert = false
  })
  HTMLDialogElement.prototype.close = vi.fn(function mock(this: HTMLDialogElement) {
    this.open = false
    this.inert = true
  })
})
