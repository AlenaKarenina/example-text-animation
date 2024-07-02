import Words from '@/components/Word/Word'
import lcs from './page.module.scss'
import { PARAGRAPHS_MOCKS } from '@/components/paragraph/Paragraph.mock'

export default function Page() {

  return (
    <div className={lcs.container}>
      <Words text={PARAGRAPHS_MOCKS} />
    </div>
  )
}
