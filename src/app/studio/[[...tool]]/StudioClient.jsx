'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const NextStudio = dynamic(
  () => import('next-sanity/studio').then((m) => m.NextStudio),
  { ssr: false }
)

export default function StudioClient() {
  const [config, setConfig] = useState(null)

  useEffect(() => {
    import('../../../../sanity.config').then((m) => setConfig(m.default))
  }, [])

  return config ? <NextStudio config={config} /> : null
}
