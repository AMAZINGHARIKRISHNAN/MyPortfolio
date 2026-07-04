import { useState, useEffect } from 'react'

export function useTypewriter(texts, speed = 75) {
  const [output, setOutput] = useState('')
  const [tIdx, setTIdx] = useState(0)
  const [cIdx, setCIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[tIdx]
    let timeout

    if (!deleting) {
      if (cIdx < current.length) {
        timeout = setTimeout(() => {
          setOutput(current.slice(0, cIdx + 1))
          setCIdx(c => c + 1)
        }, speed)
      } else {
        timeout = setTimeout(() => setDeleting(true), 2200)
      }
    } else {
      if (cIdx > 0) {
        timeout = setTimeout(() => {
          setOutput(current.slice(0, cIdx - 1))
          setCIdx(c => c - 1)
        }, speed / 2)
      } else {
        setDeleting(false)
        setTIdx(i => (i + 1) % texts.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [cIdx, deleting, tIdx, texts, speed])

  return output
}
