import { useCallback, useState } from 'react'

export const useArray = <T>(initial: T[]) => {
  const [value, setValue] = useState(initial)
  return {
    value,
    setValue,
    add: useCallback((a: T) => setValue(v => [...v, a]), []),
    clear: useCallback(() => setValue(() => []), []),
    removeIndex: useCallback(
      (index: number) =>
        setValue(v => {
          v.splice(index, 1)
          return v
        }),
      []
    ),
  }
}
