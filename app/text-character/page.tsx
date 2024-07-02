import Character from '@/components/Character/Character'
import lcs from './page.module.scss'
import { PARAGRAPHS_MOCKS } from '@/components/paragraph/Paragraph.mock'

export default function Page() {

  return (
    <div className={lcs.container}>
      <Character text={PARAGRAPHS_MOCKS} />
    </div>
  )
}
