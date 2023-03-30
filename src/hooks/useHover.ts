import { MutableRefObject, useEffect, useRef, useState } from 'react'

//https://usehooks.com/useHover/

export function useHover<T>(
  onMouseOut: () => void
): [MutableRefObject<T | null>, boolean] {
  const [value, setValue] = useState(false)

  const ref = useRef<T | null>(null)

  const handleMouseOver = () => setValue(true)
  const handleMouseOut = () => {
    setValue(false)
    onMouseOut()
  }

  useEffect(() => {
    const node: any = ref.current
    if (node) {
      node.addEventListener('mouseover', handleMouseOver)
      node.addEventListener('mouseout', handleMouseOut)
      return () => {
        node.removeEventListener('mouseover', handleMouseOver)
        node.removeEventListener('mouseout', handleMouseOut)
      }
    }
  }, [])

  return [ref, value]
}
