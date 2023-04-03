import { MenuContext } from '@/contexts/MenuContext'
import { useContext } from 'react'

export default function useMenuContext() {
  return useContext(MenuContext)
}
