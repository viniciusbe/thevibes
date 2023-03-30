import { createContext, useCallback, useState, ReactNode } from 'react'

export const MenuContext = createContext({
  isMenuOpen: false,
  toggleMenu: () => {},
})

export default function MenuContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => {
      const newState = !prevState
      const bodyEl = document.body
      newState
        ? bodyEl.classList.add('noScroll')
        : bodyEl.classList.remove('noScroll')
      return newState
    })
  }, [])

  const value = {
    isMenuOpen,
    toggleMenu,
  }

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}
