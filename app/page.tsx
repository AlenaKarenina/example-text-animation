import Link from 'next/link'
import { LINKS_MOCKS } from './mocks/mocks'

export default function Home() {

  return (
    <main>
      {LINKS_MOCKS.map(({title, href}, index) =>
        <Link key={index} className='link' href={href}>{title}</Link>
      )}
    </main>
  )
}
