//This helper is used to detect when the user is in mobile or desktop//
import { useEffect, useState } from 'react'

function useMedia(query, initialState = false) {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    let mounted = true
    const mql = window.matchMedia(query)
    function onChange() {
      if (!mounted) {
        return
      }
      setState(Boolean(mql.matches))
    }

    mql.addEventListener('change', onChange)
    setState(mql.matches)

    return () => {
      mounted = false
      mql.removeEventListener('change', onChange)
    }
  }, [query])

  return state
}

export default useMedia