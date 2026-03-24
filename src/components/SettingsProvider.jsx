'use client'

import { createContext, useContext } from 'react'

const SettingsContext = createContext(null)

export function useSettings() {
  return useContext(SettingsContext)
}

export default function SettingsProvider({ settings, children }) {
  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  )
}
