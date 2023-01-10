/*
 * Inspired by Dan Abramov's "Making setInterval Declarative with React Hooks",
 * this is a custom hook for debouncing a callback (e.g. for click handlers) such
 * that a callback will not be fired until some delay has passed since the last click.
 * The callback will automatically be updated with the latest props and state on every
 * render meaning that users don't need to worry about stale information being used.
 *
 * See https://overreacted.io/making-setinterval-declarative-with-react-hooks/ for the
 * original inspiration.
 */
import { useEffect, useRef, useState } from 'react'

const useDebounce = (callback: any, delay: any) => {
  const latestCallback = useRef<any>()
  const latestTimeout = useRef<any>()

  useEffect(() => {
    latestCallback.current = callback
  }, [callback])

  return () => {
    if (latestTimeout.current) {
      clearTimeout(latestTimeout.current)
    }

    latestTimeout.current = setTimeout(() => {
      latestCallback.current()
    }, delay)
  }
}

const UseDebounce = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => setCount((count) => count + 1)
  const handleClick = useDebounce(() => alert(`I've been clicked ${count} times`), 3000)

  return null
}

export default UseDebounce
