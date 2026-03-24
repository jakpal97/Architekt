
import CTAContact from '@/components/CTAContact'
import ServicesFooter from '@/components/ServicesFooter'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Kontakt',
  description: 'Skontaktuj się z nami — napisz do nas lub zadzwoń.',
}

export default function Kontakt() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <CTAContact />
      </main>
      <ServicesFooter />
    </>
  )
}
