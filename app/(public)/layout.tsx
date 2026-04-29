import PublicFooter from './_components/PublicFooter'
import PublicHeader from './_components/PublicHeader'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <PublicHeader />
      {children}
      <PublicFooter />
    </main>
  )
}
