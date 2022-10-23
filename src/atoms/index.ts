import { atom } from 'jotai'

export const showSoftKeyboardAtom = atom(false)
export const showControlbarAtom = atom(false)
export const showBottomMenuAtom = atom(false)

export const joystickDirectionAtom = atom<string | null>(null)
export const buttonClickedAtom = atom(false)
